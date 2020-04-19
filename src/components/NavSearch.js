import React, { useState } from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  input: {
    width: "80%",
    transition: "all 0.25s ease-out",
    paddingLeft: 20,
    paddingRight: 80,
    height: 30,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    color: theme.palette.text.primary,
    border: "none",
    "&:focus": {
      backgroundColor: theme.palette.background.other,
      width: "100%"
    },
    "&::placeholder": {
      color: theme.palette.text.hint
    }
  },
  submit: {
    fontSize: "small",
    cursor: "pointer",
    height: 30,
    padding: "0px 15px",
    position: "absolute",
    right: 0
  },
  form: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end"
  }
}));

export default function NavSearch() {
  const classes = useStyles();
  const [term, setTerm] = useState("");
  return (
    <form
      className={classes.form}
      onSubmit={e => {
        e.preventDefault();
        Router.push({
          pathname: "/results",
          query: { term }
        });
      }}
    >
      <input
        className={classes.input}
        type="text"
        onChange={e => setTerm(e.target.value)}
        placeholder="Term"
        pattern="^[\w\s!#$\-']+$"
        title="Only numbers, letters, dollar signs ($), hashtags (#), and dashes (-) are allowed"
        required
      />
      <Button
        className={classes.submit}
        type="submit"
        variant="contained"
        color="primary"
      >
        Analyze
      </Button>
    </form>
  );
}

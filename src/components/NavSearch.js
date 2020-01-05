import React, { useState } from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  input: {
    width: "100%",
    transition: "all 0.1s ease-out",
    paddingLeft: 20,
    paddingRight: 80,
    height: 30,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    outline: "none",
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    "&:focus": {
      boxShadow: `3px 10px 15px rgba(0,0,0,0.25)`
    },
    "&::placeholder": {
      color: theme.palette.text.hint
    }
  },
  submit: {
    cursor: "pointer",
    height: 30,
    padding: "0px 15px",
    position: "absolute",
    right: 0,
    transition: "all 0.1s ease-out",
    borderRadius: theme.shape.borderRadius,
    border: "none",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    outline: "none",
    "&:hover": {
      boxShadow: `3px 10px 15px ${theme.palette.primary.light}`
    },
    "&:focus": {
      backgroundColor: theme.palette.primary.dark
    }
  },
  form: {
    position: "relative"
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
        placeholder="Bitcoin"
        pattern="^[\w\s!#$']+$"
        title="Only numbers, letters, dollar signs ($), and hashtags (#) are allowed"
        required
      />
      <input className={classes.submit} type="submit" value="Analyze" />
    </form>
  );
}

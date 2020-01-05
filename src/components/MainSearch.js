import React, { useState } from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    marginTop: theme.spacing(4),
    transition: "all 0.25s ease-out",
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    fontSize: "18pt",
    width: "100%",
    border: "none",
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    "&:focus": {
      backgroundColor: theme.palette.background.other
    },
    "&::placeholder": {
      color: theme.palette.text.hint
    }
  },
  submit: {
    cursor: "pointer",
    marginTop: theme.spacing(4),
    height: 60,
    position: "absolute",
    right: 40,
    width: 100,
    fontSize: "14pt",
    border: "none",
    transition: "all 0.25s ease-out",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    outline: "none",
    boxShadow: theme.shadows[2],
    "&:hover": {
      boxShadow: theme.shadows[5]
    },
    "&:focus": {
      backgroundColor: theme.palette.primary.dark
    }
  }
}));

export default function MainSearch() {
  const [term, setTerm] = useState("");
  const classes = useStyles();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        Router.push({
          pathname: "/results",
          query: { term }
        });
      }}
    >
      <input
        type="text"
        className={classes.input}
        onChange={e => setTerm(e.target.value)}
        placeholder="Bitcoin"
        pattern="^[\w\s!#$']+$"
        title="Only numbers, letters, dollar signs ($), and hashtags (#) are allowed"
        required
      />
      <input type="submit" className={classes.submit} value={"Analyze"} />
    </form>
  );
}

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
    transition: "all 0.1s ease-out",
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    fontSize: "18pt",
    width: "100%",
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    borderRadius: theme.radius,
    color: theme.palette.text.primary,
    "&:focus": {
      boxShadow: `3px 10px 15px rgba(0,0,0,0.25)`
    },
    "&::placeholder": {
      color: theme.palette.text.hint
    }
  },
  submit: {
    cursor: "pointer",
    marginTop: theme.spacing(4),
    transition: "all 0.1s ease-out",
    height: 60,
    position: "absolute",
    right: 40,
    width: 100,
    border: "none",
    borderRadius: theme.radius,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: "14pt",
    outline: "none",
    "&:hover": {
      boxShadow: `3px 10px 15px ${theme.palette.primary.light}`
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

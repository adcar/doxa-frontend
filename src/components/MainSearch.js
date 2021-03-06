import React, { useState } from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const btnWidth = 120;
const height = 60;

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative"
  },
  input: {
    marginTop: theme.spacing(4),
    width: "100%",
    height,
    transition: "all 0.25s ease-out",
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    fontSize: "18pt",
    border: "none",
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      paddingRight: `calc(${btnWidth}px + ${theme.spacing(2)}px)`
    },

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
    height,
    width: "100%",
    fontSize: "medium",
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      width: btnWidth,
      right: 0
    }
  }
}));

export default function MainSearch() {
  const [term, setTerm] = useState("");
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      onSubmit={e => {
        e.preventDefault();
        Router.push({
          pathname: "/results",
          query: { term }
        }).then(() => window.scrollTo(0, 0));
        1;
      }}
    >
      <input
        autoFocus
        type="text"
        className={classes.input}
        onChange={e => setTerm(e.target.value)}
        placeholder="Term (e.g., business name)"
        pattern="^[\w\s!#$\-']+$"
        title="Only numbers, letters, dollar signs ($), hashtags (#), and dashes (-) are allowed"
        required
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.submit}
      >
        Analyze
      </Button>
    </form>
  );
}

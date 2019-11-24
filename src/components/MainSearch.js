import React, { useState } from "react";
import Router from "next/router";
import { gql } from "apollo-boost";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function MainSearch() {
  const [term, setTerm] = useState("");

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
      <TextField
        id="standard-basic"
        label="Stocks, Hashtags, Companies, Cryptocurrencies, and More"
        margin="normal"
        variant="outlined"
        onChange={e => setTerm(e.target.value)}
        fullWidth
      />
    </form>
  );
}

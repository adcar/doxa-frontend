import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import HashLoader from "react-spinners/HashLoader";
import { Typography } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Gauge from "./Gauge";

const GET_SENTIMENT = gql`
  query GetSentiment($term: String!) {
    sentiment(term: $term) {
      averageWeighedPolarity
    }
  }
`;
const useStyles = makeStyles(theme => ({
  spinnerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  spinner: {
    marginBottom: theme.spacing(4)
  },
  spinnerLabel: {
    marginTop: 50
  },
  resultsWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export default function Results({ term }) {
  const classes = useStyles();
  const theme = useTheme();
  const { loading, error, data } = useQuery(GET_SENTIMENT, {
    variables: { term }
  });

  if (loading)
    return (
      <Container className={classes.spinnerWrapper}>
        <HashLoader color={theme.palette.primary.main} size={150} />
        <Typography
          gutterBottom
          variant="h2"
          color="primary"
          className={classes.spinnerLabel}
        >
          Analyzing Tweets
        </Typography>
        <Typography variant="subtitle1">
          This usually takes about 5 seconds
        </Typography>
      </Container>
    );
  if (error) return <p>ERROR: {error}</p>;

  return (
    <Container className={classes.resultsWrapper}>
      <Gauge
        value={Math.round(data.sentiment.averageWeighedPolarity * 100)}
        dialStartAngle={180}
        dialEndAngle={0}
        min={-100}
        max={100}
        color={value => {
          if (value > 25) {
            return "#5ee432";
          } else if (value > 0) {
            return "#fffa50";
          } else if (value > -25) {
            return "#f7aa38";
          } else {
            return "#ef4655";
          }
        }}
      />
    </Container>
  );
}

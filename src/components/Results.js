import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import HashLoader from "react-spinners/HashLoader";
import Typography from "@material-ui/core/Typography";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Gauge from "./Gauge";
import Twemoji from "react-twemoji";
import "./twemoji.css";

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
  },
  label: {
    position: "absolute",
    top: 160,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  value: {
    fontSize: "80pt",
    marginTop: 0,
    textAlign: "center"
  },
  emoji: {
    textAlign: "center",
    marginBottom: 20
  },
  negative: {
    fontSize: "50pt",
    position: "absolute",
    bottom: 50,
    right: 70
  },
  lowest: {
    position: "absolute",
    left: -100,
    top: 320,
    fontSize: "30pt",
    color: "#ffc6c2"
  },
  highest: {
    position: "absolute",
    right: -80,
    top: 320,
    fontSize: "30pt",
    color: "#b6ffb5"
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
  if (error) {
    if (error.graphQLErrors[0]) {
      return <p>Error: {error.graphQLErrors[0].message}</p>;
    } else {
      return <p>An unknown error has occurred</p>;
    }
  }

  const value = Math.round(data.sentiment.averageWeighedPolarity * 100);

  let emoji;
  let color;
  let sentiment;
  if (value > 50) {
    emoji = "😊";
    color = "#42ff55";
    sentiment = "Overwhelmingly Positive";
  } else if (value > 25) {
    emoji = "😊";
    color = "#42ff55";
    sentiment = "Very Positive";
  } else if (value > 4) {
    emoji = "☺️";
    color = "#5ee432";
    sentiment = "Positive";
  } else if (value > -4) {
    emoji = "😑";
    color = "#fffa50";
    sentiment = "Neutral";
  } else if (value > -25) {
    emoji = "😠";
    color = "#f7aa38";
    sentiment = "Negative";
  } else if (value > -50) {
    emoji = "😡";
    color = "#ef4655";
    sentiment = "Very Negative";
  } else {
    emoji = "😡";
    color = "#ef4655";
    sentiment = "Overwhelmingly Negative";
  }
  let formattedValue;
  if (value < 0) {
    formattedValue = (
      <div>
        <span className={classes.negative} style={{ color: color }}>
          -
        </span>
        <span className={classes.value} style={{ color: color }}>
          {Math.abs(value)}
        </span>
      </div>
    );
  } else {
    formattedValue = (
      <div>
        <span className={classes.value} style={{ color: color }}>
          {value}
        </span>
      </div>
    );
  }
  return (
    <Container className={classes.resultsWrapper}>
      <Twemoji className={classes.label} options={{ className: "twemoji" }}>
        <Typography className={classes.lowest}>-100</Typography>
        <Typography className={classes.highest}>100</Typography>
        <p className={classes.emoji}>{emoji}</p>
        <Typography style={{ margin: 0, textAlign: "center" }}>
          {sentiment}
        </Typography>
        {formattedValue}
      </Twemoji>
      <Gauge
        showValue={false}
        value={value}
        min={-100}
        max={100}
        color={() => color}
      />
    </Container>
  );
}

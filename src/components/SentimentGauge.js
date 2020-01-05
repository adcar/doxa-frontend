import React from "react";
import Twemoji from "react-twemoji";
import Typography from "@material-ui/core/Typography";
import Gauge from "./Gauge";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    maxWidth: 500,
    [theme.breakpoints.up("sm")]: {
      transform: "scale(0.75)"
    }
  },
  label: {
    ["@media screen and (min-width: 600px)"]: {
      top: 80,
      width: 300,
      height: 325
    },
    [theme.breakpoints.up("md")]: {
      width: 250
    },

    top: 60,
    width: 200,
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column"
  },
  value: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "80pt"
    },
    fontSize: "40pt",
    marginTop: 0,
    textAlign: "center"
  },
  emoji: {
    textAlign: "center",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      "& > .twemoji": {
        width: 60,
        height: 60
      }
    }
  },
  negative: {
    [theme.breakpoints.up("sm")]: {
      bottom: 25,
      fontSize: "50pt"
    },
    bottom: 7,
    fontSize: "30pt",
    position: "relative"
  },
  lowest: {
    [theme.breakpoints.up("sm")]: {
      top: 370,
      fontSize: "22pt"
    },
    left: -40,
    fontSize: "20pt",
    top: 200,
    position: "absolute",

    color: theme.palette.secondary.light
  },
  highest: {
    [theme.breakpoints.up("sm")]: {
      top: 370,
      fontSize: "22pt"
    },
    right: -20,
    fontSize: "20pt",
    top: 200,
    position: "absolute",

    color: theme.palette.primary.light
  },

  sentiment: {
    margin: 0,
    textAlign: "center",
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      fontSize: "18pt"
    }
  }
}));

export default function SentimentGauge({ value }) {
  const classes = useStyles();
  const theme = useTheme();
  let emoji;
  let sentiment;
  let color;
  if (value > 50) {
    emoji = "😊";
    color = theme.palette.primary.main;
    sentiment = "Overwhelmingly Positive";
  } else if (value > 25) {
    emoji = "😊";
    color = theme.palette.primary.main;
    sentiment = "Very Positive";
  } else if (value > 4) {
    emoji = "☺️";
    color = theme.palette.primary.main;
    sentiment = "Positive";
  } else if (value > -4) {
    emoji = "😑";
    color = theme.palette.neutral.main;
    sentiment = "Neutral";
  } else if (value > -25) {
    emoji = "😠";
    color = theme.palette.secondary.main;
    sentiment = "Negative";
  } else if (value > -50) {
    emoji = "😡";
    color = theme.palette.secondary.main;
    sentiment = "Very Negative";
  } else {
    emoji = "😡";
    color = theme.palette.secondary.main;
    sentiment = "Overwhelmingly Negative";
  }
  let formattedValue;
  if (value < 0) {
    formattedValue = (
      <div className={classes.valueWrapper}>
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
      <div className={classes.valueWrapper}>
        <span className={classes.value} style={{ color: color }}>
          {value}
        </span>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Twemoji className={classes.label} options={{ className: "twemoji" }}>
        <Typography className={classes.lowest}>-100</Typography>
        <Typography className={classes.highest}>100</Typography>
        <p className={classes.emoji}>{emoji}</p>
        <Typography className={classes.sentiment}>{sentiment}</Typography>
        {formattedValue}
      </Twemoji>
      <Gauge
        showValue={false}
        value={value}
        min={-100}
        max={100}
        color={value => {
          if (value > 50) {
            return theme.palette.primary.main;
          } else if (value > 25) {
            return theme.palette.primary.main;
          } else if (value > 4) {
            return theme.palette.primary.main;
          } else if (value > -4) {
            return theme.palette.neutral.main;
          } else if (value > -25) {
            return theme.palette.secondary.main;
          } else if (value > -50) {
            return theme.palette.secondary.main;
          } else {
            return theme.palette.secondary.main;
          }
        }}
      />
    </div>
  );
}

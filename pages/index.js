import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ReactRotatingText from "react-rotating-text";
import MainSearch from "../src/components/MainSearch";
import splash from "../public/splash.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    backgroundColor: theme.palette.background.default,
    position: "absolute",
    maxWidth: 600,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(5),
    margin: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(15)
    },

    boxShadow:
      theme.palette.type === "light"
        ? `5px 10px 15px ${theme.shadowColor}`
        : [theme.shadows[13]]
  },
  splash: {
    height: `calc(100vh - 40px)`,
    width: "100%",
    backgroundPosition: "right",
    backgroundImage: `url(${splash})`,
    backgroundSize: `70vw auto`,
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  heading: {
    color:
      theme.palette.type === "light"
        ? theme.palette.primary.main
        : theme.palette.primary.light
  }
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.splash}>
      <Box my={4} className={classes.form}>
        <Typography
          className={classes.heading}
          variant="h3"
          component="h1"
          gutterBottom
        >
          Sentiment Analysis for
          <br />
          <ReactRotatingText
            items={["Hashtags", "Companies", "Cryptocurrencies", "Stocks"]}
            deletingInterval={40}
          />
        </Typography>
        <Typography variant="subtitle1">
          Doxa automatically performs sentiment analysis on hundreds of Tweets
          based on your query.
        </Typography>
        <MainSearch />
      </Box>
    </div>
  );
}

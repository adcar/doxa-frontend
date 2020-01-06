import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ReactRotatingText from "react-rotating-text";
import MainSearch from "../src/components/MainSearch";
import splash from "../public/splash.svg";
import { makeStyles } from "@material-ui/core/styles";
import analysis from "../public/undraw_analysis.svg";
import ai from "../public/undraw_artificial_intelligence.svg";

const useStyles = makeStyles(theme => ({
  form: {
    backgroundColor: theme.palette.background.default,

    maxWidth: 600,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(5),
    margin: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(16)
    },

    boxShadow:
      theme.palette.type === "light"
        ? `5px 10px 15px ${theme.shadowColor}`
        : [theme.shadows[13]]
  },
  splash: {
    minHeight: `calc(70vh - 80px)`,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      height: `calc(100vh - 140px)`,
      justifyContent: "flex-start",
      backgroundPosition: `right ${theme.spacing(16)}px center`,
      backgroundImage: `url(${splash})`,
      backgroundSize: `60vw auto`,
      backgroundRepeat: "no-repeat",
      backgroundColor: theme.palette.background.default
    }
  },
  heading: {
    color:
      theme.palette.type === "light"
        ? theme.palette.primary.main
        : theme.palette.primary.light
  },
  panel1: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(8),
    paddingBottom: theme.spacing(12),
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius
  },
  panel2: {
    position: "relative",
    top: -1 * theme.spacing(4),
    backgroundColor: theme.palette.background.default,

    padding: theme.spacing(8),
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius
  }
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
      <div className={classes.panel1}>
        <Container>
          <Grid container spacing={8} alignItems="center">
            <Grid item md={6} xs={12} justify="left">
              <Typography variant="h3" color="primary" gutterBottom>
                What is Sentiment Analysis?
              </Typography>
              <Typography>
                Sentiment analysis lets you get a feel for how people think of
                your business / stock / etc. In other words: you can gain
                insight into how well liked or disliked something is. Doxa
                performs automated sentiment analysis on hundreds of Tweets to
                see how liked something is.
              </Typography>
            </Grid>
            <Grid item md={6} xs={0}>
              <img
                src={analysis}
                alt="Sentiment analysis"
                style={{
                  width: "100%"
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.panel2}>
        <Container>
          <Grid container spacing={8} alignItems="center" align="right">
            <Grid item md={6} xs={0}>
              <img
                src={ai}
                alt="Sentiment analysis"
                style={{
                  width: "100%"
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="h3" color="primary" gutterBottom>
                How does it work?
              </Typography>
              <Typography>
                Doxa uses a sentiment analysis tool called Valence Aware
                Dictionary and sEntiment Reasoner (VADER). This tool utilizes
                artificial intelligence to process natural language and
                determine what is positive, negative, or neutral.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

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
import dashboard from "../public/undraw_dashboard.svg";
import Fade from "react-reveal/Fade";
import "./index.css";

const panelStyles = theme => ({
  padding: `${theme.spacing(8)}px 0`,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius
});

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
    ...panelStyles(theme),
    paddingBottom: theme.spacing(12)
  },
  panel2: {
    position: "relative",
    top: -1 * theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    ...panelStyles(theme)
  },
  panel3: {
    backgroundColor: theme.palette.background.paper,
    ...panelStyles(theme),
    paddingBottom: theme.spacing(20),
    marginBottom: -1 * theme.spacing(8)
  },
  desc: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
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
          <Fade right>
            <Grid container spacing={4} alignItems="center" align="left">
              <Grid item sm={6} xs={12}>
                <div className={classes.desc}>
                  <Typography variant="h3" color="primary" gutterBottom>
                    What is Sentiment Analysis?
                  </Typography>
                  <Typography>
                    Sentiment analysis lets you get a feel for how people think
                    of your business / stock / etc. In other words: you can gain
                    insight into how well liked or disliked something is. Doxa
                    performs automated sentiment analysis on hundreds of Tweets
                    for an accurate representation of the overall sentiment
                    towards your business.
                  </Typography>
                </div>
              </Grid>

              <Grid item sm={6} xs={12}>
                <img
                  src={analysis}
                  alt="Sentiment analysis"
                  style={{
                    width: "100%"
                  }}
                />
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </div>
      <div className={classes.panel2}>
        <Container>
          <Fade left>
            <Grid
              container
              spacing={4}
              alignItems="center"
              align="left"
              direction="row-reverse"
            >
              <Grid item sm={6} xs={12} className={classes.desc}>
                <div className={classes.desc}>
                  <Typography variant="h3" color="primary" gutterBottom>
                    How do I interpret the results?
                  </Typography>
                  <Typography>
                    Once you enter your term, Doxa will present you with a
                    "sentiment score" from -100 to 100 (-100 being the worst
                    possible sentiment and 100 being the best possible
                    sentiment). This score reflects average sentiment of your
                    business. Doxa automatically weighs Tweets by their
                    favorites count, so a Tweet with 100 likes is worth 100
                    times as much as a tweet with 1 like. This allows you to get
                    an average sentiment score that accurately reflects the
                    overall sentiment towards your business.
                  </Typography>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <img
                  src={dashboard}
                  alt="Doxa's dashboard"
                  style={{
                    width: "100%"
                  }}
                />
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </div>

      <div className={classes.panel3}>
        <Container>
          <Fade right>
            <Grid container spacing={4} alignItems="center" align="right">
              <Grid item sm={6} xs={12} className={classes.desc}>
                <div className={classes.desc}>
                  <Typography variant="h3" color="primary" gutterBottom>
                    How does it work?
                  </Typography>
                  <Typography>
                    Doxa uses a sentiment analysis tool called Valence Aware
                    Dictionary and sEntiment Reasoner (VADER). This tool
                    utilizes artificial intelligence to process language and
                    determine what is positive, negative, or neutral.
                  </Typography>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <img
                  src={ai}
                  alt="Sentiment analysis"
                  style={{
                    width: "100%"
                  }}
                />
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </div>
    </div>
  );
}

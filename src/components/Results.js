import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import HashLoader from "react-spinners/HashLoader";
import Typography from "@material-ui/core/Typography";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./twemoji.css";
import undrawEmpty from "../../public/undraw_empty.svg";
import SentimentGauge from "./SentimentGauge";
import TweetCountPie from "./TweetCountPie";
import TweetTable from "./TweetTable";
import Tweet from "./Tweet";

const GET_SENTIMENT = gql`
  query GetSentiment($term: String!) {
    sentiment(term: $term) {
      averageWeighedPolarity
      negativeTweetsCount
      neutralTweetsCount
      positiveTweetsCount
      tweets {
        edges {
          node {
            username
            content
            polarity
            normalizedSentiment
            favorites
            retweets
            id
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles(theme => ({
  spinnerWrapper: {
    backgroundColor: theme.palette.background.default,
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
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  gauge: {
    [theme.breakpoints.up("lg")]: {
      margin: 0
    },
    marginBottom: theme.spacing(8)
  },
  empty: {
    width: "100%"
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
          variant="h3"
          component="h1"
          align="center"
          className={classes.spinnerLabel}
        >
          Analyzing Tweets for term{" "}
          <Typography variant="inherit" color="primary">
            "{term}"
          </Typography>
        </Typography>
        <Typography variant="subtitle1" align="center">
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

  const {
    averageWeighedPolarity,
    positiveTweetsCount,
    negativeTweetsCount,
    neutralTweetsCount
  } = data.sentiment;
  const value = Math.round(averageWeighedPolarity * 100);

  if (positiveTweetsCount + negativeTweetsCount + neutralTweetsCount <= 0) {
    //404
    return (
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Couldn't find any tweets containing{" "}
              <Typography color="primary" variant="inherit">
                "{term}"
              </Typography>
            </Typography>
            <Typography align="center" variant="subtitle1">
              Doxa relies on Tweets containing your search term to perform
              sentiment analysis. Try using a broader search term.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="sm">
              <img
                src={undrawEmpty}
                className={classes.empty}
                alt="Man with empty box"
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
    );
  }

  const chartProps = {
    positiveTweetsCount,
    negativeTweetsCount,
    neutralTweetsCount
  };
  const labelProps = {
    variant: "h4",
    component: "h2",
    align: "center"
  };
  return (
    <Container className={classes.resultsWrapper}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        style={{
          marginBottom: theme.spacing(8)
        }}
      >
        Sentiment results for{" "}
        <Typography color="primary" variant="inherit">
          "{term}"
        </Typography>
      </Typography>
      <Grid container justify="center">
        <Grid item lg={6} className={classes.gauge}>
          <Typography {...labelProps} style={{ maxWidth: 500 }}>
            Sentiment Score
          </Typography>
          <SentimentGauge value={value} />
        </Grid>

        <Grid item lg={6} className={classes.gauge}>
          <Typography {...labelProps} style={{ maxWidth: 700 }}>
            Tweets
          </Typography>
          <TweetCountPie {...chartProps} />
        </Grid>
        <Grid item sm={12}>
          <Tweet />
          <TweetTable
            className={classes.TweetTables}
            tweets={data.sentiment.tweets}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

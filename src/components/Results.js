import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import HashLoader from "react-spinners/HashLoader";
import Typography from "@material-ui/core/Typography";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./twemoji.css";
import SentimentGauge from "./SentimentGauge";
import TweetCountPie from "./TweetCountPie";
import TweetTable from "./TweetTable";
import Tweets from "./Tweets";
import undrawEmpty from "../../public/undraw_empty.svg";
import SiteError from "./SiteError";

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
            profileImage
            name
            tweetId
            createdAt
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
    alignItems: "center",
    marginBottom: theme.spacing(8)
  },
  gauge: {
    [theme.breakpoints.up("lg")]: {
      margin: 0
    }
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
          Analyzing Tweets for{" "}
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

  const topTweets = data.sentiment.tweets.edges.sort((a, b) =>
    a.node.favorites > b.node.favorites ? -1 : 1
  );

  const {
    averageWeighedPolarity,
    positiveTweetsCount,
    negativeTweetsCount,
    neutralTweetsCount
  } = data.sentiment;
  const value = Math.round(averageWeighedPolarity * 100);

  if (positiveTweetsCount + negativeTweetsCount + neutralTweetsCount <= 0) {
    // Search term not found
    return (
      <SiteError
        svg={undrawEmpty}
        alt="Man with empty box"
        title={
          <Typography align="center" variant="h3" component="h1">
            Couldn't find any tweets containing{" "}
            <Typography color="primary" variant="inherit">
              "{term}"
            </Typography>
          </Typography>
        }
        subtitle={
          "Doxa relies on Tweets containing your search term to perform\n" +
          "            sentiment analysis. Try using a broader search term."
        }
      />
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
      <Grid container justify="center" spacing={8}>
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
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            What people are saying about{" "}
            <Typography color="primary" variant="inherit">
              "{term}"
            </Typography>
          </Typography>
          <Typography variant="subtitle1" align="center">
            Top 6 Tweets sorted by favorites
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Tweets className={classes.tweets} tweets={topTweets} term={term} />
        </Grid>

        <Grid item sm={12}>
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            All Tweets
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <TweetTable
            className={classes.TweetTables}
            tweets={data.sentiment.tweets}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

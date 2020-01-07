import React from "react";
import Tweet from "./Tweet";
import Grid from "@material-ui/core/Grid";

export default function Tweets({ tweets, term}) {
  const top6Tweets = tweets.slice(0, 6);

  return (
    <Grid container spacing={4}>
      {top6Tweets.map(({ node }) => (
        <Grid item xs={12} sm={6} lg={4} key={node.id}>
          <Tweet {...node} term={term} />
        </Grid>
      ))}
    </Grid>
  );
}

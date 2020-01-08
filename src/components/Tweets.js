import React from "react";
import Tweet from "./Tweet";
import Grid from "@material-ui/core/Grid";
import Bounce from "react-reveal/Fade";

export default function Tweets({ tweets, term }) {
  const top6Tweets = tweets.slice(0, 6);

  return (
    <Grid container spacing={4}>
      {top6Tweets.map(({ node }, index) => (
        <Grid item xs={12} sm={6} lg={4} key={node.id}>
          <Bounce delay={index * 100} duration={300} left>
            <Tweet {...node} term={term} />
          </Bounce>
        </Grid>
      ))}
    </Grid>
  );
}

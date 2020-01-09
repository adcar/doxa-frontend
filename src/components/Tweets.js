import React from "react";
import Tweet from "./Tweet";
import Grid from "@material-ui/core/Grid";
import Bounce from "react-reveal/Fade";
import { useTheme } from "@material-ui/core";

export default function Tweets({ tweets, term }) {
  const theme = useTheme();
  const top6Tweets = tweets.slice(0, 6);

  return (
    <Grid container>
      {top6Tweets.map(({ node }, index) => (
        <Grid
          item
          xs
          key={node.id}
          style={{
            margin: theme.spacing(2)
          }}
        >
          <Bounce delay={index * 100} duration={300} left>
            <Tweet {...node} term={term} />
          </Bounce>
        </Grid>
      ))}
    </Grid>
  );
}

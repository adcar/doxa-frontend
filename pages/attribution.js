import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Attribution() {
  return (
    <Container>
      <Typography variant="h3" component="h3" gutterBottom>
        Attribution
      </Typography>
      <Typography gutterBottom>
        <Link href="/">Splash image</Link>{" "}
        <Link href="https://freepik.com">designed by Freepik</Link> and modified
        by Rahavee RV
      </Typography>
      <Typography gutterBottom>
        Doxa uses{" "}
        <Link href="https://github.com/cjhutto/vaderSentiment">
          VADER Sentiment Analysis
        </Link>
      </Typography>
    </Container>
  );
}

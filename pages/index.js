import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import ReactRotatingText from "react-rotating-text";
import MainSearch from "../src/components/MainSearch";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://acardosi.dev`/">
        Alexander Cardosi
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Sentiment Analysis for
          <br />
          <ReactRotatingText
            items={["Hashtags", "Companies", "Cryptocurrencies", "Stocks"]}
            deletingInterval={40}
          />
        </Typography>

        <MainSearch />
        <Copyright />
      </Box>
    </Container>
  );
}

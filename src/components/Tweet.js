import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Linkify from "react-linkify";
import h2p from "html2plaintext";
import Highlighter from "react-highlight-words";
import Twemoji from "react-twemoji";

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    minHeight: 225,

    ["@media screen and (min-width: 400px)"]: {
      minWidth: 370
    },
    display: "flex",
    cursor: "pointer",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "0px 10px 15px rgba(0,0,0,0.25)"
    }
  },
  profileImage: {
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    width: 48,
    height: 48
  },
  tweetBody: {
    flex: 1
  },
  btnLabel: {
    fontSize: 12
  },
  highlighted: {
    backgroundColor: "transparent",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.main
  },
  emoji: {
    width: 48,
    height: 48
  },
  emojiWrapper: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

export default function Tweet({
  favorites,
  retweets,
  username,
  name,
  profileImage,
  content,
  tweetId,
  createdAt,
  term,
  normalizedSentiment
}) {
  const classes = useStyles();
  const highlightProps = {
    highlightClassName: classes.highlighted,
    searchWords: [term],
    autoEscape: true
  };
  let truncatedContent = h2p(content);
  let truncatedContentElem = (
    <span>
      {" "}
      <Highlighter {...highlightProps} textToHighlight={h2p(content)} />
    </span>
  );

  if (content.length > 100) {
    truncatedContent = h2p(content).slice(0, 100);
    truncatedContentElem = (
      <span>
        <Highlighter {...highlightProps} textToHighlight={truncatedContent} />
        ...{" "}
        <Link
          href={`https://twitter.com/${username}/status/${tweetId}`}
          target="_blank"
        >
          {" "}
          Read more
        </Link>
      </span>
    );
  }
  const componentDecorator = (href, text, key) => (
    <Link href={href} key={key} target="_blank">
      {text}
    </Link>
  );
  let emoji = "";
  if (normalizedSentiment === "positive") {
    emoji = "😊";
  } else if (normalizedSentiment === "negative") {
    emoji = "😠";
  } else {
    emoji = "😐";
  }
  return (
    <Paper
      className={classes.root}
      onClick={() =>
        window.open(
          `https://twitter.com/${username}/status/${tweetId}`,
          "_blank"
        )
      }
    >
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <div
            style={{
              display: "flex"
            }}
          >
            <img
              className={classes.profileImage}
              src={profileImage}
              alt={`${username}'s profile picture`}
            />
            <div>
              <Typography>{name}</Typography>
              <Typography variant="caption">@{username}</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <Twemoji
            className={classes.emojiWrapper}
            options={{ className: classes.emoji }}
          >
            {emoji}
          </Twemoji>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            style={{
              height: "100%"
            }}
          >
            <Linkify componentDecorator={componentDecorator}>
              {truncatedContentElem}
            </Linkify>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            <strong>{favorites}</strong> {favorites === 1 ? "Like" : "Likes"}{" "}
            {"‏‏‎ ‎‏‏‎ ‎"}
            <strong>{retweets}</strong>{" "}
            {retweets === 1 ? "Retweet" : "Retweets"}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption">
            {createdAt.replace("T", " ")}
          </Typography>
        </Grid>

        <Grid item xs={6} align="right">
          <Button
            style={{
              textDecoration: "none"
            }}
            component={Link}
            href={`https://twitter.com/${username}/status/${tweetId}`}
            target="_blank"
            classes={{
              label: classes.btnLabel
            }}
          >
            View on Twitter
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

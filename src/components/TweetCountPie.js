import React from "react";
import PieChart from "react-minimal-pie-chart";
import LensIcon from "@material-ui/icons/Lens";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      transform: "scale(0.8)"
    }
  },
  chart: {
    [theme.breakpoints.up("sm")]: {
      width: 600
    },
    width: 400
  },
  legend: {
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: 400
    },
    width: 120
  },
  legendItem: {
    display: "flex",
    alignItems: "center"
  },
  legendLabel: {
    marginLeft: theme.spacing(1)
  },
  insideText: {
    position: "absolute",
    // [theme.breakpoints.up("sm")]: {
    //   top: 170
    // },
    ["@media screen and (min-width: 600px)"]: {
      top: 160
    },
    top: 110,

    color: theme.palette.primary.main
  },
  totalTweets: {
    ["@media screen and (min-width: 600px)"]: {
      fontSize: "60pt"
    }
  },
  totalTweetsLabel: {
    ["@media screen and (min-width: 600px)"]: {
      fontSize: "14pt"
    },
    fontSize: "8pt"
  }
}));

function createValues(
  positiveTweetsCount,
  neutralTweetsCount,
  negativeTweetsCount,
  theme
) {
  let tweetCounts = [];
  if (positiveTweetsCount > 0) {
    tweetCounts.push({
      color: theme.palette.primary.main,
      title: "Positive",
      value: positiveTweetsCount
    });
  }
  if (neutralTweetsCount > 0) {
    tweetCounts.push({
      color: theme.palette.neutral.main,
      title: "Neutral",
      value: neutralTweetsCount
    });
  }
  if (negativeTweetsCount > 0) {
    tweetCounts.push({
      color: theme.palette.secondary.main,
      title: "Negative",
      value: negativeTweetsCount
    });
  }
  return tweetCounts;
}
export default function TweetCountPie({
  positiveTweetsCount,
  neutralTweetsCount,
  negativeTweetsCount
}) {
  const classes = useStyles();
  const theme = useTheme();
  const values = createValues(
    positiveTweetsCount,
    neutralTweetsCount,
    negativeTweetsCount,
    theme
  );
  const totalTweets =
    positiveTweetsCount + neutralTweetsCount + negativeTweetsCount;
  return (
    <div className={classes.root}>
      <div className={classes.insideText}>
        <Typography
          variant="h2"
          color="inherit"
          align="center"
          className={classes.totalTweets}
        >
          {totalTweets}
        </Typography>
        <Typography
          variant="subtitle1"
          color="inherit"
          align="center"
          className={classes.totalTweetsLabel}
        >
          Total Tweets
        </Typography>
      </div>
      <PieChart
        className={classes.chart}
        animate={true}
        animationDuration={1000}
        animationEasing="ease-out"
        cx={50}
        cy={35}
        data={values}
        label
        labelPosition={87}
        labelStyle={{
          fontFamily: theme.typography.fontFamily,
          fontSize: "6px",
          color: "#ffffff",
          fill: "#ffffff"
        }}
        lengthAngle={360}
        lineWidth={25}
        paddingAngle={0}
        radius={34}
        ratio={1}
        rounded
        startAngle={0}
        viewBoxSize={[140, 100]}
      />

      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={3}
        className={classes.legend}
      >
        <Grid
          item
          xs={12}
          sm={4}
          className={classes.legendItem}
          style={{
            color: theme.palette.primary.main
          }}
        >
          <LensIcon color="inherit" />{" "}
          <Typography align="center" className={classes.legendLabel}>
            Positive
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          className={classes.legendItem}
          style={{
            color: theme.palette.neutral.main
          }}
        >
          <LensIcon color="inherit" />{" "}
          <Typography className={classes.legendLabel}>Neutral</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          className={classes.legendItem}
          style={{
            color: theme.palette.secondary.main
          }}
        >
          <LensIcon color="inherit" />{" "}
          <Typography className={classes.legendLabel}>Negative</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import PieChart from "react-minimal-pie-chart";
import LensIcon from "@material-ui/icons/Lens";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1200
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
      width: 350
    },
    width: 100
  },
  legendItem: {
    display: "flex",
    alignItems: "center"
  }
}));

export default function TweetCountPie({
  positiveTweetsCount,
  neutralTweetsCount,
  negativeTweetsCount
}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <PieChart
        className={classes.chart}
        animate={true}
        animationDuration={1000}
        animationEasing="ease-out"
        cx={50}
        cy={35}
        data={[
          {
            color: theme.palette.primary.main,
            title: "Positive",
            value: positiveTweetsCount
          },
          {
            color: theme.palette.neutral.main,
            title: "Neutral",
            value: neutralTweetsCount
          },
          {
            color: theme.palette.secondary.main,
            title: "Negative",
            value: negativeTweetsCount
          }
        ]}
        label
        labelPosition={60}
        labelStyle={{
          fontFamily: theme.typography.fontFamily,
          fontSize: "6px"
        }}
        lengthAngle={360}
        lineWidth={25}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={0}
        radius={30}
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
          <Typography align="center">Positive</Typography>
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
          <LensIcon color="inherit" /> <Typography>Neutral</Typography>
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
          <LensIcon color="inherit" /> <Typography>Negative</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

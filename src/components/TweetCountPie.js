import React from "react";
import PieChart from "react-minimal-pie-chart";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: 500
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
    <PieChart
      className={classes.root}
      animate={true}
      animationDuration={1000}
      animationEasing="ease-out"
      cx={50}
      cy={50}
      data={[
        {
          color: theme.palette.primary.main,
          title: "Positive Tweets",
          value: positiveTweetsCount
        },
        {
          color: theme.palette.neutral.main,
          title: "Neutral Tweets",
          value: neutralTweetsCount
        },
        {
          color: theme.palette.secondary.main,
          title: "Negative Tweets",
          value: negativeTweetsCount
        }
      ]}
      label={false}
      labelPosition={50}
      lengthAngle={360}
      lineWidth={25}
      onClick={undefined}
      onMouseOut={undefined}
      onMouseOver={undefined}
      paddingAngle={0}
      radius={40}
      ratio={1}
      rounded
      startAngle={0}
    />
  );
}

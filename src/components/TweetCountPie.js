import React from "react";
import PieChart from "react-minimal-pie-chart";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      width: 600
    },
    width: 400
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
      label={({ data, dataIndex }) =>
        `${data[dataIndex].value} ${data[dataIndex].title}`
      }
      labelPosition={112}
      labelStyle={{
        fontFamily: theme.typography.fontFamily,
        fontSize: "4px"
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
  );
}

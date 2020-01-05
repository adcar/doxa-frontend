import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import SvgGauge from "svg-gauge";

const defaultOptions = {
  animDuration: 1,
  showValue: true,
  initialValue: 0,
  max: 100
  // Put any other defaults you want. e.g. dialStartAngle, dialEndAngle, radius, etc.
};

const useStyles = makeStyles(theme => ({
  gauge: {
    height: 300,
    width: 300,

    [theme.breakpoints.up("sm")]: {
      position: "relative",
      top: -20
    },
    "& > .gauge > .dial": {
      stroke: theme.palette.background.paper,
      strokeWidth: 10,
      strokeLinecap: "round"
    },
    "& > .gauge > .value": {
      strokeWidth: 10,
      strokeLinecap: "round"
    }
  },
  "@media screen and (min-width: 600px)": {
    gauge: {
      height: 500,
      width: 500
    }
  }
}));
const Gauge = props => {
  const classes = useStyles();
  const gaugeEl = useRef(null);
  const gaugeRef = useRef(null);
  useEffect(() => {
    if (!gaugeRef.current) {
      const options = { ...defaultOptions, ...props };
      gaugeRef.current = SvgGauge(gaugeEl.current, options);
      gaugeRef.current.setValue(options.initialValue);
    }
    gaugeRef.current.setValueAnimated(props.value, 1);
  }, [props]);

  return (
    <div ref={gaugeEl} className={clsx(classes.gauge, "gauge-container")} />
  );
};

export default Gauge;

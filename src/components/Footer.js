import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "../Link";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: 200,
    color: theme.palette.primary.contrastText,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius
  },
  grid: {
    height: "100%"
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item xs={12} sm={3}>
          <Typography variant="h3" align="center">
            Doxa
          </Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6">About</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Contact</Typography>
            </Grid>
            <Grid item xs={6}>
              <Link href="/attribution" className={classes.link}>
                Attribution
              </Link>
            </Grid>
            <Grid item xs={6}>
              <a href="mailto:contact@acardosi.dev" className={classes.link}>
                contact@acardosi.dev
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

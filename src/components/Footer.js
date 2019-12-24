import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "../Link";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6),
    backgroundColor: theme.palette.primary.main,
    height: 200,
    color: theme.palette.primary.contrastText
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
        <Grid item>
          <Typography variant="h3">Doxa</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item sm={6}>
              <Typography variant="h6">About</Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography variant="h6">Contact</Typography>
            </Grid>
            <Grid item sm={6}>
              <Link href="/attribution" className={classes.link}>
                Attribution
              </Link>
            </Grid>
            <Grid item sm={6}>
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

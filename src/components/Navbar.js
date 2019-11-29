import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NavSearch from "./NavSearch";

const useStyles = makeStyles(theme => ({
  nav: {
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    boxShadow: `0px 4px 14px ${theme.shadowColor}`
  }
}));

export default function Navbar() {
  const router = useRouter();
  const classes = useStyles();

  if (router.pathname === "/") {
    return (
      <Typography
        variant="h3"
        style={{ backgroundColor: "#f0f0f0", margin: 0 }}
      >
        Doxa
      </Typography>
    );
  } else {
    return (
      <nav className={classes.nav}>
        <Typography>Doxa</Typography>
        <NavSearch />
      </nav>
    );
  }
}

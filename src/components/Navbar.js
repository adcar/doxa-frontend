import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NavSearch from "./NavSearch";
import Link from "next/link";
import clsx from "clsx";
import doxaLogo from "../../public/doxa-logo.svg";

const useStyles = makeStyles(theme => ({
  nav: {
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(8)
  },
  logo: {
    height: 50,
    marginRight: theme.spacing(2)
  },
  linkedWrapper: {
    display: "flex",
    cursor: "pointer",
    alignItems: "center"
  }
}));

export default function Navbar() {
  const router = useRouter();
  const classes = useStyles();

  return (
    <nav
      className={clsx(
        classes.nav,
        !(router.pathname === "/") && classes.divider
      )}
    >
      <Link href="/">
        <div className={classes.linkedWrapper}>
          <img className={classes.logo} src={doxaLogo} alt="Doxa logo" />
          <Typography variant="h5" color="primary">
            Doxa
          </Typography>
        </div>
      </Link>
      <NavSearch />
    </nav>
  );
}

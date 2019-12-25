import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NavSearch from "./NavSearch";
import Link from "next/link";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  nav: {
    height: 70,
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(8),
    justifyContent: "space-around"
  },
  shadow: {
    boxShadow: `0px 4px 14px ${theme.shadowColor}`,
  }
}));

export default function Navbar() {
  const router = useRouter();
  const classes = useStyles();

  
    return (
      <nav className={clsx(classes.nav, !(router.pathname === "/") && classes.shadow)}>
        <Link href="/">
          <Typography
            style={{
              cursor: "pointer"
            }}
          >
            Doxa
          </Typography>
        </Link>
        <NavSearch />
      </nav>
    );
  }

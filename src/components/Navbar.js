import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NavSearch from "./NavSearch";
import Link from "next/link";
import clsx from "clsx";

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

import React, { useEffect, useState } from "react";
import Router from "next/router";
import Typography from "@material-ui/core/Typography";

export default function Navbar() {
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      console.log(Router.pathname);
    });
  }, []);
  return (
    <Typography variant="h3" style={{ backgroundColor: "#f0f0f0", margin: 0 }}>
      Doxa
    </Typography>
  );
}

import React, { useEffect } from "react";
import Router from "next/router";

export default function Navbar() {
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      console.log(Router.pathname);
    });
  }, []);
  return <h1>Navbar</h1>;
}

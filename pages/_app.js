import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import getTheme from "../src/theme";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./empty.css";
import fetch from "isomorphic-fetch";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const client = new ApolloClient({
  uri: "https://doxa-api.herokuapp.com/graphql"
});

let theme = getTheme({
  paletteType: "dark"
});

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      theme = getTheme({ paletteType: "dark" });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={client}>
        <React.Fragment>
          <Head>
            <title>Doxa</title>
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Navbar />
            <main
              style={{
                minHeight: "calc(100vh - (70px + 64px + 48px))"
              }}
            >
              <Component {...pageProps} />
            </main>

            <Footer />
          </ThemeProvider>
        </React.Fragment>
      </ApolloProvider>
    );
  }
}

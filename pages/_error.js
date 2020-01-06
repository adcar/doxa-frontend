import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import SiteError from "../src/components/SiteError";
import undraw404 from "../public/undraw_not_found.svg";
import undrawServerError from "../public/undraw_server_down.svg";

function Error({ errorCode }) {
  switch (errorCode) {
    case 200:
    case 404:
      return (
        <SiteError
          svg={undraw404}
          alt="Giant 404 text"
          title={
            <Typography align="center" variant="h3" component="h1">
              404: Page not found
            </Typography>
          }
          subtitle={"The page that you are looking for does not exist."}
        />
      );
    default:
      return (
        <SiteError
          svg={undrawServerError}
          alt="Server Error"
          title={
            <Typography align="center" variant="h3" component="h1">
              An unknown error has occurred
            </Typography>
          }
          subtitle="Try refreshing this page or returning home."
        />
      );
  }
  return <div>Error: {errorCode}</div>;
}

Error.getInitialProps = async ({ res, xhr }) => {
  const errorCode = res ? res.statusCode : xhr ? xhr.status : null;
  return { errorCode };
};

export default Error;

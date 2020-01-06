import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function SiteError({ svg, alt, title, subtitle }) {
  return (
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          {title}
          <Typography
            align="center"
            variant="subtitle1"
            style={{
              marginTop: 20
            }}
          >
            {subtitle}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Container maxWidth="sm">
            <img src={svg} style={{ width: "100%" }} alt={alt} />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

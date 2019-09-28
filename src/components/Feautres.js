import React from "react";
import Grid from "@material-ui/core/Grid";

const Features = () => {
  return (
    <Grid
      container
      spacing={3}
      justify="center"
      style={{ textAlign: "center" }}
    >
      <Grid item xs={12} sm={3}>
        <h1>Test</h1>
      </Grid>
      <Grid item xs={12} sm={3}>
        <h1>Test</h1>
      </Grid>
      <Grid item xs={12} sm={3}>
        <h1>Test</h1>
      </Grid>
    </Grid>
  );
};

export default Features;

import React from "react";
import GalleryItem from "../GalleryItem";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
const Gallery = () => {
  return (
    <Container>
      <Grid container justify="center">
        <Grid item style={{ margin: "2rem", color: "#555555" }}>
          <h3>-Our Collection-</h3>
        </Grid>
      </Grid>
      <Grid container justify="space-between" spacing={2}>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Button
          variant="contained"
          color="primary"
          style={{ background: "#5677AA", margin: "2rem" }}
        >
          More...
        </Button>
      </Grid>
    </Container>
  );
};

export default Gallery;

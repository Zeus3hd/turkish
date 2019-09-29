import React from "react";
import testImage from "../../assets/Yunus.jpg";
import Avatar from "@material-ui/core/Avatar";
// import { Wrapper } from "./Quotes.style";
import Grid from "@material-ui/core/Grid";
const Quotes = () => {
  return (
    <Grid container justify="center">
      <Grid
        item
        xs={12}
        sm={12}
        style={{
          textAlign: "center",
          color: "#dbdbdb",
          letterSpacing: "1px",
          padding: "2rem"
        }}
      >
        <h2>Trusted by 990,000 People</h2>
        <p>
          Great kit! Used this for a client already and he is over the moon.
          Keep up the good work Creative Tim! 10/10 for design, colours, and the
          feel of the kit.
        </p>
      </Grid>
      <Grid item>
        <div
          style={{
            display: "flex",
            margin: "2rem",
            letterSpacing: "1px",
            color: "#dbdbdb"
          }}
        >
          <div style={{ margin: "0 1rem" }}>
            <Avatar src={testImage} />
          </div>
          <div style={{ maxWidth: 300 }}>
            <h3>Yunus Sezgin</h3>
            <p>
              Great kit! Used this for a client already and he is over the moon.
              Keep up the good work Creative Tim! 10/10 for design, colours, and
              the feel of the kit.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item>
        <div
          style={{
            display: "flex",
            margin: "2rem",
            letterSpacing: "1px",
            color: "#dbdbdb"
          }}
        >
          <div style={{ margin: "0 1rem" }}>
            <Avatar src={testImage} />
          </div>
          <div style={{ maxWidth: 300 }}>
            <h3>Yunus Sezgin</h3>
            <p>
              Great kit! Used this for a client already and he is over the moon.
              Keep up the good work Creative Tim! 10/10 for design, colours, and
              the feel of the kit.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item>
        <div
          style={{
            display: "flex",
            margin: "2rem",
            letterSpacing: "1px",
            color: "#dbdbdb"
          }}
        >
          <div style={{ margin: "0 1rem" }}>
            <Avatar src={testImage} />
          </div>
          <div style={{ maxWidth: 300 }}>
            <h3>Yunus Sezgin</h3>
            <p>
              Great kit! Used this for a client already and he is over the moon.
              Keep up the good work Creative Tim! 10/10 for design, colours, and
              the feel of the kit.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default Quotes;

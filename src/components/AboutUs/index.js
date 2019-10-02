import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import modalImage from "../../assets/footer2(2).png";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    background: "#565656"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalHeader = styled.div`
  img {
    width: 100%;
  }
`;

const AboutUs = props => {
  const classes = useStyles();
  return (
    <div style={{ zIndex: 200, position: "absolute" }}>
      <Dialog
        fullScreen
        scroll="paper"
        open={props.open}
        onClose={props.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Abous Us
            </Typography>
            <Button color="inherit" onClick={props.handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
        <ModalHeader>
          <img src={modalImage} alt="modal-header" />
          <div
            style={{
              textAlign: "center",
              color: "#555555",
              letterSpacing: "1px",
              lineHeight: "2rem",
              fontSize: "1.2rem"
            }}
          >
            <h2>WHAT WE DO:</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse rutrum quam quis condimentum gravida. Cras euismod
              consequat tempor.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap"
              }}
            >
              <iframe
                title="video one"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sypHODsqOm4"
                frameBorder="0"
                allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ margin: "1rem" }}
              ></iframe>
              <iframe
                title="video two"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sypHODsqOm4"
                frameBorder="0"
                allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ margin: "1rem" }}
              ></iframe>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              color: "#555555",
              letterSpacing: "1px",
              lineHeight: "2rem",
              fontSize: "1.2rem"
            }}
          >
            <h2>OUR CAPABILITIES:</h2>
            <Grid
              container
              spacing={3}
              justify="space-evenly"
              style={{ width: "100%", textAlign: "center" }}
            >
              <Grid item>
                <p>Lorem ipsum dolor sit </p>
                <p>Lorem ipsum dolor sit </p>
                <p>Lorem ipsum dolor sit </p>
              </Grid>
              <Grid item>
                <p>Lorem ipsum dolor sit </p>
                <p>Lorem ipsum dolor sit </p>
                <p>Lorem ipsum dolor sit </p>
              </Grid>
              <Grid item>
                <p>Lorem ipsum dolor sit </p>
                <p>Lorem ipsum dolor sit </p>
                <p>Lorem ipsum dolor sit </p>
              </Grid>
            </Grid>
          </div>
        </ModalHeader>
      </Dialog>
    </div>
  );
};

export default AboutUs;

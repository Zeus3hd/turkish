import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import avatar1 from "../../assets/abdelkareem.jpg";
import avatar2 from "../../assets/abudana.jpg";
import avatar3 from "../../assets/Yunus.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import logo1 from "../../assets/vodafone.png";
import logo2 from "../../assets/airbnb.png";
import logo3 from "../../assets/turkishairlines.png";
const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: "auto",
    width: 150,
    height: 150
  }
});
const Quotes = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      style={{
        textAlign: "center",
        letterSpacing: "1px",
        color: "#dbdbdb",
        fontWeight: 500,
        paddingBottom: "1rem"
      }}
    >
      <Grid item xs={12} sm={12} md={12}>
        <h2 style={{ margin: "2rem" }}>Trusted by 200,000 People</h2>
        <p style={{ margin: "0 2rem" }}>
          The UI Kits, Templates and Dashboards that we've created are used by
          330,000+ web developers in over 576.000 Web Projects. This is what
          some of them think:
        </p>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card
          style={{
            margin: "1rem",
            background: "rgba(220,220,240,0.6)",
            color: "#555555"
          }}
        >
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Avatar src={avatar1} className={classes.bigAvatar} />
            <h3 style={{ color: "#555555" }}>Abd Al-Kareem</h3>
            <p>
              If you aren’t satisfied with the build tool and configuration
              choices
            </p>
            <div>
              <Button>
                <FacebookIcon style={{ color: "#555555" }} />
              </Button>
              <Button>
                <TwitterIcon style={{ color: "#555555" }} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card
          style={{
            margin: "1rem",
            background: "rgba(220,220,240,0.6)",
            color: "#555555"
          }}
        >
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Avatar src={avatar2} className={classes.bigAvatar} />
            <h3 style={{ color: "#555555" }}>Abd Al-Kareem</h3>
            <p>
              If you aren’t satisfied with the build tool and configuration
              choices
            </p>
            <div>
              <Button>
                <FacebookIcon style={{ color: "#555555" }} />
              </Button>
              <Button>
                <TwitterIcon style={{ color: "#555555" }} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card
          style={{
            margin: "1rem",
            background: "rgba(220,220,240,0.6)",
            color: "#555555"
          }}
        >
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Avatar src={avatar3} className={classes.bigAvatar} />
            <h3 style={{ color: "#555555" }}>Abd Al-Kareem</h3>
            <p>
              If you aren’t satisfied with the build tool and configuration
              choices
            </p>
            <div>
              <Button>
                <FacebookIcon style={{ color: "#555555" }} />
              </Button>
              <Button>
                <TwitterIcon style={{ color: "#555555" }} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Grid container justify="space-between" alignItems="center" spacing={4}>
          <Grid item xs={12} sm={3}>
            <img
              src={logo1}
              alt="logo"
              style={{ width: "100%", maxWidth: "170px" }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <img
              src={logo2}
              alt="logo"
              style={{ width: "100%", maxWidth: "170px" }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <img
              src={logo3}
              alt="logo"
              style={{ width: "100%", maxWidth: "170px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Quotes;

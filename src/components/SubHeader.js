import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  linkStylingAll: {
    textDecoration: "none",
    color: "inherit",
    paddingLeft: "20px"
  },

  flexBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});

const SubHeader = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.flexBox}>
        <Link
          to="/"
          className={classes.linkStylingAll}
          style={{ marginRight: "auto" }}
        >
          <Typography edge="start" variant="subtitle1" component="h2">
            Home
          </Typography>
        </Link>
        <Link to="/docs" className={classes.linkStylingAll}>
          <Typography variant="subtitle1" component="h2">
            Documentation
          </Typography>
        </Link>
      </Toolbar>
    </React.Fragment>
  );
};

export default SubHeader;

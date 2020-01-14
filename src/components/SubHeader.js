import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  linkStyling: { textDecoration: "none" }
});

const SubHeader = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar>
        <Link to="/" className={classes.linkStyling}>
          <Typography edge="start" variant="subtitle1" component="h2">
            Home
          </Typography>
        </Link>
        <Link to="/docs">
          <Typography variant="subtitle1" component="h2">
            Documentation
          </Typography>
        </Link>
      </Toolbar>
    </React.Fragment>
  );
};

export default SubHeader;

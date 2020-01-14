import React from "react";
import SubHeader from "../components/SubHeader";
import { AppBar, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  appBar: {
    flex: 1
  }
});
const Header = () => {
  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <SubHeader />
      </AppBar>
    </React.Fragment>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <React.Fragment>
      <Link to="/">Home</Link>
      <Link to="/docs">Docs</Link>
    </React.Fragment>
  );
};

export default SubHeader;

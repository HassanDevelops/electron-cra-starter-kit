import React from "react";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/docs">Docs</Link>
    </>
  );
};

export default SubHeader;

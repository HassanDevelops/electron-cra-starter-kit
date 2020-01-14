import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Layout from "./layouts/Layout";

import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/docs" exact component={Docs} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
};

export default App;

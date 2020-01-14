import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { grey, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: purple
  }
});
console.log(theme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

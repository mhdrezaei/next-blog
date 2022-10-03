import React, { Fragment } from "react";
import Header from "../header/Header";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
function Layout(props) {
  return (
    <Fragment>
      <ThemeProvider theme={theme} >
        <Header />
        <main>{props.children}</main>
      </ThemeProvider>
    </Fragment>
  );
}

export default Layout;

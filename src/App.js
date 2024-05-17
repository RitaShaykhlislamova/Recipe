// eslint-disable-next-line no-unused-vars
import {Section} from "./Styles/Common.styled";
import React from "react";
import {GlobalStyle} from "./Styles/Global.styled";
import Home from "./Pages/Home";
import {ThemeProvider} from "styled-components";

const Theme = {
    color: {
        black: "blue",
        white: "#fff"
    },
    mobile:"980px",
    smallMobile:"580px"
}

function App() {
  return (
      <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Home />
      </ThemeProvider>
  );
}

export default App;

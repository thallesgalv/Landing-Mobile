import React from "react";
import { ThemeProvider } from "styled-components";

const theme = { 
  rem: function (num) {
    return num / 16 + 'rem'
  },
  color: {
    primary: "#ff79c6",
    secondary: "#ffb86c",
    text: "#000",
  },
  fontSize: 16,
  menuHeight: 80,
  spacing: 30,
  radius: 6,
  lineHeight: '1.5em',
  maxWidth: 1200,
  fontFamily: 'Montserrat',
  gradient: {
    blueToGreen: 'linear-gradient(90deg, rgba(0,124,240,1) 20%, rgba(0,223,216,1) 65%);',
    purpleToPink: 'linear-gradient(90deg, rgba(121,40,202,1) 20%, rgba(255,0,128,1) 65%);',
    redToYellow: 'linear-gradient(90deg, rgba(255,77,77,1) 20%, rgba(249,203,40,1) 65%);',
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
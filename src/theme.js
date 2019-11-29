import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.

const shadowColor = "#967fac";
const theme = createMuiTheme({
  radius: 50,
  bg: "#f0f0f0",
  shadowColor: "#967fac",
  purpleShadow: `5px 10px 15px ${shadowColor}`,
  palette: {
    primary: {
      main: "#7E1DEC"
    },
    secondary: {
      main: "#dd92f0"
    },
    neutral: {
      main: "#9C27B0"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  },
  typography: {
    fontFamily: ['"Montserrat"'].join(",")
  }
});

export default responsiveFontSizes(theme);

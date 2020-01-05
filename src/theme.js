import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.

const shadowColor = "#967fac";

export default function getTheme(theme) {
  return responsiveFontSizes(
    createMuiTheme({
      shadowColor: "#967fac",
      purpleShadow: `5px 10px 15px ${shadowColor}`,
      palette: {
        type: theme.paletteType,
        primary: {
          main: "#7E1DEC"
        },
        secondary: {
          main: "#d24ae8"
        },
        neutral: {
          main: "#9C27B0"
        },
        error: {
          main: red.A400
        },
        background: {
          dark: theme.paletteType === "light" ? "#ededed" : "#222224",
          default: theme.paletteType === "light" ? "#f7f7f7" : "#2f2f31",
          paper: theme.paletteType === "light" ? "#FFFFFF" : "#3b3b3b"
        }
      },
      typography: {
        fontFamily: ['"Montserrat"'].join(",")
      },
      shape: {
        borderRadius: 50
      }
    })
  );
}

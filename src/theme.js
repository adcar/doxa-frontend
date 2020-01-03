import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.

const shadowColor = "#967fac";

function getTheme(theme) {
  return createMuiTheme({
    radius: 50,
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
        default: theme.paletteType === "light" ? "#f7f7f7" : "#2f2f31"
      }
    },
    typography: {
      fontFamily: ['"Montserrat"'].join(",")
    }
  });
}

const theme = getTheme({
  paletteType: "dark"
});

export default responsiveFontSizes(theme);

import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { ColorOptions } from "./types.d";

const colors: { [key: string]: ColorOptions } = {
  primary: {
    primary: "#0080BF",
  },
  secondary: {
    primary: "#FFF",
  },
  neutral: {
    fill: "#E5E5E5",
  },
};

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: colors.primary.primary,
    },
    secondary: {
      main: "#fff",
    },
  },

  colors,
};

export default theme;

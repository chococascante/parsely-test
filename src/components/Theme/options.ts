import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { ColorOptions, FontOptions } from "./types.d";

const shadows: string[] = [
  "6px 2px 20px 0 rgba(0, 0, 0, 0.05)",
  "0 0 40px 0 rgba(0,0,0,0.05)",
  "0 12px 34px 0 rgba(0,0,0,0.1)",
];

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

const fonts: {
  [key: string]: FontOptions;
} = {};

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: colors.primary.primary,
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    h5: {
      color: colors.primary.primary,
    },
  },
  shadows: [
    "none",
    shadows[0],
    shadows[0],
    shadows[0],
    shadows[0],
    shadows[1],
    shadows[1],
    shadows[1],
    shadows[1],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
    shadows[2],
  ],
  fonts,
  colors,
};

export default theme;

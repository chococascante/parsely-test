import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import themeOptions from "./options";

const theme = createMuiTheme(themeOptions);

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

const Theme: React.FC<Props> = ({ children }: Props) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Theme;

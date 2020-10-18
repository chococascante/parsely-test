export interface ColorOptions {
  [key: string]: string;
}

export interface FontOptions {
  default: string;
  bold?: string;
  medium?: string;
  light?: string;
}

declare module "@material-ui/core/styles/createMuiTheme" {
  // Go to https://material-ui.com/customization/theming/#custom-variables for an example on how to add custom vars
  interface Theme {
    navbar: {
      height: number;
    };
    sidebar: {
      width: number;
      topSpacing: number;
    };
    colors: {
      [key: string]: ColorOptions;
    };
    fonts: {
      [key: string]: FontOptions;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    navbar?: {
      height?: number;
    };
    sidebar?: {
      width?: number;
      topSpacing?: number;
    };
    popup?: {
      width?: number;
    };
    colors?: {
      [key: string]: ColorOptions;
    };
    fonts?: {
      [key: string]: FontOptions;
    };
  }
}

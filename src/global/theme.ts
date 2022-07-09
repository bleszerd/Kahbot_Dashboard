import "styled-components";

const theme = {
  colors: {
    primary: "#003f5c",
    text: {
      primary: "#FCFCFC",
    },
  },
  font: {
    size: {},
    style: {},
  },
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: {
        primary: string;
      };
    };
    font: {
      size: {};
      style: {};
    };
  }
}

export default theme;

import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { GlobalStyles } from "./GlobalStyles";

const components = {
  Link: defineStyleConfig({
    baseStyle: {
      _hover: {
        textDecoration: 'none',
      },
    },
  }),
};

const config = {
  useSystemColorMode: true,
  cssVarPrefix: 'psc',
};

const styles = {
  global: GlobalStyles,
};

const theme = extendTheme({ config, styles, components });

export default theme;

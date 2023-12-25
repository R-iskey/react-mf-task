import { PropsWithChildren } from "react";
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

export function ThemeProvider({children}: PropsWithChildren) {
  return <>
    <ColorModeScript initialColorMode={theme['config'].initialColorMode} />
    <ChakraProvider theme={theme}>
      <CSSReset />
      {children}
    </ChakraProvider>
  </>
}

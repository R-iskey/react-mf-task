import type { PropsWithChildren } from "react";
import { Flex } from "@chakra-ui/react";

function Main({ children }: PropsWithChildren) {
  return (

    <Flex as={'main'} role={"presentation"} flex={'1 0 auto'} flexDirection={'row'}>
      {children}
    </Flex>
  );
}

export default Main;

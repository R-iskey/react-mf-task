import { PropsWithChildren } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

interface IPageProps extends PropsWithChildren {
  title?: string;
}

export function Page({ children, title }: IPageProps) {
  return <Container maxW={"container.xl"} pt={3} pb={2}>
    {
      !!title && <Heading>{title}</Heading>
    }
    <Box pt={3}>
      {children}
    </Box>
  </Container>;
}

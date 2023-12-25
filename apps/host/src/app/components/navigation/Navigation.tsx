import { Box, HStack } from "@chakra-ui/react";
import * as React from "react";
import { NavItem } from "./NavItem";

export function Navigation() {
  return (
    <Box as={"header"} role={"navigation"} flex={"0 0 auto"} bg={"gray.100"} p={3}>
      <HStack as={"nav"} gap={4}>
        <NavItem to={"/"}>Home</NavItem>
        <NavItem to="/users">Users</NavItem>
      </HStack>
    </Box>
  );
}

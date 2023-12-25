import { Box, Button, HStack, Spacer, useColorMode } from '@chakra-ui/react';
import * as React from 'react';
import { NavItem } from './NavItem';

export function Navigation() {
  const { toggleColorMode, colorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <Box
      as={'header'}
      role={'navigation'}
      flex={'0 0 auto'}
      bg={isDark ? 'gray.900' : 'gray.100'}
      p={3}
    >
      <HStack as={'nav'} gap={4}>
        <NavItem to={'/'}>Home</NavItem>
        <NavItem to="/users">Users</NavItem>
        <Spacer />
        <Button
          aria-label={'theme switcher'}
          size={'sm'}
          onClick={toggleColorMode}
          colorScheme={'purple'}
        >
          {isDark ? 'Light' : 'Dark'} mode
        </Button>
      </HStack>
    </Box>
  );
}

import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react';

function Footer() {
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box
      as={'footer'}
      h={'40px'}
      flex={'0 0 auto'}
      py={2}
      bg={bg}
      textAlign={'center'}
    >
      <Link href={'https://github.com/r-iskey'} target={'_blank'}>
        @Robert Keyan
      </Link>
    </Box>
  );
}

export default Footer;

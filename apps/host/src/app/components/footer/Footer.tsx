import { Box, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as={'footer'} h={'40px'} flex={'0 0 auto'} py={2} bg={'gray.100'} textAlign={'center'}>
      <Link href={'https://github.com/r-iskey'} target={'_blank'}>@Robert Keyan</Link>
    </Box>
  )
}

export default Footer;

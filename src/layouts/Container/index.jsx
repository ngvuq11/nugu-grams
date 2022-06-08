import { Box } from "@chakra-ui/react";

function Container({ children }) {
  return (
    <Box w="100%" maxW="1140px" p="0 20px" m="0 auto">
      {children}
    </Box>
  );
}
export default Container;

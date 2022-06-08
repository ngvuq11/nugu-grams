import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
function Earth(props) {
  return (
    <Flex
      align="center"
      justify="center"
      w="100vw"
      h="100vh"
      backgroundImage="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex
        direction="column"
        align="center"
        w="450px"
        minH="200px"
        bg="rgba(0,0,0,0.8)"
        p="30px 20px 70px 20px"
        rounded="10px"
        position="relative"
      >
        <Text color="#fff" fontSize="20px">
          Bạn có muốn đăng xuất khỏi thế giới này ?
        </Text>
        <HStack
          justify="flex-end"
          position="absolute"
          right="20px"
          bottom="20px"
          gap="15px"
        >
          <Button w="100px">Hủy</Button>
          <Button w="100px" colorScheme="teal">
            Xác nhận
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Earth;

import {
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

function Auth(props) {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const isError = input === "";
  return (
    <VStack
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bg="#eee"
      p="0 20px"
    >
      <VStack
        bg="#fff"
        p="30px 20px"
        w="100%"
        maxW="500px"
        rounded="12px"
        boxShadow="xl"
      >
        <Logo size="25px" />
        <Divider />
        <Flex w="100%" p="15px 0" direction="column" gap="15px">
          <FormControl isInvalid={isError}>
            <Input
              variant="flushed"
              placeholder="Enter email..."
              id="email"
              type="email"
              size="lg"
              p="0 10px"
            />
          </FormControl>
          <FormControl isInvalid={isError}>
            <InputGroup size="lg">
              <Input
                variant="flushed"
                pl="10px"
                pr="45px"
                type={show ? "text" : "password"}
                placeholder="Enter password..."
              />
              <InputRightElement width="45px">
                <Button h="26px" size="sm" onClick={handleClick} fz="19px">
                  {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Flex>
        <HStack justify="space-between" w="100%" p="0 10px">
          <Checkbox defaultChecked>Remember me</Checkbox>
          <Link to="/forgot-password">
            <Text fontSize="sm" color="#38B2AC !important" fontStyle="italic">
              Forgot password
            </Text>
          </Link>
        </HStack>
        <Flex w="100%" mb="12px" p="0 10px">
          <Button flex="1" colorScheme="teal">
            Login
          </Button>
        </Flex>
        <Text>Or</Text>
        <Flex gap="12px" w="100%" p="0 10px">
          <Button colorScheme="red" flex="1">
            Login with Google
          </Button>
          <Button colorScheme="facebook" flex="1">
            Login with Facebook
          </Button>
        </Flex>
        <Divider />
        <HStack>
          <Text>Have no account?</Text>{" "}
          <Link to="/register">
            <Text color="#38B2AC !important">Register</Text>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default Auth;

import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Logo(props) {
  const { size } = props;
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate("/home");
  };

  return (
    <Box
      p="6px 15px"
      rounded="8px"
      bg="#eee"
      cursor="pointer"
      onClick={handleClickLogo}
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize={size}
        fontWeight="extrabold"
        letterSpacing="1px"
        userSelect="none"
      >
        UNIgrams.
      </Text>
    </Box>
  );
}

export default Logo;

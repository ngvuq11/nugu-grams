import { ChakraProvider } from "@chakra-ui/react";
import Routers from "./Routers";
function App({ children }) {
  return (
    <ChakraProvider>
      <Routers />
    </ChakraProvider>
  );
}

export default App;

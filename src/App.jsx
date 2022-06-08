import { ChakraProvider } from "@chakra-ui/react";
import Routers from "./routers";
function App({ children }) {
  return (
    <ChakraProvider>
      <Routers />
    </ChakraProvider>
  );
}

export default App;

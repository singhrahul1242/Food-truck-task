import { Box } from "@chakra-ui/react";
import { Home, About, Carousel, Footer } from "./components/index";

function App() {
  return (
    <Box>
      <Home/>
      <About/>
      <Carousel/>
      <Footer/>
    </Box>
  );
}

export default App;

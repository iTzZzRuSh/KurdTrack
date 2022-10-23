
import {Stack} from "@chakra-ui/react"
import {Navbar} from "./Components/Navbar";
import GridBlurredBackdrop from "./Components/Main";

export const App = () => {
  return (
  <Stack>
    <Navbar/>
    <GridBlurredBackdrop/>
  </Stack>
  );
}

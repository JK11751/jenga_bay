import { theme } from './utils/theme';
import { ChakraProvider } from "@chakra-ui/react";
// import Home from './components/Home/home';
import SignUp from './components/SignUp/signUp.jsx';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <SignUp />
      {/* <Home/> */}
    </ChakraProvider>
  );
}

export default App;

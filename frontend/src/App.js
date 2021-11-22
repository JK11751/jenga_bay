import "./App.css"
import { theme } from './utils/theme';
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Switch} from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./redux/App/store"
import Routes from './routes/routes';

const App = () => {

  return (
    <div>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router >
          <ToastContainer />
          <Switch>
            <Routes/>
          </Switch>
        </Router>
        </Provider>
    </ChakraProvider>
    </div>
  );
}

export default App;
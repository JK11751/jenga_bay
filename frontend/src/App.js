import { theme } from './utils/theme';
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./redux/store"
import routes from "./routes/routes"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router >
          <Switch>
            <Route component={routes}/>
          </Switch>
        </Router>
        </Provider>
    </ChakraProvider>
  );
}

export default App;
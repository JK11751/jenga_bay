import { useState } from 'react';
import { theme } from './utils/theme';
import { ChakraProvider } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Switch } from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./redux/store"
import Routes from './routes/routes';

const App = () => {  
const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [])
console.log("cartItems",cartItems)

const handleAddProduct = (product) => {
  //checking of product already exists
  const ProductExist = cartItems.find((item) => item.id === product.id);
  if (ProductExist) {
    setCartItems(
      cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity:ProductExist.quantity + 1} : item
    )
    );
    toast.info("Increased product quantity", {
      position: "bottom-left",
    });
  } else {
    setCartItems([...cartItems, {...product, quantity: 1 }]);
    toast.success("Product added to cart", {
      position: "bottom-left",
    });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const handleRemoveProduct = (product) => {
  const ProductExist = cartItems.find((item) => item.id === product.id);
  if (ProductExist.quantity === 1) {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    toast.info("Decreased product quantity", {
      position: "bottom-left",
    });
  }else {
    setCartItems(
      cartItems.map((item) => item.id === product.id ? { ...ProductExist, quantity:ProductExist.quantity - 1} : item 
      )
    );
    toast.error("Product removed from cart", {
      position: "bottom-left",
    });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const clearCart = () => {
  setCartItems([])
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  toast.error("Cart cleared", { position: "bottom-left" });
}


  return (
    <div>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router >
          <ToastContainer />
          <Switch>
            <Routes clearCart={clearCart} handleRemoveProduct={handleRemoveProduct} handleAddProduct={handleAddProduct} cartItems={cartItems}/>
          </Switch>
        </Router>
        </Provider>
    </ChakraProvider>
    </div>
  );
}

export default App;
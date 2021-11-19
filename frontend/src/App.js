import "./App.css"
import { useState } from 'react';
import { theme } from './utils/theme';
import { ChakraProvider } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Switch} from "react-router-dom"
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
      autoClose: 1000,
      hideProgressBar: true,
    });
  } else {
    setCartItems([...cartItems, {...product, quantity: 1 }]);
    toast.success("Product added to cart", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
    });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const handleBuyProductNow = (product,quantity) => {
  //checking of product already exists
  const ProductExist = cartItems.find((item) => item.id === product.id);
  if (ProductExist) {
    setCartItems([...cartItems, {...product, quantity: ProductExist.quantity + quantity }]);
    toast.success("Product quantity increased", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
    });
  } else {
    setCartItems([...cartItems, {...product, quantity: quantity }]);
    toast.success("Product added to cart", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
    });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const handleUpdateQuantity = (product) => {
  const ProductExist = cartItems.find((item) => item.id === product.id);
  if (ProductExist.quantity === 1) {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    toast.info("Decreased product quantity", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
    });
  }else {
    setCartItems(
      cartItems.map((item) => item.id === product.id ? { ...ProductExist, quantity:ProductExist.quantity - 1} : item 
      )
    );
    toast.error("Product removed from cart", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
    });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const handleRemoveProduct = (product) => {
  const ProductExist = cartItems.find((item) => item.id === product.id);
  if (ProductExist) {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    toast.info("Product removed from cart", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
    });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const clearCart = () => {
  setCartItems([])
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  toast.error("Cart cleared", { position: "bottom-left",autoClose: 1000,
  hideProgressBar: true, });
}


  return (
    <div>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router >
          <ToastContainer />
          <Switch>
            <Routes clearCart={clearCart} handleBuyProductNow={handleBuyProductNow} handleUpdateQuantity={handleUpdateQuantity} handleRemoveProduct={handleRemoveProduct} handleAddProduct={handleAddProduct} cartItems={cartItems}/>
          </Switch>
        </Router>
        </Provider>
    </ChakraProvider>
    </div>
  );
}

export default App;
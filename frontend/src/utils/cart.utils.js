import { toast } from "react-toastify";

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  //check if item is already in the cartItems
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToRemove.id
  );
  //if there is only 1, upon clicking, we should remove the item from the array
  if (existingCartItem) {
    toast.info("Product removed from cart", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
      });
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
  }

};

export const addItemToCart = (cartItems, cartItemToAdd) => {
    //find(condition) finds the first item in the array based on the condition.
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if (existingCartItem) {
      //in order for change detection to trigger we have to rerender
      //otherwise our quantity property will not be updated
      //map will return a new array 
      //we need to return new versions of our state so that our component know to re render
      //here we update the quantity property
      toast.success("Item quantity increased", { position: "bottom-left" });
      return cartItems.map(item =>
        item.id === cartItemToAdd.id
          ? { ...cartItemToAdd, quantity: item.quantity + 1 }
          : item
      );
    }
    //when you first time add a new item, sine exixtingCartItem will be falsy, it will pass the first if block and will come here
    //quantity property gets attached the first time around since this if block wont run when it is a new item.
   //in the beginning cartItems array is empty. every time you add a new item to this array, it will add "quantity:1" to this item object.  
   toast.success("Item added to cart", { position: "bottom-left" });
   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };


export const clearCart = (cartItems) => {
    toast.error("Cart cleared", { position: "bottom-left" });
    return cartItems = [];
};

export const buyProductNow = (cartItems, cartItemToAdd, quantity) => {
    //find(condition) finds the first item in the array based on the condition.
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if (existingCartItem) {
      //in order for change detection to trigger we have to rerender
      //otherwise our quantity property will not be updated
      //map will return a new array 
      //we need to return new versions of our state so that our component know to re render
      //here we update the quantity property
      toast.success("Item is already in cart.Procudt quantity increased", { position: "bottom-left" });
      return cartItems.map(item =>
        item.id === cartItemToAdd.id
          ? { ...cartItemToAdd, quantity: item.quantity + quantity }
          : item,
      );
    }
    //when you first time add a new item, sine exixtingCartItem will be falsy, it will pass the first if block and will come here
    //quantity property gets attached the first time around since this if block wont run when it is a new item.
   //in the beginning cartItems array is empty. every time you add a new item to this array, it will add "quantity:1" to this item object.  
   toast.success("Item added to cart", { position: "bottom-left" });
   return [...cartItems, { ...cartItemToAdd, quantity: quantity }];
};

export const updateProductQuantity = (cartItems, cartItemToRemove) => {
    //check if item is already in the cartItems
    const existingCartItem = cartItems.find(
      item => item.id === cartItemToRemove.id
    );
    //if there is only 1, upon clicking, we should remove the item from the array
    if (existingCartItem.quantity === 1) {
        toast.error("Product removed from cart", {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true,
          });
      return cartItems.filter(item => item.id !== cartItemToRemove.id);
    }
    toast.info("Decreased product quantity", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
      });
    return cartItems.map(item =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ); 
};

// export const getTotals = (state, action) => {
//     let { total, qty } = state.cartItems.reduce(
//       (cartTotal, cartItem) => {
//         const { item_price, quantity } = cartItem;
//         const itemTotal = item_price * quantity;

//         cartTotal.total += itemTotal;
//         cartTotal.quantity += quantity;

//         return cartTotal;
//       },
//       {
//         total: 0,
//         qty: 0,
//       }
//     );
//     total = parseFloat(total.toFixed(2));
//     state.cartTotalQuantity = qty;
//     state.cartTotalAmount = total;
// };
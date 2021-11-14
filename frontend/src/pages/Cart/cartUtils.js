// const [cart, setCart] = React.useState([]);
//   const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

//   const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

// const removeFromCart = (item) => {
//     setCart((currentCart) => {
//       const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

//       if (indexOfItemToRemove === -1) {
//         return currentCart;
//       }

//       return [
//         ...currentCart.slice(0, indexOfItemToRemove),
//         ...currentCart.slice(indexOfItemToRemove + 1),
//       ];
//     });
//   };

// export const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

//   const listItemsToBuy = () => items.map((item) => (
//     <div key={item.id}>
//       {`${item.name}: $${item.price}`}
//       <button type="submit" onClick={() => addToCart(item)}>Add</button>
//     </div>
//   ));

// export const listItemsInCart = () => items.map((item) => (
//     <div key={item.id}>
//       ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
//       <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
//     </div>
//   ));
// import React from "react";

// const items = [
//   {
//     id: 1,
//     name: "overwatch",
//     price: 20,
//   },
//   {
//     id: 2,
//     name: "minecraft",
//     price: 32,
//   },
//   {
//     id: 3,
//     name: "fortnite",
//     price: 51,
//   },
// ];

// const Shop = () => {
//   const [cart, setCart] = React.useState([]);
//   const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

//   const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

//   const removeFromCart = (item) => {
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

//   const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

//   const listItemsToBuy = () => items.map((item) => (
//     <div key={item.id}>
//       {`${item.name}: $${item.price}`}
//       <button type="submit" onClick={() => addToCart(item)}>Add</button>
//     </div>
//   ));

//   const listItemsInCart = () => items.map((item) => (
//     <div key={item.id}>
//       ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
//       <button type="submit" onClick={() => removeFromCart(item)}>Remove</button>
//     </div>
//   ));

//   return (
//     <div>
//       STORE
//       <div>{listItemsToBuy()}</div>
//       <div>CART</div>
//       <div>{listItemsInCart()}</div>
//       <div>Total: ${cartTotal}</div>
//       <div>
//         <button onClick={() => setCart([])}>Clear</button>
//       </div>
//     </div>
//   );
// };

// export default Shop;

import React from 'react'
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../../redux/actions/appActions';

function Test({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){
  //  console.log(items)
    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }
    
    
    return(
        <div className="row">
            <div className="col-md-12">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    ListCart.map((item,key)=>{
                        return(
                            <tr key={key}>    
                            <td><i className="badge badge-danger" onClick={()=>DeleteCart(key)}>X</i></td>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{width:'100px',height:'80px'}} alt="product"/></td>
                            <td>{item.price} $</td>
                            <td>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
                                    <span className="btn btn-info">{item.quantity}</span>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
                            </td>
                            <td>{ TotalPrice(item.price,item.quantity)} $</td>
                        </tr>
                        )
                    })
                        
                }
                <tr>
                    <td colSpan="5">Total Carts</td>
                    <td>{Number(TotalCart).toLocaleString('en-US')} $</td>
                </tr>
                </tbody>
              
            </table>
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
  //  console.log(state)
    return{
        items:state.cart
    }
}

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Test)


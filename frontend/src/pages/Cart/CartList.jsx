import React from 'react'
import { connect } from 'react-redux'
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../../redux/actions/appActions';
import { CartItem } from './CartItem'


const CartList = ({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}) => {


    let ListCart = [];
    let TotalCart = 0;

    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });

    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }

    return (
        <div>
            {
                ListCart.map((item,key)=>{
                    return(
                    <CartItem delete={DeleteCart} quantity={item.quantity} TotalCart={TotalCart} price={item.item_price} unit={item.item_measurement_unit} name={item.item_name} TotalPrice={TotalPrice} IncreaseQuantity={IncreaseQuantity} DecreaseQuantity={DecreaseQuantity} DeleteCart={DeleteCart} key={key}  />
                    )
                })
            }
            console.log("CartList",index)
        </div>
    )
}

const mapStateToProps = state =>{
    //  console.log(state)
      return{
        items:state.cart
      }
  }

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(CartList)

import classes from './Cart.module.css'
import CartItem from './CartItem'

import CartContext from '../../store/cart-context'
import { useContext } from 'react'
import EmptyCart from './EmptyCart'

function Cart(){
    const ctxCart=useContext(CartContext)
    console.log(ctxCart.items)
    let  cartItem=ctxCart.items.length === 0 ? <EmptyCart/>:ctxCart.items.map((item,i)=> <CartItem name={item.name} price={item.price} id={item.id} img={item.productImage} key={i} quant={item.quantity} totalAmt={ctxCart.totalAmount} />)
   
    

    return (
        <div className={classes.cart}>
            <h2>Cart</h2>
            <hr className={classes.hr}/>
            {cartItem}
        </div>
    )
}

export default Cart
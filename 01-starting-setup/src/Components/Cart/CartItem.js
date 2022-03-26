import classes from './CartItem.module.css'
import deleteIcon from '../../asset/icon-delete.svg'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
function CartItem(props) {
    const ctxCart=useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`
    

    const deleteItem=(e)=>{
        ctxCart.removeItem(props.id)
        e.stopPropagation()
        

    }
    return <div className={classes.cartItem}>
        <img alt="prod" className='mx-2 prod_img' src={props.img} />
        <div className={classes.cartItemchild}>
            <p>{props.name}</p>
            <p>{price} x {props.quant} <span className='totalAmount'>${props.totalAmt}</span>  </p>
        </div>
        <div>
            <img alt='delete icon' onClick={deleteItem} className={classes.delete} src={deleteIcon}/>
        </div>
        



    </div>
}

export default CartItem
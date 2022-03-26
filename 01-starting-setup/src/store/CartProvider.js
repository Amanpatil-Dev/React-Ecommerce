import { useReducer,useState } from "react";
import CartContext from "./cart-context";
const defaultValue = {
    items: [],
    totalAmount: 0

}

const reducerCartHandler = (state, action) => {
    if (action.type === 'ADD') {

        const totalAmount = state.totalAmount + action.item.price * action.item.quantity

        //search if the new product is in the cart or not
        const existingProductIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingProduct = state.items[existingProductIndex]
        let UpdatedItems

        if (existingProduct) {
            const updatedItem = {
                ...existingProduct,
                quantity: existingProduct.quantity + action.item.quantity,
                Message:'Successfullt updated Item'
            }

            UpdatedItems = [...state.items]
            UpdatedItems[existingProductIndex] = updatedItem
        } else {
            const newlyItem={
                ...action.item,
                Message:'Successfullt added Item'
            }
            UpdatedItems = state.items.concat(newlyItem);


        }


        return {
            items: UpdatedItems,
            totalAmount: totalAmount,
            img: action.productImage
        }
    }
    if(action.type ==='DELETE'){
        const existingProductIndex=state.items.findIndex((item)=> item.id === action.id)

        const existingProduct=state.items[existingProductIndex]
        
        let deleteItem;
        if(existingProduct){
            deleteItem=[]
            
        }

        return{
            items:deleteItem,
            totalAmount:0,
            img:undefined
        }
    }

}

function CartProvider(props) {

    const [cartState, dispatchCartState] = useReducer(reducerCartHandler, defaultValue)
    const [closeModal,setCloseModal]= useState(false)

    const addItemToCartHandler = (item) => {
        dispatchCartState({ type: 'ADD', item: item })
    }
    const removeitemFromCartHandler=(id)=>{
        dispatchCartState({type:'DELETE',id:id})
    }
    const CloseLightbox=(booleanValue)=>{
        setCloseModal(booleanValue)

    }
    const cartContext = {
        items: cartState.items,
        addItem: addItemToCartHandler,
        removeItem:removeitemFromCartHandler,
        closeLightBoxModal:CloseLightbox,
        modalClose:closeModal,
        img: cartState.img,
        totalAmount:cartState.totalAmount
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider
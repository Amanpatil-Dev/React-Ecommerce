import React from "react";
const CartContext=React.createContext({
    
    items:[],
    img:'img',
    addItem:()=>{},
    removeItem:()=>{},
    quantity:0,
    Message:''

})

export default CartContext
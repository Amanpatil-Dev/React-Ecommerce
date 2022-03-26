import React, { useReducer, useState } from "react"
import useImage from "./UseImage"
import { useMediaQuery } from "react-responsive"

const reducerFunction =(state,action)=>{

  if(action.type==='IMG_CHNG'){
    return action.imgName
    
  }

}

function ProductImage(props) {

  const [initialState,dispatchFunction]=useReducer(reducerFunction,'product-1')
  

  const {image } = useImage(initialState)

 const [initState,setState]= useState({activeProduct:'product-1'})

  const clickHandler=(e)=>{
    dispatchFunction({type:'IMG_CHNG',imgName:e.target.alt})
    setState({activeProduct:e.target.alt})
    
    
  }
  const displayModal=()=>{
    props.onModal()
  }

  
 const isLaptop= useMediaQuery(
    { minWidth: 992 }, undefined
  );




  return (

    <React.Fragment>

      <img alt='mobile-product' src={image} onClick={isLaptop ? displayModal : undefined }  className="img-fluid prod" />
      
      
      <div className="prod-thumbnail">
        
        <img alt="product-1" className= {`img-fluid col-2 col-lg-2 th ${'product-1' === initState.activeProduct ? "active" : "unactive"}`} onClick={clickHandler} src={props.pic1} />
        <img alt="product-2"  className= {`img-fluid col-2 col-lg-2 th ${'product-2' === initState.activeProduct ? "active" : "unactive"}`} onClick={clickHandler} src={props.pic2} />
        <img alt="product-3" className= {`img-fluid col-2 col-lg-2 th ${'product-3' === initState.activeProduct ? "active" : "unactive"}`} onClick={clickHandler} src={props.pic3} />
        <img alt="product-4" className= {`img-fluid col-2 col-lg-2 th ${'product-4' === initState.activeProduct ? "active" : "unactive"}`}  onClick={clickHandler} src={props.pic4} />


      </div>
    </React.Fragment>


  )

}

export default ProductImage
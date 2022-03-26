import React, { useContext, useState } from "react"
import ProductImage from "../ProductImage/ProductImage"
import ProductQuantityForm from "./ProductQuantityForm"
import mobile_product from '../../asset/image-product-1.jpg'
import CartContext from "../../store/cart-context"


function ProductDetail(props) {
  const ctxCart=useContext(CartContext)

  const [invalidClass,setInValidClass]=useState('')
  
  const handleChange=()=>{
    setInValidClass('')
    props.onInvalidData('')
  }
  const handleError=()=>{
    setInValidClass('animate__shakeX')
    props.onInvalidData('Please Add some Data')
    props.onSuccess(false)
  }
  const handleSuccess=(Amount)=>{
    setInValidClass('')
    ctxCart.addItem({
      id:props.id,
      name:props.name,
      price:props.price,
      quantity:Amount,
      productImage:props.thumbnail1.image
    })
    props.onSuccess(true)
  }

  const getQuantity=(productQuantity)=>{
    
    productQuantity === 0 ? handleError() : handleSuccess(productQuantity)

  }
  const openModal=()=>props.openModalLightBox()

  return (
  <React.Fragment>
     <div className="col-sm-12 col-md-6 col-lg-5 p-xl-5 banner-product__image">
       <ProductImage onModal={openModal} imgHead={mobile_product} pic1={props.thumbnail1.image} pic2={props.thumbnail2.image} pic3={props.thumbnail3.image} pic4={props.thumbnail4.image} />
     </div>
    <div className="col-sm-12 col-md-6 col-lg-5 banner-content p-3 p-lg-5">
      <div>
        <p className="decorative-text">{props.company}</p>
        <h1 className="product-header">{props.name}</h1>
        <p className="product-description">{props.description}
        </p>
      </div>
      <div className="price__discount">
        <div className="inner_price--discount">
          <h2 className="me-3">${props.price}</h2>
          <h5>{props.discount}%</h5>
        </div>
        <p>${props.mrp}</p>
      </div>

      <ProductQuantityForm onChangeClass={handleChange} invalidCls={invalidClass} onGetQuantity={getQuantity} />

    </div>
    </React.Fragment>
  )
}

export default ProductDetail
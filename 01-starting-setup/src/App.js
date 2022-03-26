import Navigation from "./Components/Layout/Navigation";
import React, { useState, useContext } from "react";
import Container from "./Components/Layout/Container";
import Row from "./Components/Layout/Row";
import ProductDetail from "./Components/ProductDeatil/ProductDetail";
import Modal from "./Components/UI/Modal";
import useImage from "./Components/ProductImage/UseImage";
import Slider from "./Components/ProductImage/ProductLightBox/Slider";

import CartContext from "./store/cart-context";

function App() {

  const ctxCart = useContext(CartContext)
  const [isValidMessage, setIsValidMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [backdrop, setbackdrop] = useState(false)

  const DUMMY_PRODUCT = [
    {
      id: "p1",
      company: "sneaker company",
      name: "Fall Limited Edition Sneaker",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole they will withstand everything the weather can offer",
      price: 125.0,
      discount: 50,
      mrpPrice: 250.0,
      thumbNail1: useImage('product-1-thumbnail'),
      thumbNail2: useImage('product-2-thumbnail'),
      thumbNail3: useImage('product-3-thumbnail'),
      thumbNail4: useImage('product-4-thumbnail')
    }
  ];

  const openLightBox = () => {
    setOpenModal(true)
  }
  const closeLightBox = () => {
    setOpenModal(false)
  }
  const invalidDataHandler = (mssg) => {
    setIsValidMessage(mssg)
  }

  const onSuccessHandler = (bool) => {
    setTimeout(()=> setIsSuccess(false),3000)
    setIsSuccess(bool)

  }
  const setBackdrop = (bool) => {
    setbackdrop(bool)

  }

  const products = DUMMY_PRODUCT.map((productD) => (
    <ProductDetail
      onInvalidData={invalidDataHandler}
      openModalLightBox={openLightBox}
      onSuccess={onSuccessHandler}
      key={productD.id}
      id={productD.id}
      company={productD.company}
      name={productD.name}
      description={productD.description}
      price={productD.price}
      discount={productD.discount}
      mrp={productD.mrpPrice}
      thumbnail1={productD.thumbNail1}
      thumbnail2={productD.thumbNail2}
      thumbnail3={productD.thumbNail3}
      thumbnail4={productD.thumbNail4}
    />
  ));

  return (
    <React.Fragment>
      <div>
        {isValidMessage}
      {isSuccess && ctxCart.items.map(item => item.Message)}
      </div>

      {backdrop && <Modal />}
      <Navigation onBackdrop={setBackdrop} />
      {openModal && <Slider CloseModal={closeLightBox} />}
      <hr />
      <Container>
        <Row>{products}</Row>
      </Container>
    </React.Fragment>
  );
}

export default App;


// todo
// style the alert message 
// try to make a new component for then and use Children.props
// make then show using portal outside the root div
// once please check for optimization andnn logic
// Style the remove icon in cart 
// style naigation links
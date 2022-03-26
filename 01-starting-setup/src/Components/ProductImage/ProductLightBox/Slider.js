import Modal from "../../UI/Modal";
import './Slider.css'
import React, { useState } from "react";
import dataSlider from './dataSlider'
import image1 from '../../../asset/image-product-1.jpg'
import image2 from '../../../asset/image-product-2.jpg'
import image3 from '../../../asset/image-product-3.jpg'
import image4 from '../../../asset/image-product-4.jpg'
import BtnSlider from "./BtnSlider"
import closeIcon from '../../../asset/icon-close.svg'


function Slider(props) {
    const imageArr = [image1, image2, image3, image4]

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)

        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }

    }
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }

    }
    const moveDot = index => {
        setSlideIndex(index)
    }

    const handleModalClose=()=>{
        props.CloseModal()

    }
  


    return (
        <Modal onClose={handleModalClose}>
            <div className="container-slider">
                <img alt="closeicon" className="closeicon" onClick={handleModalClose} src={closeIcon}/>
                {dataSlider.map((obj, index) => {
                    return (
                        <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                            <img alt="some" src={imageArr[index]} />

                        </div>
                    )
                })}

                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                <div className="container-dots">
                    {imageArr.map((item, index) => (
                        <div>
                            <img onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot active" : "dot"} alt="src" src={item} />
                        </div>
                    ))}
                </div>



            </div>
        </Modal>
    )


}

export default Slider
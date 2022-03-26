import './Slider.css'
import left from '../../../asset/icon-previous.svg'
import right from '../../../asset/icon-next.svg'

export default function BtnSlider({ moveSlide, direction }) {
    console.log(moveSlide, direction)
    return (
        <div>
            <button onClick={moveSlide}
                className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
                <img alt='right' src={direction === "next" ? right : left} />
            </button>

        </div>
    )

}
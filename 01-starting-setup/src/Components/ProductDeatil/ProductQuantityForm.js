import { useRef } from "react"
import minus from "../../asset/icon-minus.svg"
import plus from "../../asset/icon-plus.svg"
import Input from "../UI/Input"
import classes from './ProductQuantityForm.module.css'
function ProductQuantityForm(props){
const invalidCls=props.invalidCls

  const inputRef=useRef()
  const quantitySubmitHandler=(e)=>{

    e.preventDefault()
    props.onGetQuantity(+inputRef.current.value)
    inputRef.current.value=0
    
  
  }
  const decHanlder=()=>{
    if(inputRef.current.value <= 1){
      
      return
    }
    inputRef.current.value-=1
    props.onChangeClass()

  }
  const incHandler=()=>{
    inputRef.current.value=+inputRef.current.value + 1
    props.onChangeClass()
  }
  const onChnageH=()=>{
    props.onChangeClass()
  }
    return (
        <form onSubmit={quantitySubmitHandler} className="input__button">
          <div className={`input-Qty animate__animated ${invalidCls}`}>
            <img alt="minus" className="minus" onClick={decHanlder} src={minus} />
            <Input OnHandleChange={onChnageH}  ref={inputRef} input={{
                id:'Qty_'+1,
                defaultValue:"0",
                
                
            }}/>
            <img alt="plus" className="plus" onClick={incHandler} src={plus} />
          </div>
          <button  className={classes['cart-button']}>Add To Cart</button>
        </form>


    )
}

export default ProductQuantityForm
import React from "react"

const Input= React.forwardRef((props,ref)=> {
    console.log(props)
    const onChangeHandler=(e)=>{
        props.OnHandleChange()
    }
    return (
        <input
         ref={ref} onChange={onChangeHandler} {...props.input} />
    )
})

export default Input
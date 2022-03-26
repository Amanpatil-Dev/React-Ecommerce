import React from "react"
import  ReactDOM  from "react-dom"
const BackDrop=(props)=>{
    return <div className="backdrop" onClick={props.onModalClick}></div>
}

const ModalOverLay=(props)=>{
    return <div className="modal_custom" >
        {props.children}

    </div>
}
function Modal(props){
    console.log(props)
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onModalClick={props.onClose}/>,document.getElementById('modalOverlay'))}

            {ReactDOM.createPortal(<ModalOverLay >
                {props.children}
            </ModalOverLay >,document.getElementById('modalOverlay'))}
        </React.Fragment>
    )

}

export default Modal
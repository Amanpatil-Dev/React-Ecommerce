
function Container(props){
    return (
        <section className="container-fluid banner">
            {props.children}
        </section>
    )

}

export default Container
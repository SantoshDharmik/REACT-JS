const Comp1 = (props) => {
    return (
        <div>
            <h1>This is component 1</h1>
            <h2 className="title text-warning">Welcome {props.name}</h2>
        </div>
    )
}

export default Comp1
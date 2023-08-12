export function InputControl(props){
    return(<div className="container-control">
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props}></input>

    </div>)
}
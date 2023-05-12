import './input.css'

const Input = (props) => {
    const onDigit = (e) => {
        props.onAlter(e.target.value)
    }

    return (
        <div className="input">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={onDigit} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input
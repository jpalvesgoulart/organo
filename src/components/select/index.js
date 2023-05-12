import './select.css'

const Select = (props) => {
    return (
        <div className='select'>
            <label>{props.label}</label>
            <select onChange={e => props.onAlter(e.target.value)} required={props.required} value={props.value}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select
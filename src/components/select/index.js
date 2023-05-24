import './select.css'

const Select = ({ label, onAlter, required, value, itens }) => {
    return (
        <div className='select'>
            <label>{label}</label>
            <select onChange={e => onAlter(e.target.value)} required={required} value={value}>
                <option value=''></option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select
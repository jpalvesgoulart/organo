import './input.css'

const Input = ({ onAlter, label, value, required, placeholder, type = 'text' }) => {
    const onDigit = (e) => {
        onAlter(e.target.value)
    }

    return (
        <div className={`input input-${type}`}>
            <label>
                {label}
            </label>
            <input 
                type={type} 
                value={value} 
                onChange={onDigit} 
                required={required} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
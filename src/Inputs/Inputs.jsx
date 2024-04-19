import './Inputs.css'

// eslint-disable-next-line react/prop-types
const Inputs = ({ placeholder, tipo }) => {
    return (
            <input className='input' type={tipo} placeholder={placeholder} />
    )
}

export default Inputs;
import './TextoPromocao.css'

// eslint-disable-next-line react/prop-types
const TextoPromocao = ({ textoPromocao, span, cor}) => {
    return (
            <h1 className='textoPromocao' style={{backgroundColor: cor}}>{textoPromocao} <span className='spanTextoPromocao'>{span}</span></h1>
    )
}

export default TextoPromocao;
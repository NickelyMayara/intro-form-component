import './Textos.css'

// eslint-disable-next-line react/prop-types
const Textos = ({ titulo1, titulo2, subtitulo }) => {
    return (
        <>
            <h1 className='titulo'>{titulo1}</h1>
            <h1 className='titulo'>{titulo2}</h1>
            <h1 className='subtitulo'>{subtitulo}</h1>
        </>
    )
}

export default Textos;
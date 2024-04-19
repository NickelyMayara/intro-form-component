import './App.css'

import Textos from '../Textos/Textos'
import TextoPromocao from '../TextoPromocao/TextoPromocao'
import Inputs from '../Inputs/Inputs'
import Botao from '../Botao/Botao'

const App = () => {
    return (
        <>
            <section className='secaoGeral'>
                <section className='secao1'>
                    <Textos
                        titulo1='Learn to code by' titulo2='watching others' subtitulo='See how experienced developers salve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluabe.'
                    />
                </section>
                <section className='secao2'>
                    <div>
                        <TextoPromocao
                            textoPromocao='Try it free 7 days' span='then $20/mo. thereafter' cor='hsl(248, 32%, 49%)'
                        />
                    </div>
                    <div className='containerInfo'>
                        <Inputs placeholder='Last Name' tipo='text'/>
                        <Inputs placeholder='Last Name'tipo='text' />
                        <Inputs placeholder='Email Adress' tipo='email'/>
                        <Inputs placeholder='Password' tipo='password'/>
                        <Botao texto='CLAIN YOUR FREE TRIAL'/>
                    </div>
                </section>
            </section>
        </>
    )
}

export default App;
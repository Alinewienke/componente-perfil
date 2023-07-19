import './card.css'

function Card ({imagem, nome, profissao, perfil}) {
    return (
        <div className='card-container'>
            <div>
                <img className='imagem' src={imagem} alt="perfil" />
            </div>
            <div className='texto-container'>
                <div className='nome-container'>
                    <p className='nome'>{nome}</p>
                    <p className='profissao'>{profissao}</p>
                </div>
                <p className='perfil'>{perfil}</p>
            </div>
        </div>
    )
}

export default Card
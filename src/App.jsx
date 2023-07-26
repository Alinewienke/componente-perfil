import './App.css'
import Card from './components/card'
import dadosDePerfil from './../src/mocks/dadosDePerfil'

function App() {
  return (
    <>
      {dadosDePerfil.map(e => (
        <Card
        imagem={e.imagem}
        nome={e.nome}
        profissao={e.profissao}
        perfil={e.perfil}
        />
        ))}
    </>
  )
}

export default App

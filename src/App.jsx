import './App.css'
import Card from './components/card'


function App() {
  return (
    <>
      {dadosDoPerfil.map(e => (
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

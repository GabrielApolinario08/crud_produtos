
import './App.css'
import Search from './components/search/Search'
import Table from './components/chart/Chart'

function App() {


  return (
    <>
      <div className="tela gap-5">
        <h1 className='mt-4'>Gerenciar produtos</h1>
        <Search ></Search>
        <Table></Table>
        <button className='btn-cadastrar'><p>Cadastrar novos produtos</p></button>
      </div>
    </>
  )
}

export default App

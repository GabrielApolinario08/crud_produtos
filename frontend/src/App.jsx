import "./App.css";
import { useState } from "react";
import Search from "./components/search/Search";
import Chart from "./components/chart/Chart";
import ModalCreate from "./components/modal/ModalAdd";

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [filter, setFilter] = useState("");


  const handleFilter = (name) => {
    setFilter(name);
    console.log(filter);
  };

  const handleOpenCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  return (
    <>
      <div className="tela gap-5">
        <h1 className="mt-4">Gerenciar produtos</h1>
        <Search onFilter={handleFilter}></Search>

        <Chart busca = {filter} ></Chart>
        <button className="btn-cadastrar" onClick={handleOpenCreateModal}>
          <p>Cadastrar novos produtos</p>
        </button>
        <ModalCreate show={showCreateModal} onClose={handleCloseCreateModal} />
      </div>
    </>
  );
}

export default App;

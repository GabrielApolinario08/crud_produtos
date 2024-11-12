import "./App.css";
import { useState } from 'react';
import Search from "./components/search/Search";
import Table from "./components/chart/Chart";
import ModalCreate from "./components/modal/ModalCreate";

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleOpenCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  return (
    <>
      <div className="tela gap-5">
        <h1 className="mt-4">Gerenciar produtos</h1>
        <Search></Search>
        <Table></Table>
        <button className="btn-cadastrar" onClick={handleOpenCreateModal}>
          <p>Cadastrar novos produtos</p>
        </button>
      <ModalCreate show={showCreateModal} onClose={handleCloseCreateModal} />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/search/Search";
import Chart from "./components/chart/Chart";
import ModalCreate from "./components/modal/ModalAdd";

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [filter, setFilter] = useState("");
  const [shouldShowChart, setShouldShowChart] = useState(false);


  const handleFilter = (name) => {
    setFilter(name);
  };

  const handleOpenCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  useEffect(() => {
    setShouldShowChart(true);
  }, [filter]);
  return (
    <>
      <div className="tela gap-5">
        <h1 className="mt-4">Gerenciar produtos</h1>
        <Search onFilter={handleFilter}></Search>
        {shouldShowChart && (
          <Chart busca={filter} />
        )}

        <button className="btn-cadastrar" onClick={handleOpenCreateModal}>
          Cadastrar novo produto
        </button>
        <ModalCreate show={showCreateModal} onClose={handleCloseCreateModal} />
      </div>
    </>
  );
}

export default App;

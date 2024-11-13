import React, { useState, useEffect } from "react";
import { Table, Pagination, Container } from "react-bootstrap";
import "./style.css";
import ModalEdit from "../modal/ModalEdit";
import Search from "../search/Search";

const Chart = ({ busca }) => {
  const [products, setProducts] = useState([]); // Para armazenar os produtos do banco de dados
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Função para buscar os produtos do backend com filtros
  const refreshProducts = async () => {
    if (busca == null) {
      busca = "";
    }

    try {
      console.log("try: ", busca);
      const response = await fetch(
        `http://localhost:3000/api/produtos?pagina=${currentPage}&limite=${productsPerPage}&busca=${busca}`
      );
      const data = await response.json(); // Obtém o corpo da resposta como JSON
      setProducts(data.produtos); // Armazena os produtos no estado
      setTotalPages(Math.ceil(data.total / productsPerPage)); // Calcula o número de páginas
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const onEdit = () => {
    fetch("http://localhost:3000/api/produtos")
      .then((response) => response.json())
      .then((data) => setProducts(data.produtos)); // Atualiza a lista de produtos após a edição
  };

  useEffect(() => {
    refreshProducts(); // Chama a função para buscar produtos quando o componente for montado
  }, [currentPage, busca]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <Container className="tabela d-flex flex-column align-items-center">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Categoria</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.nome}</td>
              <td>{product.descricao}</td>
              <td>R${product.preco}</td>
              <td>{product.quantidade}</td>
              <td>{product.categoria}</td>
              <td>
                <button
                  className="btn-editar"
                  onClick={() => handleEdit(product)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination className="gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      <ModalEdit
        show={showModal}
        handleClose={handleCloseModal}
        product={selectedProduct}
        onEdit={onEdit}
      />
    </Container>
  );
};

export default Chart;

import React, { useState } from "react";
import { Table, Pagination, Container } from "react-bootstrap";
import "./style.css";
import ModalEdit from "../modal/ModalEdit";
import { Products } from "./Products";



const chart = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Products.slice(
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
          {currentProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td >R${product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td>
                <button className="btn-editar" onClick={() => handleEdit(product)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="gap-2">
        {Array.from(
          { length: Math.ceil(Products.length / productsPerPage) },
          (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
      <ModalEdit
        show={showModal}
        handleClose={handleCloseModal}
        product={selectedProduct}
      />
    </Container>
  );
};

export default chart;

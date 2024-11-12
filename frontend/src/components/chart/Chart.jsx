import React, { useState } from "react";
import { Table, Pagination, Container } from "react-bootstrap";
import "./style.css";

const products = [
  {
    name: "1",
    description:
      "Camiseta 100% algodão, disponível nas cores preto, branco e cinza.",
    price: "R$ 49,90",
    quantity: 150,
    category: "Vestuário",
  },
  {
    name: "2",
    description:
      "Livro de autoajuda que explora a ciência por trás da formação dos hábitos.",
    price: "R$ 39,90",
    quantity: 100,
    category: "Livros",
  },
  {
    name: "3",
    description:
      "Camiseta 100% algodão, disponível nas cores preto, branco e cinza.",
    price: "R$ 49,90",
    quantity: 150,
    category: "Vestuário",
  },
  {
    name: "4",
    description:
      "Livro de autoajuda que explora a ciência por trás da formação dos hábitos.",
    price: "R$ 39,90",
    quantity: 100,
    category: "Livros",
  },
  {
    name: "5",
    description:
      "Camiseta 100% algodão, disponível nas cores preto, branco e cinza.",
    price: "R$ 49,90",
    quantity: 150,
    category: "Vestuário",
  },
  ,
  {
    name: "6",
    description:
      "Livro de autoajuda que explora a ciência a a ciência a a ciência a a ciência a a ciência a a ciência a a ciência a a ciência a a ciência por trás da formação dos hábitos.",
    price: "R$ 39,90",
    quantity: 100,
    category: "Livros",
  },
  {
    name: "7",
    description:
      "Camiseta 100% algodãoque explora a ciência a a ciênciaque explora a ciência a a ciênciaque explora a ciência a a ciênciaque explora a ciência a a ciênciaque explora a ciência a a ciêncianível nas cores preto, branco e cinza.",
    price: "R$ 49,90",
    quantity: 150,
    category: "Vestuário",
  },
  {
    name: "8",
    description:
      "Livro de autoajuda que explora a ciência por trás da fque explora a ciência a a ciênciaque explora a ciência a a ciênciaque explora a ciência a a ciênciaque explora a ciência a a ciênciaormação dos hábitos.",
    price: "R$ 39,90",
    quantity: 100,
    category: "Livros",
  },
  {
    name: "9",
    description:
      "Camiseta 100% algodão, disponível nas corseta 100% algodão, disponível nas cores preto, brancseta 100% algodão, disponível nas cores preto, brancseta 100% algodão, disponível nas cores preto, brancseta 100% algodão, disponível nas cores preto, brancseta 100% algodão, disponível nas cores preto, brancseta 100% algodão, disponível nas cores preto, brancseta 100% algodão, disponível nas cores preto, brancseta 100% algodão, disponível nas cores preto, brancseta 100% algodão, disponível nas cores preto, brancseta 100% algodão, disponível nas cores preto, brancseta 100% algodão, disponível nas cores preto, brances preto, branco e cinza.",
    price: "R$ 49,90",
    quantity: 150,
    category: "Vestuário",
  },
];

const chart = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td><button className="btn-editar">Editar</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="gap-2">
        {Array.from(
          { length: Math.ceil(products.length / productsPerPage) },
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
    </Container>
  );
};

export default chart;

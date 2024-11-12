import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "./style.css";
import { Products } from "../chart/Products";

function ModalAdd({ show, onClose }) {
  const [validated, setValidated] = useState(false); // Para controle de validação
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Verifica a validade do formulário
    if (form.checkValidity() === false) {
      setValidated(true); // Marca como inválido para mostrar os feedbacks
    } else {
      Products.push({
        name: productName,
        description: productDescription,
        price: productPrice,
        quantity: parseInt(productQuantity),
        category: productCategory,
      });
      alert("Produto Cadastrado");
      setProductName("");
      setProductDescription("");
      setProductPrice("");
      setProductQuantity("");
      setProductCategory("");

      setValidated(false);
      onClose();
    }
  };

  return (
    <Modal className="modalScreen" show={show} onHide={onClose} centered>
      <Modal.Header closeButton className="modalHeader">
        <Row className="w-100">
          <Col className="text-center">
            <Modal.Title>Cadastrar Novo Produto</Modal.Title>
          </Col>
        </Row>
      </Modal.Header>

      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formProductName" className="mb-3">
            <Row className="align-items-center">
              <Col xs={3}>
                <Form.Label>
                  Nome <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do produto"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  O nome do produto é obrigatório.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="formProductDesc" className="mb-3">
            <Row className="align-items-center">
              <Col xs={3}>
                <Form.Label>Descrição</Form.Label>
              </Col>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  placeholder="Digite a descrição do produto"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="formProductPrice" className="mb-3">
            <Row className="align-items-center">
              <Col xs={3}>
                <Form.Label>
                  Preço <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col xs={9}>
                <Form.Control
                  type="number"
                  placeholder="Digite o preço"
                  required
                  className="no-spinner"
                  step="0.01"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  O preço é obrigatório.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="formProductQuantity" className="mb-3">
            <Row className="align-items-center">
              <Col xs={3}>
                <Form.Label>
                  Quantidade <span className="text-danger">*</span>
                </Form.Label>
              </Col>
              <Col xs={9}>
                <Form.Control
                  type="number"
                  placeholder="Digite a quantidade"
                  required
                  className="no-spinner"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  A quantidade é obrigatória.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="formProductCategory" className="mb-3">
            <Row className="align-items-center">
              <Col xs={3}>
                <Form.Label>Categoria</Form.Label>
              </Col>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  placeholder="Digite a Categoria do produto"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Modal.Footer>
            <Button className="btn-form-cadastrar" type="submit">
              Cadastrar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAdd;

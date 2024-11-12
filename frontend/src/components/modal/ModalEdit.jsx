import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "./style.css";

const ModalEdit = ({ show, handleClose, product }) => {
  const [editedProduct, setEditedProduct] = useState({});
  const [validated, setValidated] = useState(false);

  // Atualiza o estado com o produto selecionado quando o modal é aberto
  useEffect(() => {
    if (product) {
      setEditedProduct(product);
    }
  }, [product]);

  // Função para validar o formulário e exibir alerta
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.getElementById("editForm");

    // Verifica a validade do formulário usando o próprio Bootstrap
    if (form.checkValidity() === false) {
      setValidated(true); // Mostra os feedbacks de erro
    } else {
      alert("Produto Editado"); // Se válido, exibe o alerta
      setValidated(false);
      handleClose(); // Fecha o modal
    }
  };

  return (
    <Modal className="modalScreen" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="modalHeader">
        <Row className="w-100">
          <Col className="text-center">
            <Modal.Title>Editar Produto</Modal.Title>
          </Col>
        </Row>
      </Modal.Header>

      <Modal.Body>
        {product && (
          <Form
            id="editForm"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="formProductName" className="mb-3">
              <Form.Label>
                Nome <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editedProduct.name || ""}
                required
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, name: e.target.value })
                }
              />
              <Form.Control.Feedback type="invalid">
                O nome do produto é obrigatório.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formProductDesc" className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={editedProduct.description || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="formProductPrice" className="mb-3">
              <Form.Label>
                Preço <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={editedProduct.price || ""}
                className="no-spinner"
                step="0.01"
                required
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    price: parseFloat(e.target.value),
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                O preço é obrigatório.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formProductQuantity" className="mb-3">
              <Form.Label>
                Quantidade <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={editedProduct.quantity || ""}
                required
                className="no-spinner"
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    quantity: parseInt(e.target.value),
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                A quantidade é obrigatória.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formProductCategory" className="mb-3">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={editedProduct.category || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    category: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-excluir">Excluir</Button>
        <Button
          className="btn-edit"
          onClick={handleSubmit} // Chamando handleSubmit diretamente
        >
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEdit;

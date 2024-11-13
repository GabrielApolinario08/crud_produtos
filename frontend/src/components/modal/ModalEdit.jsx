import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "./style.css";
import ModalConfirmDelete from "./ModalConfirmDelete";

const ModalEdit = ({ show, handleClose, product, onEdit }) => {
  const [editedProduct, setEditedProduct] = useState({});
  const [validated, setValidated] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  // Atualiza o estado com o produto selecionado quando o modal é aberto
  useEffect(() => {
    if (product) {
      setEditedProduct(product);
    }
  }, [product]);

  // Função para validar o formulário e exibir alerta
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = document.getElementById("editForm");

    // Verifica a validade do formulário usando o próprio Bootstrap
    if (form.checkValidity() === false) {
      setValidated(true); // Mostra os feedbacks de erro
    } else {
      try {
        // Envia os dados atualizados para a API
        const response = await fetch(
          `http://localhost:3000/api/produtos/${editedProduct.id}`,
          {
            method: "PUT", // Método para editar o produto
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nome: editedProduct.nome,
              descricao: editedProduct.descricao,
              preco: editedProduct.preco,
              quantidade: editedProduct.quantidade,
              categoria: editedProduct.categoria,
            }),
          }
        );

        if (response.ok) {
          alert("Produto Editado com Sucesso");
          setShowConfirmDelete(false);
          handleClose(); // Fecha o modal
          onEdit();
        } else {
          alert("Erro ao editar produto");
        }
      } catch (error) {
        console.error("Erro ao editar produto:", error);
        alert("Erro ao editar produto");
      }
    }
  };
  const handleShowConfirmDelete = () => setShowConfirmDelete(true);
  const handleCloseConfirmDelete = () => setShowConfirmDelete(false);

  function teste() {
    console.log(product.id);
  }
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/produtos/${product.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Produto Excluído com Sucesso");
        handleCloseConfirmDelete();
        handleClose();
        onEdit();
      } else {
        alert("Erro ao excluir produto");
      }
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      alert("Erro ao excluir produto");
    }
  };

  return (
    <>
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
                <Row className="align-items-center">
                  <Col xs={3}>
                    <Form.Label>
                      Nome <span className="text-danger">*</span>
                    </Form.Label>
                  </Col>
                  <Col xs={9}>
                    <Form.Control
                      type="text"
                      name="nome"
                      value={editedProduct.nome || ""}
                      required
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          nome: e.target.value,
                        })
                      }
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
                      name="descricao"
                      value={editedProduct.descricao || ""}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          descricao: e.target.value,
                        })
                      }
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
                      name="preco"
                      value={editedProduct.preco || ""}
                      className="no-spinner"
                      step="0.01"
                      required
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          preco: parseFloat(e.target.value),
                        })
                      }
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
                      name="quantidade"
                      value={editedProduct.quantidade || ""}
                      required
                      className="no-spinner"
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          quantidade: parseInt(e.target.value),
                        })
                      }
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
                      name="categoria"
                      value={editedProduct.categoria || ""}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          categoria: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-excluir" onClick={handleShowConfirmDelete}>
            Excluir
          </Button>
          <Button className="btn-edit" onClick={handleSubmit}>
            Editar
          </Button>
        </Modal.Footer>
      </Modal>
      <ModalConfirmDelete
        show={showConfirmDelete}
        handleClose={handleCloseConfirmDelete}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default ModalEdit;

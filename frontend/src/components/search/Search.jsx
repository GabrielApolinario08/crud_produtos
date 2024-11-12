import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './style.css'

function Search() {
  return (
    <div className="search d-flex gap-5 mb-4">
      <Form className="d-flex gap-4">
        <Form.Group className="">
          <Form.Label>Nome</Form.Label>
          <Form.Control className = "input-nome" type="text"  />
        </Form.Group>

        <Form.Group className="" >
          <Form.Label>Categoria</Form.Label>
          <Form.Control className = "input-categoria"type="text"  />
        </Form.Group>
      </Form>
      <Button type="submit" className="btn btn-filtrar">
        filtrar
      </Button>
      <Button type="submit" className="btn btn-limpar">
        limpar
      </Button>
    </div>
  );
}

export default Search;

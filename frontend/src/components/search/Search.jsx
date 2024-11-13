import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./style.css";

function Search({ onFilter }) {
  const [buscar, setBuscar] = useState("");

  const handleClear = () => {
    setBuscar("");
    onFilter("", "");
  };

  return (
    <div className="search d-flex gap-5 mb-4">
      <Form className="d-flex gap-4">
        <Form.Group className="">
          <Form.Label>buscar</Form.Label>
          <Form.Control
            className="input-buscar"
            type="text"
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button
        type="submit"
        className="btn btn-filtrar"
        onClick={() => onFilter(buscar)}
      >
        filtrar
      </Button>

      <Button type="submit" className="btn btn-limpar " onClick={handleClear}>
        limpar
      </Button>
    </div>
  );
}

export default Search;

import React from 'react';
import { Form } from 'react-bootstrap';

const ContactSearch = ({ searchValue, onSearchChange }) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <Form className="mb-4">
      <Form.Group controlId="formBasicSearch">
        <Form.Label>Buscar Contacto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Lucía Pérez"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </Form.Group>
    </Form>
  );
};

export default ContactSearch;

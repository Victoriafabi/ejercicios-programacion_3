import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewContact = ({ onContactsAdded }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const contactData = {
      contactName: name,
      contactPhone: phone,
    };

    onContactsAdded(contactData);
    setName("");
    setPhone("");
  };

  return (
    <Card className="text-center mt-4">
      <Card.Header>Nuevo Contacto</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Lucía Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 341 555-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Agregar Contacto
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewContact;

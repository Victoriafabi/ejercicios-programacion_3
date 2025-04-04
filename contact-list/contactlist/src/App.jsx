import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import NewContact from './components/newContact/NewContact';
import contactList from './data/contacts';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ContactSearch from './components/newContact/contactSearch/ContactSearch'; 

function App() {
  const [contacts, setContacts] = useState(contactList);
  const [searchValue, setSearchValue] = useState(""); 

  const handleContactsAdded = (contactData) => {
    const newContact = {
      name: contactData.contactName,
      phone: contactData.contactPhone,
      id: Math.random().toString(),
    };
    setContacts((prev) => [...prev, newContact]);
  };

  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Bienvenidos</h1>

      <ContactSearch
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      
      <NewContact onContactsAdded={handleContactsAdded} />

      <h1 className="text-center mb-4">Lista de Contactos</h1>
      <Row className="mt-4">
        {filteredContacts.map((contact, index) => (
          <Col md={6} lg={4} key={index} className="mb-3">
            
            <Card>
              <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>📞 {contact.phone}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;

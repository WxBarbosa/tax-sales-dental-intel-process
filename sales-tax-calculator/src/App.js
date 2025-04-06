import { useState } from 'react';
import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Input, Form, ListGroup, Container, Row, Col } from 'react-bootstrap';

function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedState, setSelectedState] = useState('California');
  const [states, setStates] = useState([]);
  const [availableItems, setAvailableItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    loadItems()
    loadStates()
  }, [])

  const loadItems = () => {
    axios.get('http://localhost:5224/api/purchases/items')
      .then(response => {
        setAvailableItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }

  const loadStates = () => {
    axios.get('http://localhost:5224/api/purchases/states')
      .then(response => {
        setStates(response.data);
      })
      .catch(error => {
        console.error('Error fetching states:', error);
      });
  }

  const handleAddSelectedItem = () => {
    const item = availableItems.find(item => item.name === selectedItem);
    if (item) {
      setItems([...items, item]);
      setSelectedItem('');
      updateTotal([...items, item], selectedState); 
    }
  }

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    updateTotal(newItems, selectedState);
  }

  const handleStateChange = (event) => {
    if(items.length === 0) {
      alert("Please add an item before selecting a state.");
      return;
    }
    setSelectedState(event.target.value);
    updateTotal([...items], event.target.value);
  }

  const updateTotal = (items, state) => {
    axios.post(`http://localhost:5224/api/purchases/calculate?state=${state}`, items, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      setTotal(response.data.totalTax);
    })
    .catch(error => {
      console.error('Error fetching total:', error);
    });
  }

  return (
   <Container>
      <h1>Sales Tax Calculator</h1>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formItemSelect">
              <Form.Label>Select Item</Form.Label>
              <Form.Control as="select" value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
                <option value="">Select an item</option>
                {availableItems.map((item, index) => (
                  <option key={index} value={item.name}>{item.name}</option>
                ))}
              </Form.Control>
          </Form.Group>
          <Button variant="primary" className='mt-3' onClick={handleAddSelectedItem}>Add Item</Button>
        </Col>
      </Row>
      <Row className='mb-3'>        
        <h3>Items Added</h3>
        <Col md={6}>
          <ListGroup>
            {items.map((item, index) => (
              <ListGroup.Item key={index} className='d-flex justify-content-between'>
                <div className='d-flex flex-column'>
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
                <Button variant="danger" onClick={() => handleRemoveItem(index)} className='ml-2'>Remove</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formState">
            <Form.Label>Select State</Form.Label>
            <Form.Control as="select" value={selectedState} onChange={handleStateChange}>
              {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h2>Total Tax: ${total.toFixed(2)}</h2>
        </Col>
      </Row>
   </Container>
  );
}

export default App;

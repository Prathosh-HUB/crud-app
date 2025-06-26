import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form   from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';

function CreateStaf() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [age,     setAge]     = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/create', {
      name, email, age 
    })
    .then(() => navigate('/'))
    .catch(err => console.log(err));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Add Staff</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            min={18}
            placeholder="Enter age"
            value={age}
            onChange={e => setAge(e.target.value)}
            required
          />
        </Form.Group>
      
        <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default CreateStaf;

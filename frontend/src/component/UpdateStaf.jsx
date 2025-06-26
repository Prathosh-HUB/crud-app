import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UpdateStaf() {
  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: '',
    age: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8081/users/${id}`)
      .then(res => {
        setValues({
          name: res.data.name,
          email: res.data.email,
          age: res.data.age
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8081/users/${id}`, values)
      .then(() => {
        navigate('/'); // redirect to view page after update
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h2>Update Employee</h2>
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            value={values.age}
            onChange={(e) => setValues({ ...values, age: e.target.value })}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Update</Button>
      </Form>
    </div>
  );
}

export default UpdateStaf;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

function ViewStaf() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8081/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios.delete(`http://localhost:8081/users/${id}`)
        .then(() => fetchData())  // Refresh the table after deletion
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="my-4">
      <Link to="/CreateStaf" className="btn btn-success mb-3">Add Employee</Link>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No data available</td>
            </tr>
          ) : (
            data.map((d, i) => (
              <tr key={d.id}>
                <td>{i + 1}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.age}</td>
                <td>
                  <Link to={`/UpdateStaf/${d.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                  <button onClick={() => handleDelete(d.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewStaf;

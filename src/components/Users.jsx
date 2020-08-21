import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink }from 'react-router-dom';

const Users = () => {
  const [users,setUser] = useState([]);
  
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    console.log(result.data);
    setUser(result.data)
  };

  const deleteUser = async id =>{
    await axios.delete(`http://localhost:3001/users/${id}`)
    loadUsers();
  }

  return (
    <>
       <div className="card">
          <div className="card-body">
            <NavLink to="/addUser" className="btn btn-primary">Add New User</NavLink>
            <br /><br />
    <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">City</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user, index) => (
        <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.gender}</td>
        <td>{user.city}</td>
        <td>
          <NavLink to={`/users/edit/${user.id}`} className="btn btn-info">Edit</NavLink>
          &nbsp;&nbsp;&nbsp;
          <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
          &nbsp;&nbsp;&nbsp;
        </td>
        </tr>
      ))
    }
  </tbody>
</table>
</div>
</div>
    </>
  );
}

export default Users;
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import  Axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = ({getId}) => {
  const navigate = useNavigate();
const[users,setUsers] =useState([]);
useEffect(()=>{
  Axios.get("http://localhost:1234/users")
  .then(res=> setUsers(res.data))
  
})
const deleteUser =(id)=>{
Axios.delete(`http://localhost:1234/users/${id}`)
.then(()=>alert("user deleted"))
.catch((e)=>console.log(e))
}

const updateUser=(id)=>{
  getId(id)
  navigate("/updateForm");
}

  return (
    <div>
      <Container>
        <h1 className='display-3 text-center'>User Lists</h1>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>S.NO</th>
          <th>User Name</th>
          <th>Password</th>
          <th>UpdateAction</th>
          <th>DeleteAction</th>
        </tr>
      </thead>
      <tbody>
        {users.map((users,index)=>{
          return(
            <tr key={index}>
            <td>{index +1}</td>
            <td>{users.username}</td>
            <td>{users.password}</td>
            <td><button className='btn btn-success'onClick={()=>updateUser(users._id)}>Update</button></td>
            <td><button className='btn btn-danger'onClick={()=>deleteUser(users._id)}>Delete</button></td>
          </tr>
          )
        })}
       
      </tbody>
    </Table>
      </Container>
    </div>
  )
}

export default Home
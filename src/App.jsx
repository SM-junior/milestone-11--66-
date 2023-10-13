
import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

function App() {
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
    console.log(users);
  },[])

  return (
    <>
      <h1>User management system</h1>
      <h2>Numbers of users: {users.length}</h2>
      {
        users.map(user=> <p key={user.id}>{user.name}</p>)
      }
    </>
  )
}

export default App

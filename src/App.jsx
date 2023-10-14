
import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  const handleNewUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);


    // user.id = users.length + 1;
    // const allUsers = [...users, user];
    // setUsers(allUsers);

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUser = [...users, data]
        setUsers(newUser)
        form.reset();
      })

  }


  return (
    <>
      <h1>User management system</h1>

      <form onSubmit={handleNewUser}>
        <input type="name" name='name' placeholder='name' id='' /><br />
        <input type="email" name='email' placeholder='email' id='' /><br />
        <input type="submit" value="Submit" />
      </form>


      <h2>Numbers of users: {users.length}</h2>
      {
        users.map(user => <p key={user.id}>{user.name}</p>)
      }
    </>
  )
}

export default App

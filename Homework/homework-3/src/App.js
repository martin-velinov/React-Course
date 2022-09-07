import React, {useState} from 'react';
import './css/Styles.css'



function App() {

  const [name,setName] = useState('')
  const [surname,setSurame] = useState('')
  const[password,setPassword] =useState('')
  const[email,setEmail] =useState('')
  const[age,setAge] =useState(0)
  const [openTable, setOpenTable] = useState(false);

  return (
    <div >
      <h2>Sign up form</h2>

       <form action="#">

          <label htmlFor="name">Name:</label><br />
            <input type="text" 
            placeholder='Enter name' 
            value={name}
            onChange={(e)=> {setName(e.target.value)}}
            />
          <br />

          <label htmlFor="surname">Surname:</label><br />
          <input type="text" 
          placeholder='Enter surname' 
          value={surname}
          onChange={(e)=> {setSurame(e.target.value)}}
          />
          <br />

          <label htmlFor="email">Email:</label><br />
          <input type="email" 
          placeholder='Enter email' 
          value={email}
          onChange={(e)=> {setEmail(e.target.value)}}
          />
          <br />

          <label htmlFor="password">Password:</label><br />
          <input type="password" 
          placeholder='Enter password' 
          value={password}
          onChange={(e)=> {setPassword(e.target.value)}}
          />
          <br />
          
          <label htmlFor="age">Age:</label><br />
          <input type="number" 
          placeholder='Enter age' 
          value={age}
          onChange={(e)=> {setAge(e.target.value)}}
          />
       </form>
        
       <button onClick={()=>{setOpenTable(!openTable)}}>Open/Close</button>

      { 
      openTable && 

      <table border={1}>

        <thead>
        <tr >
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Age</th> 
        </tr>
        </thead>

        <tbody>
              <tr >
                <td>{name}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>{age}</td>
              </tr>
        </tbody>

      </table>
      
      
      }
      
    </div>
 
  );
}

export default App;

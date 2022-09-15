import React,{useState} from 'react';
import Training from './components/Training';
import "./css/Styles.css"


function App() {

  

  const [listOfThings,setListOfThings]=useState([
    {id:1,name:"Pero",lastName:"Perovski",year:1996},
    {id:2,name:"Ivan",lastName:"Ivanovski",year:1997},
    {id:3,name:"Stefan",lastName:"Stefanovski",year:1998}
  ]);

  const [person, setPerson] = useState({
    name: "",
    lastName: "",
    year:""
});



  function addPerson() {
    let newObject = {
      id:Math.floor(Math.random()*100),
      name: person.name,
      lastName:person.lastName,
      year:person.year
    }
  
    setListOfThings([...listOfThings,newObject]);
    
  }


function deletePerson(id){
  const removePerson = listOfThings.filter((person) => person.id !== id);

  setListOfThings(removePerson);
}

  
 return (

  <div id="app">
    <h2>List of users</h2>
    
    
    <label htmlFor="name">Name</label><br />
    <input type="text" 
      placeholder='enter first name' 
      value={person.name}
      onChange={(e) => { setPerson({...person,name:e.target.value}) }}
      />
      <br />
      <label htmlFor="lastname"> Last Name</label><br />
      <input type="text" 
      placeholder='enter last name' 
      value={person.lastName}
      onChange={(e) => { setPerson({...person,lastName:e.target.value}) }}
      />
      <br />
      <label htmlFor="year"> Year</label><br />
      <input type="number" 
      placeholder='enter year' 
      value={person.year}
      onChange={(e) => { setPerson({...person,year:e.target.value}) }}
      />
      <br /><br />
      <button onClick={addPerson}>Add user</button>
    <Training listOfThings={listOfThings}  deletePerson={deletePerson} />
  </div>

  );
}

export default App;

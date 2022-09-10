import React,{useState} from 'react';


function App() {

  const [car,setCar] =useState({model:"BMW" , year:2020})
  const [days,setDays]=useState([
    "monday", "tuesday","wednesday"
  ]);
const [person,setPerson]=useState({firstName:'',lastName:''})


function addDays(){
  setDays([...days,'Thursday'])
}


  function buyCar(){
    setCar({
      ...car,
      year:2022
    })
  }

  
 return (
<>
    <div>
      <input type="text"
      placeholder='enter first name'
      value={person.firstName}
      onChange={(e)=>setPerson({...person,firstName:e.target.value})}
      />
      <input type="text"
      placeholder='enter first name'
      value={person.lastName}


      onChange={(e)=>setPerson({...person,lastName:e.target.value})}
      />
      <h2>Car:</h2>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <button onClick={buyCar}>buy car</button>


      <ul>
        {days.map((day,i)=>{
          return(
            <li key={i}>{day}</li>
          )
        })}
      </ul>
    </div>
      <button onClick={addDays}>add days</button>

      
      </>
  );
}

export default App;

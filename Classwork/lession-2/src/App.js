import React from 'react';
import {Welcome} from './components/Welcome'
import {Example} from './components/Example'
import {Comments} from './components/Comments'
import {Student} from './components/Student'
import {StudentClass} from './components/StudentClass'
import {FruitList} from './components/FruitList'

var name = 'Marko';
var lastName ='Markovski';
var age =22

var student ={
  name:'Martin',
  lastName:"Velinov",
  index:225856
}

let listaNaOvosje= ['banana', 'kivi', 'jabolko']

function App() {

  return (
    <div id='app'>
      <Example name={name} prezime={lastName} age={age}/>
      <Welcome ime={'Martin'} prezime={'Velinov'} age={28}/>
      <Comments hasComments={false} multipleComments={true}/>
      <Student student={student}/>
      <StudentClass student={student}/>
      <FruitList listOfFruits={ listaNaOvosje}/>
    </div>
  );
}

export default App;

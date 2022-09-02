import React from 'react';
import {Comments} from './components/Comments'
import {Car} from './components/Car'

let comments =[
  {author:'Martin',content:"one"},
  {author:'Yannis',content:"two"},
  {author:'Lile',content:"three"}
]

let registracija=[
  {grad:{naselba:"n1", ulica:'u1' },oznaka:"sk-975"},
  {grad:{naselba:"n2", ulica:'u2' },oznaka:"bt-365"},
  {grad:{naselba:"n3", ulica:'u3' },oznaka:"ku-235"}
]

let cars = [
  {brand:'Ford',model:"Fiesta",year:2008,plates:registracija[0]},
  {brand:'Opel',model:"Astra",year:2015,plates:registracija[1]},
  {brand:'Tesla',model:"Model S",year:2022,plates:registracija[2]}
]


function App() {

  return (
    <div id='app'>
      <Comments listOfComments={comments}cifra={5} />
      <hr />
      <Car vozila={cars}/>
    </div>
  );
}

export default App;

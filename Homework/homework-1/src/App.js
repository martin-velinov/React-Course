import React from 'react';
import {User} from './components/User';

const firstUser = {
  firstName: "John",
  lastName:'Parker',
  age:28,
  address: `2094 Farland Street,Illinois`
}

const secondUser = {
  firstName: "Amy",
  lastName:'Adams',
  age:33,
  address:'1829 Hidden Pond Road,Tennessee'
}

function App() {
  return (
    <div >
      <User user1={firstUser} user2={secondUser}
      showFirst={false} />
    </div>
  );
}

export default App;

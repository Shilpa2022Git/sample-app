import React from 'react'
import Home  from './Home'
import Employee from './Employee'

function App() {
  const title = 'Learning dynamic values';

  const likes = 50;

  //print object is not allowed
  const person = {name:'blog', age:'1'};
  //we can replace dynamic value in attribute also
  const link = 'http://www.google.com';

  

  return (
    <div className='Appclass'>
      <p>{title}</p>
      <p>Likes given are {likes}</p>
      <p>Check object vars {person.name}</p>
      <p>dynamic vaues using js {Math.random() * 10}</p>
      <p>We can use array { [1,2,3,4,5]}</p>

      <a href={link}>Google link </a>

      {/* <Home /> */}

      <Employee id="121" name='Shilpa' location='Pune' Salary="12345"></Employee>
      
    </div>
  );
}

export default App;
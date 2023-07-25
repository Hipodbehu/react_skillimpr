import { useState } from "react";

const Home = () => {

  // let name = 'test_name';
  const [name, setName] = useState('test_name');
  const [age, setAge] = useState(23);

  const handleClick = (e) => {
    console.log('Hey ninja!', e);
  }

  const handleClickAgain = (name, e) => {
    console.log('Heey ' + name + e.target);
    setName('test_name2');
    setAge(age + 1);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } yrs old</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('Jarik', e)}>Click me again</button>
    </div>
  )
}

export default Home;
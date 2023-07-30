import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body:'lrem ipms', author: 'Jarik', id: 1},
    { title: 'Party heayahee', body: 'lrem ipms', author: 'Yaarik', id: 2},
    { title: 'Web dev tooltips', body: 'lrem ipms', author: 'Derek', id: 3}
  ])

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
      <BlogList blogs={blogs} title={'Sometitle'}/>
      <h1>Homepage</h1>
      <p>{ name } is { age } yrs old</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('Jarik', e)}>Click me again</button>
    </div>
  )
}

export default Home;
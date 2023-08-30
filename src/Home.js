import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body:'lrem ipms', author: 'Jarik', id: 1},
    { title: 'Party heayahee', body: 'lrem ipms', author: 'Yaarik', id: 2},
    { title: 'Web dev tooltips', body: 'lrem ipms', author: 'Derek', id: 3}
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  const [name, setName] = useState('mario');

  useEffect(() => {
    console.log('Use effect ran')
    console.log(name)
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={'Sometitle'} handleDelete={handleDelete}/>
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{ name }</p>
    </div>
  )
}

export default Home;
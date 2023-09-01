import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import {wait} from "@testing-library/user-event/dist/utils";

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          setBlogs(data);
          setIsPending(false)
        })
    }, 1000)
  }, []);

  return (
    <div className="home">
      {isPending && <div>LOADING . . . </div> }
      {blogs && <BlogList blogs={blogs} title={'Sometitle'} /> }
    </div>
  )
}

export default Home;
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import {wait} from "@testing-library/user-event/dist/utils";

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(resp => {
          if (!resp.ok) {
            throw Error('Could not fetch data');
          }
          return resp.json();
        })
        .then(data => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(e => {
          setIsPending(false);
          setError(e.message);
        })
    }, 1000)
  }, []);

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>LOADING . . . </div> }
      { blogs && <BlogList blogs={blogs} title={'Sometitle'} /> }
    </div>
  )
}

export default Home;
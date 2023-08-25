import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new block"
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1>{ title }</h1>
        <p>Liked in { likes } times</p>
        <p>{ 10 }</p>
        <p>{ "Hello ninjas!" }</p>
        <p>{ [1,2,4] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>Google site</a>
      </div>
    </div>
  );
}

export default App;

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home </a>
        <a href="/create" style={{
          color: 'purple',
          backgroundColor: 'black',
          borderRadius: '7px'
        }}>Create </a>
      </div>
    </nav>
  );
}

export default Navbar;
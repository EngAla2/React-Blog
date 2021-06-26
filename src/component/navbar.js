import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Hello to my Blogs!</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to="/create" style={{
          color: 'white',
          borderRadius: '8px',
          backgroundColor: '#f1356d',
        }}>New Blog</Link>
      </div>
    </nav>
  );
}

export default NavBar;
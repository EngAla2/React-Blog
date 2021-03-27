const NavBar = () => {
  return ( 
    <nav className="navbar">
      <h1>Hello to my Blogs!</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">about</a>
        <a href="/creat" style={{
          color: 'white',
          borderRadius: '8px',
          backgroundColor: '#f1356d',
        }}>New Blog</a>
      </div>
    </nav>
   );
}
 
export default NavBar;
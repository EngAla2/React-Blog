const Home = () => {
  const onclickHandler = (name) => {
    console.log("Hi from home! " + name);
  };
  return ( 
    <div className="home">
      <h2>Here is your Home page</h2>
      <button onClick={() => onclickHandler('Ala2')}>
        Click!
      </button>
    </div>
   );
}
 
export default Home;
import { useState } from 'react'
const Home = () => {
  const [name, setName] = useState('Ala2')
  const [age, setAge] = useState(24)

  const onclickHandler = () => {
    setName("Aseel");
    setAge(20);
  }

  return ( 
    <div className="home">
      <h2>Here is your Home page</h2>
      <p>{name} is {age} years old!</p>
      <button onClick={() => onclickHandler()}>
        Click!
      </button>
    </div>
   );
}
 
export default Home;
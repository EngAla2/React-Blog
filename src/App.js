import NavBar from './component/navbar'
import Home from './component/home'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;

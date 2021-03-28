import NavBar from './component/navbar'
import Home from './component/home'
import Contact from './component/contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

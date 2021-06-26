import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './component/blogDetails';
import Contact from './component/contact';
import CreateBlog from './component/create';
import Home from './component/home';
import NavBar from './component/navbar';
import NotFound from './component/notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/create">
              <CreateBlog />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Programs from './components/Programs/Programs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">

        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path ="/">
              <Home></Home>
            </Route>
            <Route exact path="/programs">
             <Programs></Programs>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/blogs">
            <Blogs></Blogs>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;

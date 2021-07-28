import './App.css';
import Home from './pages';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import SigninPage from './pages/signin';
/*import Navbar from './components/Navbar';*/

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

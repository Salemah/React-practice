import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointments from './Pages/Appointments/Appintmrnts/Appointments';
import Psd from './Pages/Home/Psd/Psd';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/psd">
            <Psd/>
          </Route>
          <Route path="/appointment">
            <Appointments />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

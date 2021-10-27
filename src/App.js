import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AddEvent from './Components/AddEvent/AddEvent';
import NotFound from './Components/NotFound/NotFound';
import VolunteerRegister from './Components/VolunteerRegister/VolunteerRegister';
import Profile from './Components/Profile/Profile';
import VolunteerList from './Components/VolunteerList/VolunteerList';

function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/addEvent">
          <AddEvent></AddEvent>
        </Route>

        <Route exact path="/volunteerRegister">
          <VolunteerRegister></VolunteerRegister>
        </Route>

        <Route exact path="/profile">
          <Profile></Profile>
        </Route>

        <Route exact path="/volunteerList">
          <VolunteerList></VolunteerList>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

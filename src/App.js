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
import Footer from './Components/Footer/Footer';
import Donation from './Components/Donation/Donation';
import Blog from './Components/Blog/Blog';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Register/Register';

function App() {
  return (
    <AuthProvider>
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

          <Route exact path="/events">
            <Home></Home>
          </Route>

          <Route exact path="/donation">
            <Donation></Donation>
          </Route>

          <Route exact path="/blog">
            <Blog></Blog>
          </Route>

          <Route exact path="/register">
            <Register></Register>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;

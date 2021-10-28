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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <PrivateRoute exact path="/addEvent">
            <AddEvent></AddEvent>
          </PrivateRoute>

          <PrivateRoute exact path="/events/volunteerRegister/:id">
            <VolunteerRegister></VolunteerRegister>
          </PrivateRoute>

          <PrivateRoute exact path="/profile">
            <Profile></Profile>
          </PrivateRoute>

          <PrivateRoute exact path="/volunteerList">
            <VolunteerList></VolunteerList>
          </PrivateRoute>

          <Route exact path="/events">
            <Home></Home>
          </Route>

          <PrivateRoute exact path="/donation">
            <Donation></Donation>
          </PrivateRoute>

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

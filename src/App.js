import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import NavbarStyle from './component/NavbarStyle';
import Home from './component/Home';
import ForgotPassword from './component/auth/ForgotPassword';
import AddSurvey from './component/survey/AddSurvey';
import EditSurvey from './component/survey/EditSurvey';
import DeleteSrvey from './component/survey/DeleteSrvey';

function App() {
  return (
    <Router>
      <NavbarStyle />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/forgot">
          <ForgotPassword />
        </Route>
        <Route path="/add">
          <AddSurvey />
        </Route>
        <Route path="/edit">
          <EditSurvey />
        </Route>
        <Route path="/delete">
          <DeleteSrvey />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

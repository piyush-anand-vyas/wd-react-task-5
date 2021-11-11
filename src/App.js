import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import Users from './Components/Users';
import UserState from './Contexts/users/UserState';

function App() {
  return (
    <div>
      <UserState>
      <Router>
        <Switch>
          <Route exact path="/"><Users/></Route>
          <Route exact path="/home"><Users/></Route>
          <Route exact path="/addUser"><AddUser/></Route>
          <Route exact path="/editUser/:id"><EditUser/></Route>
        </Switch>
      </Router>
      </UserState>
    </div>
  );
}

export default App;

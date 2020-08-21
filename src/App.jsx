import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { Switch , Route  } from "react-router-dom";

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/Users" component={Users}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/addUser" component={AddUser}/>
      <Route exact path="/users/editUser/:id" component={EditUser}/>
    </Switch>
    </>
  );
}

export default App;

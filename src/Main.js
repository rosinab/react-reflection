import React, { Component } from "react";
import {
    Route,
    NavLink,
    BrowserRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Dogs from "./Dogs";
  import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
            <h1>Random Dog Generator</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/dogs">Dogs</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/dogs" component={Dogs}/>
                <Route path="/contact" component={Contact}/>
            </div>
            </div>
        </BrowserRouter>
    );
  }
}
 
export default Main;
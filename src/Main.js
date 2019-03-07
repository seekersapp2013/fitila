import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} 

from "react-router-dom";
import Home from "./Home";
import Trainings from "./Trainings";
import About from "./About";
import Team from "./Team";
import Blog from "./Blog";
import Contact from "./Contact";


class Main extends Component {
    render() {
      return (
        <HashRouter>
          
          <div>
            <ul className="header">
            <NavLink exact to="/"><img src="logo.svg"></img></NavLink>
            <li><NavLink to="/Trainings">Trainings</NavLink></li>
            <li><NavLink to="/About">About Us</NavLink></li>
            <li><NavLink to="/Team">Our Team</NavLink></li>
            <li><NavLink to="/Blog">Blog</NavLink></li>
            <li><button type="button" class="btn btn-primary btn-pill header">Let's Talk</button></li>
            </ul>
                                    
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route exact path="/Trainings" component={Trainings}/>
                <Route path="/About" component={About}/>
                <Route path="/Team" component={Team}/>
                <Route path="/Blog" component={Blog}/>
                <Route path="/contact" component={Contact}/>
    
            </div>
          </div>
        </HashRouter>
      );
    }
  }


export default Main;
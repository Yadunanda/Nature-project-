import React, {Component} from 'react';
import './App.css';
import {BrowserRouter,Switch, Link, Route} from 'react-router-dom'
import About from './Components/Header/About/About';
import Home from './Components/Home/Home'

let App=()=>{


  return(
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home}/>  
<Route path="/Aboutus" exact component={About}/>
<Route path="/Contact Us" />
<Route path="/Sponsors" />
</Switch>
    </BrowserRouter>

  )
}




export default App

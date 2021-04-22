import React from 'react'
import Classes from'./Header.module.css'
import About from './About/About'
import App from '../../App'
import {BrowserRouter,Switch, Link, Route} from 'react-router-dom'


let Header=(props)=>{



return(

  <div className={Classes.head}>
<nav className={Classes.Header}>
<h2><Link to='/'>Home</Link> </h2>
<h2><Link to="/Aboutus">About </Link></h2>
<h2><Link>Contact Us</Link></h2>
<h2><Link>Sponsors</Link></h2>
</nav>




</div>


)

}

export default Header

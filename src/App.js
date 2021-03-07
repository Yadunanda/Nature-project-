import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Image from './Components/Image/Image'
import Three from './Components/three/three'
import Motivational from './Components/motivational/motivational'


class App extends Component{



render(){



  return(
    <div className='xyz'>
    <Header/>
        <Image/>
          <Three/>
        <Motivational/>
              <Footer/>

    </div>

  )
}
}





export default App

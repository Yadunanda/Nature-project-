import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Image from '../Image/Image'
import Motivational from '../motivational/motivational'
import Three from '../three/three'
import Classes from './Home.module.css'
let Home=()=>{

    return(
        <div className={Classes.xyz}>
         <Header/>
        <Image/>
          <Three/>
        <Motivational/>
              <Footer/>


        </div>
    )
}

export default Home
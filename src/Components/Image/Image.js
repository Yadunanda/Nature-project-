import React from 'react'
import Classes from './Image.module.css'
import image from './one.jpg'
import imagetwo from './two.jpg'
import imagethree from './three.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';


let Image=(props) => {
  return(


      <Carousel>
                 <div className={Classes.outer}>
                   <img src={image}/>
                   <p className={Classes.h2}> Nature Lovers.inc</p>
                 </div>
                 <div>
                     <img src={imagetwo}/>
                     <p className={Classes.h2}>Nature Lovers.inc</p>
                 </div>
                 <div>
                     <img src={imagethree} />
                     <p className={Classes.h2}>Nature Lovers.inc</p>
                 </div>
             </Carousel>

  )
}
export default Image

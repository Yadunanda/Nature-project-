import React from 'react'
import Classes from './Footer.module.css'


let Footer=(props) => {

  return(
    <div className={Classes.outer}>
 <div className={Classes.we}>
 <h2>GitHub</h2>
<h2>FaceBook</h2>
<h2>Instagram</h2>
<h2>LinkedIN</h2>
<br></br>
  <br></br>
    <br></br>
      <h4 className={Classes.p}>Buit by Yadunanda </h4>

 </div>
 <div>
   <h2>Support</h2>
    <h2>Trouble Shooting</h2>
   <h2>Common Questions</h2>
   <h2>Report a bug</h2>
   <h2>Get help</h2>
 </div>
 <div>
   <h2>Terms and Policies</h2>
    <h2>Policies</h2>
   <h2>Terms of Use</h2>
   <h2>Code of Conduct</h2>
   <h2>Privacy</h2>
 </div>
 <div>
  <h2>Terms and Policies</h2>
   <h2>Policies</h2>
  <h2>Terms of Use</h2>
  <h2>Code of Conduct</h2>
  <h2>Privacy</h2>
  </div>

</div>
  )
}
export default Footer

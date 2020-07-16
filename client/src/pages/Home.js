import React from "react"; 
import "./home.css";  
import SignupForm from '../components/SignupForm'; 
import LoginForm from '../components/LoginForm';  
import ListenNoteContainer from '../components/ListenNoteContainer'

function Home() {   


// // for (i = 0; i < genres.length; i++) {
// //     render() { 
  return (   
<div>

<div className="columns sticky-footer-css-body text-center" style={{backgroundImage: "url('./images/BlownAway.jpg')",
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat', 
           WebkitBackgroundSize:'cover', 
           MozBackgroundSize:'cover', 
           OBackgroundSize:'cover', 
         }}>

<br/>
<ListenNoteContainer> </ListenNoteContainer>

 
 
<br/> 




<br/>



  </div> 

<div className="columns shrink sticky-footer text-center" style={{backgroundColor: 'black'}}> 
  <div className="grid-x"> 

     <div className="cell auto text-center">
         <SignupForm></SignupForm>
    </div> 

    <div className="cell auto">
      <img src='./images/ListenNotes-non-white-background.png' alt='ListenNotes' top='0' bottom='0'/>
    </div>

    <div className="cell auto">
         <LoginForm></LoginForm>
    </div>
  </div>
</div>  

</div> 
  ) 
}
export default Home;
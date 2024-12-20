import React from 'react'
import {Link} from "react-router-dom";
import "../css/home.css";
function Home() {
  return (
    <div className='hero'>
        <div className='bell'>
       <h1>Happy Holidays</h1>
       <img src="https://artprojectsforkids.org/wp-content/uploads/2023/12/How-to-Draw-a-Bell-web.jpg" alt="Bell Image" id='bell'/>
       </div>
       <div className='heroImgs'>
        <div className='divColumn'>
           <Link to="/thomas" ><img src="https://img.freepik.com/free-vector/hand-drawn-christmas-present-illustration_53876-56293.jpg?t=st=1734691393~exp=1734694993~hmac=533c0fad0c8898eaf050ff74bc384bbc8edb9d07a88253fd2f8744b6b9ea20cc&w=996" alt="img1" id="img1"/></Link>
           <p>Für Thomas</p>
           </div>
           <div className='divColumn'>
           <Link to="/michael" ><img src="https://img.freepik.com/free-vector/gift-box-glitter-illustration-hand-drawn_53876-95610.jpg?t=st=1734691420~exp=1734695020~hmac=4623504ec5a86f103781a2940469b0c73f8523b26fa226711495023566fb8cb3&w=996" alt="img2" id="img2"/></Link>
           <p>Für Michael</p>
           </div>
       </div>
    </div>
  )
}

export default Home
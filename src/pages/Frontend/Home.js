import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import pic from '../../images/web developer.webp';


export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/project'); 
  };
  const handleClickcontact = () => {
    navigate('/contact'); 
  };


  
  return (
    <>

    <div className="container-fluid  " >
      <div className="container home-page">
      <div className="row  ">
        <div className="col-md-6 text ">
          <h6> frontend web developer. </h6>
           <h1 className='name'>Hi I'm <span> Muhammad Zohaib</span> <br />From Pakistan.</h1>
           <ReactTyped className='typed' 
           strings={[
            "I bring ideas to web."
           ]}
           typeSpeed={70}
           deleteSpeed={80}
           loop
           />
          <p>I have a track record of delivering pixel-perfrct <br /> design on time and on budget.</p>

           <div className="btns">
           <button onClick={handleClickcontact}>Hire Me</button>
           <button onClick={handleClick} >View my Work</button>

           </div>
   
        </div>
        <div className="col-md-6 right">
          <img src={pic} alt="" />
        </div>
        </div>
       
      </div>
    </div>
    
      

    </>
  )
}

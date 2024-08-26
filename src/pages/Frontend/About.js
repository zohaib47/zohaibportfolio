import React from "react";
import Buttons from "../../components/frontend/Buttons";
import pic from '../../images/myimagees/image1-removebg2.png'

export default function About() {
  return (
    <>
    {/* <div className="About border"> */}
  
      <div className="container-fluid "   >
        <div className="container About">
         
      <div className="row">
        <div className="col-md-6 col-12  paragraph">
          <div className="write">
            <h1 className="about-tittle">so,  <span>who am i </span>?</h1>
            
            <p>
            "I am a passionate
              front-end developer with a strong expertise in JavaScript,
              React.js, and modern web technologies. I enjoy crafting dynamic,
              user-friendly web applications and have a keen eye for detail in
              design and functionality. My experience spans across building
              responsive interfaces, managing complex state with Redux, and
              integrating RESTful APIs for seamless user experiences."

            </p>
            </div>
            <div className="button">
            <Buttons className="success" text="contact me" />
          
        
        </div>
            </div>
        
        <div className="col-md-6 ">
          <div className="image ">
            <img className="myimage" src={pic} alt=""/>
          </div>
        </div>
        </div>
      </div>
      </div>
    {/* </div> */}
   
    </>
  );
}

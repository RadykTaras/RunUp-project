import React from "react";
import style from "./About.module.css";
import Sign from "./img/sign";


const About = () =>{
  return (
    <div className={style.contentSection}>
        <h6 className={style.mainTitle}>
          RunUp Company<br/><br/>
          First of all, we are a team. Team that aims to engage people in an autistic lifestyle, namely running. 
          Why run? Probably because everyone can do it, in any corner of the planet, with any wealth. 
          Each of us strives to make people enjoy running, motivated, and motivated. We have many projects that we are proud of. 
          By popularizing running, you popularize life.
          <br/>
          <span className={style.sign}>
          <Sign />
            Taras Radyk
          </span>
        </h6>
      
    </ div>
  )
}

export default About;
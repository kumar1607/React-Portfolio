import React from 'react'
import './about.css'
import ME from '../../assets/aboutfixfinal.png'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {LuFolderGit2} from 'react-icons/lu'

const About = () => {
  return (
    <section id='about'>
      <h5>About Me</h5>
      <h2>About Me</h2>
      
       <div className='container about_container'>
        <div className="about_me">
         <div className="about_me-image">
              <img src={ME} alt="About Image" />
         </div>
        </div>

       <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>0+ Years Working</small>
            </article>

            <article className='about_card'>
              <FaUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>Abhi tho koi nahi h</small>
            </article>

            <article className='about_card'>
              <LuFolderGit2 className='about_icon'/>
              <h5>Projects</h5>
              <small>4 completed</small>
            </article>
          </div>

          <p>
          Hey there! I'm Kumar Muravath , pursuing B.Tech in Chemical Engineering at IIT BHU.
          <br></br>
          <br></br>
           As a coding enthusiast, my passion lies in developing innovative and efficient solutions to complex problems. 
           I'm passionate about software development and I'm looking forward to getting to work on new projects in the near future.
           <br></br>
           <br></br>
           I am always eager to take on new challenges and explore new areas of coding, and I am excited to connect with like-minded individuals in the field.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
       </div>
      </section>
  )
}

export default About
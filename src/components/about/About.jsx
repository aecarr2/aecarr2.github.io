import "./about.scss"
import me from '../../assets/me.png'
import resume from '../../assets/pdf/AustinCarr.pdf'
import { Email, LinkedIn, GitHub, PictureAsPdf  } from "@mui/icons-material"

import { Link } from 'react-router-dom'

export default function About() {
  return (
        <div className="about">
          <div className="about-nav">
            <div className="nav-leftContainer">
              <div className="name-nav-item">
                <Link to="/">
                <h2>
                  Austin Carr
                </h2>
                </Link>
              </div>
              <div className="list-nav-items">
                <h5>
                  <span>
                  About
                  </span>
                </h5>
                <h5>
                <a href={resume} target="_blank" rel="noreferrer">
                  Resume
                </a>
                </h5>
              </div>
            </div>
            <div className="nav-rightContainer">
              <a href="mailto:aecarr2@asu.edu" target="_blank" rel="noreferrer"><Email className="icons"/></a>
              <a href="https://www.linkedin.com/in/austin-carr-a068a864/" target="_blank" rel="noreferrer"><LinkedIn className="icons"/></a> 
              <a href="https://github.com/aecarr2" target="_blank" rel="noreferrer"><GitHub className="icons"/></a>
              <a href={resume} target="_blank" rel="noreferrer"><PictureAsPdf className="icons"/></a>
            </div>
          </div>
            <div className="about-container">
              <div className="left">
                <h1>
                  About
                </h1>
                <p>
                  Welcome, and thank you for visiting my website! My name is Austin Carr and I built this site using <span class="reactjs">ReactJS</span>. 
                  I don't necessarily consider myself a developer, but I love technology and learning new things. 
                  Oh! And I love solving problems, so here is all of that in one neat package for you to see.
                  <br />
                  <br />
                  I am currently employed by <a href="https://microsoft.com" target="_blank" rel="noreferrer">Microsoft</a> as a <span className="job">Program Manager II</span> out of Dallas, TX. Before my current role, I worked as a 
                  Beta Engineer and Support Engineer on Microsoft's CRM product, Dynamics. 
                  I graduated from Arizona State University in December of 2015 with a Bachelor of Science degree in Computer Systems Engineering.
                  <br />
                  <br />
                  For more info on my experience and connecting with me, feel free to check out my&nbsp;
                  <a href={resume} target="_blank" rel="noreferrer">Resumé</a> or click on the icons above!
                </p>
              </div>
              <div className="right">
                <div className="imgContainer">
                  <img src= { me } alt="me"></img>
                </div>
                    </div>
                </div>
            </div>


  )
}

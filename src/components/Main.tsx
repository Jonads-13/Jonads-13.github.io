import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Button from '@mui/material/Button';
import '../assets/styles/Main.scss';
import ProfilePic from '../assets/images/cicular_profile_picture.png'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ProfilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Jonads-13" target="_blank" rel="noreferrer"><GitHubIcon/></a>

            <a href="https://www.linkedin.com/in/jacob-jonas-892095a8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>

            <a href="https://drive.google.com/file/d/12ft-zX34m9PWXGawcdRJ5WJHwdb1zy6n/view?usp=sharing" target="_blank" rel="noreferrer">
              <Button variant="contained" endIcon={<OpenInNew/>}>Resume</Button>
            </a>
          </div>
          <h1>Jacob Jonas</h1>
          <p>Graduate Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/jonads-13" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jacob-jonas-892095a8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPage from "@mui/icons-material/ContactPage";
import Tooltip from "@mui/material/Tooltip";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
      <Tooltip title='GitHub' placement="top">
              <a href="https://github.com/Jonads-13" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            </Tooltip>

            <Tooltip title="LinkedIn" placement="top">
              <a href="https://www.linkedin.com/in/jacob-jonas-892095a8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </Tooltip>

            <Tooltip title="Resume" placement="top">
              <a href="https://drive.google.com/file/d/12ft-zX34m9PWXGawcdRJ5WJHwdb1zy6n/view?usp=sharing" target="_blank" rel="noreferrer"><ContactPage/></a>
            </Tooltip>
      </div>
      <p>A portfolio adapted from <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">react-portfolio-template</a></p>
    </footer>
  );
}

export default Footer;
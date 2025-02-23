import React from "react";
import pochi from '../assets/images/projects/pochi.png';
import pochiGif from '../assets/images/projects/pochi.gif'
import dockers from '../assets/images/projects/dockers.png';
import dockersGif from '../assets/images/projects/dockers.gif'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Curtin Collaboration Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <div className="zoom">
                    <img src={dockers} alt="Dockers VR Experience" className="static" width="100%"/>
                    <img src={dockersGif} alt='dockers gif' width="100%"/>
                </div>
                <h2>Dale Kickett's Mark on AFL</h2>
                <p>Part of a team that designed & developed a VR experience for Fremantle Dockers player Dale Kickett. Its goal was to support a motion graphic in telling his story in a non-linear fashion with futuristic interaction and immersiveness.</p>
            </div>
            <div className="project">
                <div className="zoom">
                    <img src={pochi} alt="Pochi Pochi" className="static" width="100%"/>
                    <img src={pochiGif} alt='pochi gif' width="100%"/>
                </div>
                <h2>Pochi Pochi</h2>
                <p>Part of a team that developed a 3D action-adventure game which was co-designed with children. Aims at helping create a safe digital relationship and making children curious about the world around them.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;
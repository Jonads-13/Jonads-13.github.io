import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faWindows } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const labelsWebDev = [
    "ASP.NET",
    "React",
    "Flask",
    "PostgreSQL",
    "MySQL",
    "Swagger"
];

const labelsGameDev = [
    "Unreal Engine 5"
];

const labelsWindows = [
    "WinForms",
    "WPF",
    "PostgreSQL"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Experience</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faWindows} size="3x"/>
                        <h3>Windows Application Development</h3>
                        <p>I have updated internal desktop applications to be more in line with company requirements and developed an application to help digitise company processes</p>
                        <div className="flex-chips">
                            <span className="chip-title">Relevant Skills:</span>
                            {labelsWindows.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Full Stack Web Development</h3>
                        <p>I have managed the frontend, backend and databases of internal company websites as well as API documentation.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Relevant Skills:</span>
                            {labelsWebDev.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGamepad} size="3x"/>
                        <h3>Video Game Development</h3>
                        <p>I have been part of a team that has produced an immersive, non-linear VR experience and a mobile action/adventure game for children to help them be curious about the world around them</p>
                        <div className="flex-chips">
                            <span className="chip-title">Relevant Skills:</span>
                            {labelsGameDev.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
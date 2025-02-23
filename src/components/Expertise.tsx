import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const labelsWebDev = [
    "ASP.NET",
    "C#",
    "React",
    "JavaScript",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Postman",
    "Swagger"
];

const labelsGameDev = [
    "Unreal",
    "Blueprints",
    "Unity"
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Experience</h1>
                <div className="skills-grid">
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
                        <p>I have been part of a team that has produced an immersiv, non-linear VR experience and a mobile action/adventure game for children to help them be curious about the world around them</p>
                        <div className="flex-chips">
                            <span className="chip-title">Relevant Skills:</span>
                            {labelsGameDev.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x"/>
                        <h3>GenAI & LLM</h3>
                        <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Relevant Skills:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Expertise;
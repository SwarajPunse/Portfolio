import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub"
import "../styles/Home.css"

export function Home(){
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Swaraj Punse</h2>
                <div className="prompt">
                    <p> A Software Developer with a passion for learning and creating</p>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GitHubIcon />
                </div>
            </div>
            <div className="skills">
                <h1>    Skills </h1>
                <ol className="list">
                    <li className="item">
                      <h2>Front-End</h2>
                      <span>
                      ReactJS, Redux, HTML, CSS, NPM, BootStrap,MaterialUI  
                      </span>  
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            Java Spring, Java SpringBoot, MySQL, MongoDB, NodeJS, ExpressJS, .NET 
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span> Java, JavaScript, Python, C#, C, C++ </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}
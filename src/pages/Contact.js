import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../App.css';
import React, { useState } from 'react';

function Contact() {

    const [colorHover1, setColor1] = useState(false);
    const [colorHover2, setColor2] = useState(false);
    const [colorHover3, setColor3] = useState(false);
    const [colorHover4, setColor4] = useState(false);

    return(
        <div className="icon-container">
            <div className='icon-card' onMouseEnter={() => setColor1(true)} onMouseLeave={() => setColor1(false)}>
                <a href='https://www.linkedin.com/in/victor-amigo/' alt='linkedin' target="_blank" rel="noopener noreferrer" ><LinkedInIcon id='icon' style={colorHover1 ? {color: '#4d648d'} : null} /></a>
                <p><b className='contact-link'><a href='https://www.linkedin.com/in/victor-amigo/' alt='linkedin' target="_blank" rel="noopener noreferrer" style={colorHover1 ? {color: '#4d648d'} : null}>Add me on LinkedIn</a></b></p>
            </div>
            <div className='icon-card' onMouseEnter={() => setColor2(true)} onMouseLeave={() => setColor2(false)}>
                <a href='https://docs.google.com/document/d/1xSpu2-Yjjej3vPwnBxZx5C_mP9ReNsC2CTJoY0y3ss4/edit?usp=sharing' alt='resume' target="_blank" rel="noopener noreferrer"><AssignmentIndIcon id='icon' style={colorHover2 ? {color: '#4d648d'} : null} /></a>
                <p><b className='contact-link'><a href='https://docs.google.com/document/d/1xSpu2-Yjjej3vPwnBxZx5C_mP9ReNsC2CTJoY0y3ss4/edit?usp=sharing' alt='resume' target="_blank" rel="noopener noreferrer" style={colorHover2 ? {color: '#4d648d'} : null}>Take a look at my resume</a></b></p>
            </div>
            <div className='icon-card' onMouseEnter={() => setColor3(true)} onMouseLeave={() => setColor3(false)}>
                <a href='https://github.com/vamigoya97' alt='github' target="_blank" rel="noopener noreferrer"><GitHubIcon id='icon' style={colorHover3 ? {color: '#4d648d'} : null}/></a>
                <p><b className='contact-link'><a href='https://github.com/vamigoya97' alt='github' target="_blank" rel="noopener noreferrer" style={colorHover3 ? {color: '#4d648d'} : null}>Scroll through my Github page</a></b></p>
            </div>
            <div className='icon-card' onMouseEnter={() => setColor4(true)} onMouseLeave={() => setColor4(false)}>
                <a href='mailto:amigo.victor.97@gmail.com?subject=Contact' alt='email' target="_blank" rel="noopener noreferrer"><EmailIcon id='icon' style={colorHover4 ? {color: '#4d648d'} : null}/></a>
                <p><b className='contact-link'><a href='mailto:amigo.victor.97@gmail.com?subject=Contact' alt='email' target="_blank" rel="noopener noreferrer" style={colorHover4 ? {color: '#4d648d'} : null}>Send me an email</a></b></p>
            </div>
        </div>
    )
}

export default Contact;
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
    return(
        <div className="icon-container">
            <div className='icon-card'>
                <a href='https://www.linkedin.com/in/victor-amigo/' alt='linkedin' target="_blank" rel="noopener noreferrer"><LinkedInIcon id='icon'/></a>
                <p><b>Add me on LinkedIn</b></p>
            </div>
            <div className='icon-card'>
                <a href='https://docs.google.com/document/d/1xSpu2-Yjjej3vPwnBxZx5C_mP9ReNsC2CTJoY0y3ss4/edit?usp=sharing' alt='resume' target="_blank" rel="noopener noreferrer"><AssignmentIndIcon id='icon' /></a>
                <p><b>Take a look at my resume</b></p>
            </div>
            <div className='icon-card'>
                <a href='https://github.com/vamigoya97' alt='github' target="_blank" rel="noopener noreferrer"><GitHubIcon id='icon'/></a>
                <p><b>Scroll through my Github page</b></p>
            </div>
            <div className='icon-card'>
                <a href='mailto:amigo.victor.97@gmail.com?subject=Contact' alt='email' target="_blank" rel="noopener noreferrer"><EmailIcon id='icon' /></a>
                <p><b>Send me an email</b></p>
            </div>
        </div>
    )
}

export default Contact;
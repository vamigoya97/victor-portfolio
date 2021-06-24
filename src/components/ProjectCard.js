import '../App.css'
import React from 'react';
import { useEffect, useState} from 'react';
// import { Img } from 'react-image'
import GitHubIcon from '@material-ui/icons/GitHub';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';


function ProjectCard(props) {

    const [cardState, setCard] = useState(true);
    const [colorState1, setColor1] = useState(false);
    const [colorState2, setColor2] = useState(false);
    // const childRef = useRef(null);
    // const [childHeight, setHeight] = useState(0);

    const flipCards = () => {
        setCard(current => !current);
    }

    useEffect(() => { }, [cardState]);

    const addDates = dates => {
        var months = [ "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December" ];
        var arr = dates.split('-');
        var index = parseInt(arr[1], 10) - 1;

        return <section>{months[index]}, {arr[0]}</section>
    }

    const [imgState, setState] = useState(false);

    return (
        <div className='project-container' style={imgState ? {} : {display: 'none'}}>
            {/* {console.log(props.datestarted)} */}
            <div onClick={() => flipCards()} className={cardState ? 'card' : 'card is-flipped'}>
                <div className="project-card card__face--front">
                    <div id="arrowAnim">
                        {/* <div class="arrowSliding"> */}
                        <div className="arrow"></div>
                        {/* </div> */}
                    </div>
                    <div className='card-front-style' onMouseEnter={() => setColor1(true)} onMouseLeave={() => setColor1(false)} style={colorState1 ? {backgroundColor: '#4d648d'} : null}>
                        <h3>{props.title}</h3>
                        {addDates(props.datestarted)}
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className='project-card card__face--back'>
                    <div id='info-element'>
                        <p><b>Technologies used:</b><br/>
                        {props.techstack}</p>
                        <div onMouseEnter={() => setColor2(true)} onMouseLeave={() => setColor2(false)}>
                            {props.giturl === 'none' ? null : <a href={props.giturl} target="_blank" rel="noopener noreferrer"><GitHubIcon id='git-icon' style={colorState2 ? {color: '#283655'} : null}/></a>}
                            {props.workprogress ? <p><AssignmentLateIcon style={{fontSize: '16px'}}/><br/>WORK IN PROGRESS</p> : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className='img-card'>
                <img src={props.staticimg} alt={props.title} className="static" /><img src={props.medialink} alt={props.title} className='active' onLoad={() => setState(true)}/>
            </div>
        </div>
    )
}

export default ProjectCard;
import '../App.css'
import portrait from '../media/self-img.jpeg'
import { useState } from 'react'

function About() {

    const [imgState, setState] = useState(false);

    return (
        <div className='about-container' style={imgState ? {} : {display: 'none'}}>
            <div className='about-img-card'>
                <img onLoad={() => setState(true)} className='about-img' src={portrait} alt='self-img'/>
            </div>
            <div className='about-info-card'>
                <p style={{fontSize: '18px'}}><b>Software Engineer with a concentration in Front End Web Development and a Bachelor’s degree in Civil Engineering</b></p>
                <p>As an engineer of different practices, I’ve been part of fast paced environments were curiosity for learning and embracing change are key qualities for success. Civil engineering taught me to constantly refer back to theoretical principles and design codes as compliance for a robust end product is imperative. In contrast, software engineering allowed me to navigate through infinite resources and create without major restrictions. This combination of practices alongside ingenuity and perseverance have allowed me to succeed both academically and professionally thus far.</p>
            </div>
        </div>
    )
}

export default About;
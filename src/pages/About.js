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
                <p>Software Engineer with a concentration in Front End Web Development and a Bachelor’s degree in Civil Engineering. <br/>As an engineer of different practices, I’m constantly curious about what’s new and changing, as well as eager to embrace such change. Civil engineering taught me to always refer back to the handbook and constantly make design checks in order to comply with building codes and regulations as well as achieve a robust end product. On the other hand, software engineering gave me the opportunity to design and create without major limitations and utilize the infinite resources available to developers with just a steady wifi connection. This combination of practices alongside perseverance, ingenuity and creativity have allowed me to succeed both academically and professionally thus far.</p>
            </div>
        </div>
    )
}

export default About;
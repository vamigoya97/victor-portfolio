import flatiron from '../media/Flatiron_Certificate.jpg'
import nd from '../media/nd-diploma.jpg'
import harvard from '../media/harvard-certificate.jpg'
import '../App.css'
import { useState } from 'react'

function Academic() {

    const [imgState, setState] = useState(false);

    return (
        <div className='certificate-container' style={imgState ? {} : {display: 'none'}}>
            <div className='certificate-card'>
                <div className='certificate-img'>
                    <img onLoad={() => setState(true)} src={nd}  alt='nd'/>
                </div>
                <div className="certificate-info">
                    <h3>Bachelor of Science in Civil Engineering</h3>
                    <section>University of Notre Dame</section>
                    <p>08/20/2016 - 05/10/2020</p>
                </div>
            </div>
            <div className='certificate-card'>
                <div className='certificate-img'>
                    <img src={flatiron}  alt='flatiron'/>
                </div>
                <div className="certificate-info">
                    <h3>Full Stack Web Development Coding Bootcamp</h3>
                    <section>Flatiron School</section>
                    <p>08/15/2020 - 11/15/2020</p>
                </div>
            </div>
            <div className='certificate-card'>
                <div className='certificate-img'>
                    <img src={harvard}  alt='harvard'/>
                </div>
                <div className="certificate-info">
                    <h3>Front End Web Development Graduate <br/>Certificate Program</h3>
                    <section>Harvard Extension School</section>
                    <p>01/25/2021 - 05/17/2021</p>
                </div>
            </div>
        </div>
        
    )
}

export default Academic;
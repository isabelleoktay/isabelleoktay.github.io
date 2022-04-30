import React from 'react';
import "../style.css";
import { Link } from 'react-router-dom';

const Their = (props) => {
    return (
        <div className='flex h-screen justify-center items-center hero-container'>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div className='text-left font-mono z-20 glow font-link cursor-default'>
            
                <p className='glitch'>life was&nbsp;&nbsp;&nbsp;<span className='text-cyan-400'>Earth</span>'s</p>
                <p className='glitch'>
                    <Link to='/master'>
                        <span className='hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-white hover:uppercase'>master</span>
                    </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;goodness</p>
                <p className='glitch'>famine</p>
                <p className='glitch mb-20'>they&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;devised</p>
                <p className='glitch'>the&nbsp;&nbsp;&nbsp;problem of</p>
                <p className='glitch'>survival</p>
                <p className='glitch'>felt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kinship</p>
                <p className='glitch mb-20'>in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;caves</p>
                <p className='glitch'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/defenseless'>
                        <span className='hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-white hover:uppercase'>defensless</span>
                    </Link>
                </p>

            </div>
            
        </div>
    )
}

export default Their;
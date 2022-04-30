import React from 'react';
import "../style.css";
import { Link } from 'react-router-dom'

const Shepherd = (props) => {
    return (
        <div className='flex h-screen justify-center items-center hero-container'> 
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div className='text-center font-mono z-20 glow font-link cursor-default'>

                <p className='glitch'>agony</p>
                <p className='glitch text-3xl'>called out</p>
                <p className='glitch text-2xl'>to craft scattered</p>
                <p className='glitch mb-10 text-xl'>soil grim with blessed ooze</p>
                <p className='glitch mb-10 text-lg'>of death</p>
                <p className='glitch text-xl'>jet black pus surging from</p>
                <p className='glitch text-2xl'>foam grew golden horns</p>
                <p className='glitch text-3xl'>summon dreams of</p>
                <p className='mb-10 glitch'>vengeance</p>
                <p className='mb-24 glitch text-2xl'>narcotic honey</p>
                <p className='mb-32 glitch text-xl'>bosom war</p>
                <p className='mb-40 glitch text-base'>the din of <span className='text-cyan-400'>Earth</span></p>
                <p className='glitch text-xs'>his mother</p>
            </div>
            
        </div>
    )
}

export default Shepherd;
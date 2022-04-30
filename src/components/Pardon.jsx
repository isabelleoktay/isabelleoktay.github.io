import React from 'react';
import "../style.css";

const Pardon = (props) => {
    return (
        <div className='flex h-screen justify-center items-center hero-container'>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div className='text-center font-mono z-20 glow font-link cursor-default'>
            
                <p className='glitch'>TOUCH</p>
                <p className='glitch'>THE</p>
                <p className='glitch'>LAND</p>

            </div>
            
        </div>
    )
}

export default Pardon;
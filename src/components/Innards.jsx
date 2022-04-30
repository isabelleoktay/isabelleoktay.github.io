import React from 'react';
import "../style.css";

const Innards = (props) => {
    return (
        <div className='flex h-screen justify-center items-center hero-container'>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div className='text-center font-mono z-20 glow font-link cursor-default'>
            
                <p className='glitch'><span className='text-sm'>flower</span> <span className='text-lg'>from</span> <span className='text-2xl'>the</span> <span className='text-white'>foam</span></p>

            </div>
            
        </div>
    )
}

export default Innards;
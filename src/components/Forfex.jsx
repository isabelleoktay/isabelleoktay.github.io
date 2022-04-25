import React from 'react';
import "../style.css";

const Forfex = (props) => {
    return (
        <div className='flex h-screen justify-center items-center hero-container'>
            <div className='text-center font-mono z-20 glow font-link'>

                <p className='glitch'><span className='text-sm'>hope</span> for</p>
                <p className='glitch'><span className='text-cyan-400'>Earth</span> becalmed</p>
                <p className='mb-20 glitch'>time <span className='text-sm'>embodied</span></p>
                <p className='hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-white hover:uppercase glitch'>possibility</p>
                <p className='mt-20 glitch'>stillness twisted</p>
                <p className='glitch'>knots <span className='text-sm'>into</span></p>
                <p className='glitch'><span className='text-sm'>the</span> <span className='text-emerald-400 hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-white hover:uppercase'>yarn</span></p>

            </div>
            
        </div>
    )
}

export default Forfex;

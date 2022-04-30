import React from 'react';
import "../style.css";
import { Link } from 'react-router-dom'

const Forfex = (props) => {
    return (
        <div className='flex h-screen justify-center items-center hero-container bg-black'>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div className='text-center font-mono z-20 glow font-link cursor-default'>
                <p className='glitch'><span className='text-sm'>hope</span> for</p>
                <p className='glitch'><span className='text-cyan-400'>Earth</span> becalmed</p>
                <p className='mb-20 glitch'>time <span className='text-sm'>embodied</span></p>
                <Link to='/possibility'>
                    <p className='hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-white hover:uppercase glitch'>possibility</p>
                </Link>    
                <p className='mt-20 glitch'>stillness twisted</p>
                <p className='glitch'>knots <span className='text-sm'>into</span></p>
                <p className='glitch'><span className='text-sm'>the</span>
                <span className='text-emerald-400'>yarn</span>
                </p>
            </div>
            
        </div>
    )
}

export default Forfex;

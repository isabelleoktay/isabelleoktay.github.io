import React from 'react';
import "../style.css";

const Master = (props) => {
    return (
        <div className='flex h-screen justify-center items-center hero-container'>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div className='text-center font-mono z-20 glow font-link'>

                <p className='glitch'>save them</p>
                <p className='glitch'>from outside&nbsp;&nbsp;&nbsp;&nbsp;<span className='hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-white hover:uppercase'>shield</span> them</p>
                <p className='glitch mb-20'>from <span className='text-cyan-400'>Earth</span></p>
                <p className='glitch text-3xl'>in danger</p>
                <p className='glitch text-3xl'>of exhausting&nbsp;&nbsp;&nbsp;&nbsp;supply roots</p>
                <p className='glitch mb-20 text-3xl'>blood flesh</p>
                <p className='glitch text-2xl'>the boon</p>
                <p className='glitch text-2xl'>of clay naked and</p>
                <p className='mb-20 glitch text-2xl'>forgot</p>
                <p className='mb-32 glitch text-xl'>they were given nothing</p>
                <p className='glitch text-sm'>but <span className='text-cyan-400'>Earth</span></p>

                
            </div>
            
        </div>
    )
}

export default Master;
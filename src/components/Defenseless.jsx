import React from 'react';
import "../style.css";

const Defenseless = (props) => {
    return (
        <div className='flex h-screen justify-center items-center hero-container'>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div className='text-left font-mono z-20 glow font-link cursor-default'>
            
                <p className='glitch'>faint&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-sm'>echoes behind</span></p>
                <p className='glitch'>many&nbsp;&nbsp;heads below</p>
                <p className='glitch mb-20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mist</p>
                <p className='glitch text-sm'>stretched</p>
                <p className='glitch'>between&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-lg'>wielder</span></p>
                <p className='glitch mb-20'>and <span className='text-cyan-400'>Earth</span></p>
                <p className='glitch mb-20 text-sm text-white'>uncertain</p>
                <p className='glitch'>temper gushes</p>
                <p className='glitch mb-20'>from <span className='text-sm'>solid</span></p>
                <p className='glitch'><span className='text-sm'>whisper</span> has</p>
                <p className='glitch'>beheld the</p>
                <p className='glitch mb-20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-lg text-white'>mirthless</span></p>

            </div>
            
        </div>
    )
}

export default Defenseless;
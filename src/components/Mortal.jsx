import React from 'react';
import "../style.css";
import { Link } from 'react-router-dom'

const Mortal = (props) => {
    return (
        <div className='flex h-screen justify-center items-center hero-container'>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div className='text-left font-mono z-20 glow font-link cursor-default'>
            
                <p className='glitch text-base'>solemn</p>
                <p className='glitch text-base'>oath resounded&nbsp;&nbsp;face</p>
                <p className='glitch mb-20 text-base'>to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;face</p>
                <p className='glitch'>succession&nbsp;&nbsp;blistered</p>
                <p className='glitch'>the&nbsp;&nbsp;&nbsp;water logged</p>
                <p className='glitch mb-20 text-cyan-400'>Earth</p>
                <p className='glitch text-base'>to remain</p>
                <p className='glitch text-base'>under the will&nbsp;&nbsp;castigate</p>
                <p className='glitch mb-20 text-base'>the thread</p>
                <p className='glitch'>no one can&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-base'>escape</span></p>
                <p className='glitch'>the&nbsp;
                    <Link to='/pardon'>
                        <span className='hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-white hover:uppercase'>pardon</span>
                    </Link>&nbsp;&nbsp;of
                </p>
                <p className='glitch mb-20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/punishment'>
                        <span className='text-base hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-white hover:uppercase'>punishment</span>
                    </Link>
                </p>

            </div>
            
        </div>
    )
}

export default Mortal;





import React from 'react';
import "../style.css";
import { Link } from 'react-router-dom'

const Consumate = (props) => {
    return (
        <div className='flex h-screen justify-center items-center hero-container'>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div className='text-center font-link z-20 glow font-link cursor-default'>
            
                <p className='glitch text-xs'>the blazing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dawn sails</p>
                <p className='glitch text-sm'>golden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;each</p>
                <p className='glitch text-base'>night</p>
                <p className='glitch text-lg'>turned&nbsp;&nbsp;&nbsp;&nbsp;trees</p>
                <p className='glitch text-xl'>from tears&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of amber there</p>
                <p className='glitch text-3xl text-white'>emerged&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;
                    <Link to='/shepherd'>
                        <span className='hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-white hover:uppercase'>shepherd</span>
                    </Link>
                </p>
                <p className='glitch text-xl'>pale</p>
                <p className='glitch text-lg'>deep&nbsp;&nbsp;&nbsp;&nbsp;rooted</p>
                <p className='glitch text-base'>in the soil&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;he took the</p>
                <p className='glitch text-sm'>sickle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to her</p>
                <Link to='/innards'>
                    <p className='glitch text-xs hover:font-extrabold hover:text-lg hover:cursor-pointer hover:text-white hover:uppercase text-cyan-400'>innards</p>
                </Link>

            </div>
            
        </div>
    )
}

export default Consumate;
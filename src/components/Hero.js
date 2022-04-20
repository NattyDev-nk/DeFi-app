import React from 'react'
import './Hero.css'
import Crypto from '../assets/bitcoin.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            {/*----- Left Slide*/}
            <div className='left'>
                <p>Buy & Sell Cryto 24/7 Using Your Retirement Account</p>
                <h1>Invest in Crytocurrency with Your IRA</h1>
                <p>Buy, Sell and store hundreds of cryptocurrencies</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email' />
                    <button className='btn'>Learn More</button>
                </div>
            </div>

            {/*----------Right slide------ */}
            <div className='right'>
                <div className='img-container'>
                    <img src={Crypto} alt='' />
                </div>
            </div>

        </div>


        
    </div>
  )
}

export default Hero
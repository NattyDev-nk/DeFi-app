import React from 'react'
import './Signup.css'
import Bitcoin from '../assets/trade.png'

const SignUp = () => {
  return (
    <div>
        <div className='signup'>
            <div className='container'>

                {/*------left----------*/}
                <div className='left'>
                    <img src={Bitcoin} alt='' />
                </div>


                {/*------left----------*/}
                <div className='right'>
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. simply hold your assets in the app to automatically
                        earn rewards at the end of each month with no lockups and no limits.
                    </p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Earn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
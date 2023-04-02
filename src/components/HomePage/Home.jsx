import React from 'react';
import './Home.css'
import logo from './books.png'
import qa from './qa.png'
import download from './download.png'
import time from './time.png'
import multiple from './geometry.png'
import {Link} from 'react-router-dom'

function Home() {
    
    return (
        <div className="contain">
            <div className="navbar_home">
                <div> <img src={logo} alt="" /><p>Q-Download</p></div>
                <div></div>
                <div></div>
                <div><Link to='/download' className='linkto'>Download</Link></div>
                <div><Link to='/admin' className='linkto'>SignIn</Link></div>
            </div>
            <div className="bodycontent">
                <div className="overview">
                    <p>A superfast way to download Q-Papers</p>
                    <img src={qa} alt="" />
                </div>
                <div className="details">
                    <div className="card">
                        <img src={download} alt="" />
                        <p>Quick Download</p>
                    </div>
                    <div className="card">
                    <img src={time} alt="" />
                        <p>Time Saving</p>
                    </div>
                    <div className="card">
                    <img src={multiple} alt="" />
                        <p>Multiple Options</p>
                    </div>
                </div>
            </div>
            <div className="footercontent">
                <p>Made with ❤️</p>
            </div>
        </div>    
    )
        
        
}

export default Home;
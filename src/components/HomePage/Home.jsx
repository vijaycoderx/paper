import React from 'react';
import './Home.css'
import logo from './books.png'
import qa from './qface.png'
import download from './download.png'
import time from './write.png'
import multiple from './drawing.png'
import {Link} from 'react-router-dom'

function Home() {
    
    return (
        <div className="contain">
            <div className="navbar_home">
                <div> <img src={logo} alt="" /><p>Q-Download</p></div>
                <div></div>
                <div></div>
                <div><Link to='/download' className='linkto'>Download</Link></div>
                <div><Link to='/admin' className='linkto'>Admin</Link></div>
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
                        <p>Huge Question Bank</p>
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
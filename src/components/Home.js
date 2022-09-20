import React from 'react'
import profilePicture from "../images/profilePicture.jpg";
import './Home.css'

const Home = () => {
    return (
        <div className='home' id='home'>
            <div className='container'>
                <div className='col-1'>
                    <img src={profilePicture} alt="Michael Barcoe" />
                </div>
                <div className="col-2">
                    <p>Hi. I'm Michael</p>
                    <p>A Software Engineer</p>
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import './businessHomePage.css'
import arrow from './images/arrow.png'
import image1 from './images/image-1.png'
import image2 from './images/image-2.png'
import image3 from './images/image-3.png'
import logo from './images/logo.png'
import menu from './images/menu.png'
import playButton from './images/play-button.png'
import video from './images/video.mp4'



function BusinessHomePage() {
  return (
    <div>

<div class="container">
        <nav>
        <img src={logo} clas="logo" alt='' />
        <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">clients</a></li>
            <li><a href="/" class="white">Services</a></li>
            <li><a href="/" class="white">contact</a></li>

        </ul>
        <img src={menu} class="menu" alt='' />
        </nav>
        <div class="left-col">
            <h1>Helping<br /> Your Business</h1>
            <div class="team">
                <div class="user-col">
                    <img src={image1} alt='' />
                    <div class="info">
                        <h4>ANTONY</h4>
                        <p>TECH</p>
                    </div>
                    <img src={arrow} class="arrow-icon" alt='' />
                </div>
                <div class="user-col">
                    <img src={image2} alt='' />
                    <div class="info">
                        <h4>JOSEPH</h4>
                        <p>HR</p>
                    </div>
                    <img src={arrow} class="arrow-icon" alt='' />
                </div>
                <div class="user-col">
                    <img src={image3} alt='' />
                    <div class="info">
                        <h4>JORDON</h4>
                        <p>DEV</p>
                    </div>
                    <img src={arrow} class="arrow-icon" alt='' />
                </div>
            </div>


        </div>
        <div class="right-col">
            <video autoplay loop muted class="back-video">
                <source src={video} type="video/mp4" />
            </video> 
             <img src={playButton} alt="ply-btn" class="play-icon"  />
            <h3>We are the Leading Marketing<br />Agency in the World</h3>
        </div>


    </div>

    </div>
  )
}

export default BusinessHomePage;

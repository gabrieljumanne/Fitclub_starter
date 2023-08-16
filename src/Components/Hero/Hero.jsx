import React from 'react';
import Header from '../Header/Header';
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";


const Hero = () => {
    //This is known as function expression ..
  return (
    <div className="hero">
        <div className="blur hero_blur"></div>
        <div className="left_h">
           <Header/> 

{/*The best ad-of fitness club */}
           <div className="the_best_ad">
            <div></div>
            <span>the best fitness club in the town </span>
           </div>

{/*Hero ---Heading.. */}
            <div className="hero_text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div >
                    <span>
                        In here we wll help you to shape and build your ideal body and live up your life fullest
                    </span>
                </div>
            </div>


{/*Figures  */}
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness program</span>
                </div>
            </div>

{/*Hero button */}
            <div className="hero_button">
                <button className="btn">Get Started </button>
                <button className="btn">Learn More</button>
            </div>
            
         </div>


{/*This is the right hand-side of project .. */}
        <div className="right_h">
            <button className='btn'>Join Now</button>

            <div className="heart_rate">
                <img src={Heart} alt=""/>
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

        {/*Hero images */}
        <img src={hero_image} alt="" className='hero_image'/>
        <img src={hero_image_back} alt="" className='hero_image_back'/>

        {/*Calories box */}
            <div className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories burned</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero 

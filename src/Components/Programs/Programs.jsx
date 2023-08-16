import React from 'react'
import "./Programs.css"  
import {programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"

const Programs = ()=> {
  return (
    <div className="Programs" id="programs">
        {/*Header of this section  */}
        <div className="programs_header">
            <span className='stroke-text'>Explore Our </span>
            <span>Programs </span>
            <span className='stroke-text'>to shape you </span>
        </div>
        
        <div className="programs_categories">
            {programsData.map((program)=>{
                return (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join_now">
                        <span>Join Now</span>
                        <img src={RightArrow}/>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Programs
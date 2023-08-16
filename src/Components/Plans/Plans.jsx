import React from 'react'
import "./Plans.css"
import whiteTick from "../../assets/whiteTick.png"
import {plansData} from "../../data/plansData"



const Plans = () => {
  return (
   <div className="plans-container">
    <div className="blur plans_b_1"></div>
    <div className="blur plans_b_2"></div>
    <div className="plans-header">
        <span className='stroke-text'>READY TO START </span>
        <span style={{color:"white"}}>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
    </div>

    {/* plans card */}
    <div className="plans">

      {plansData.map((plan, i)=>{
        return (
          <div className="plan" key = {i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i)=>{
                return(
                  <div className="feature">
                    
                    <img src={whiteTick} alt=''/>
                    <span key={i}>{feature}</span>
                    
                  </div>
                )
              })}
            </div>

            <div>
              <span>See more benefits -> </span>
            </div>
              <button className='btn'>Join now</button>

          </div>
        )
      })}

    </div>
   </div>
  )
}

export default Plans
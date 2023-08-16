import React, {useRef} from 'react';
import "./join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();//this prevents the page loading
    
        emailjs.sendForm('service_l308psi', 'template_kiqjp2p', form.current, 'PM8Tl3yTTHSgEezcq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    



  return (
   <div className="Join" id="join-us">
    <div className="join_l">
        <hr/>
        <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US?</span>
        </div>
    </div>



    <div className="join_r">
        <form ref={form} className="email_container" onSubmit={sendEmail}>
            <input type="email"  name='user_email' placeholder='Enter your email address..'/>
            <button className='btn btn_j'>Join now</button>
        </form>

    
    </div>
   </div>
  )
}

export default Join
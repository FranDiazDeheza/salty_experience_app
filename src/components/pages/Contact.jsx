
import React, { Component } from 'react';
import "../pages/contact.css";
import emailjs from '@emailjs/browser';



const Contact = () => {

  const sendEmail = (event) => {
    event.preventDefault();

   emailjs.sendForm('service_4l8ns1r','template_yajk0gp',event.target,'ZNwx6_JiDSvNVxvy1')
   .then(response => console.log(response))
    .catch(error => console.log(error))



  }
  return (
    

    <div className="contact">
    <p>Contact Us</p>
    <div>
    <form className="form-mail" onSubmit={sendEmail}>  
    <label>First Name</label>
    <input type="text" id="fname" name="user_firstname" placeholder="Your name.." />
    <label>Last Name</label>
    <input type="text" id="lname" name="user_lastname" placeholder="Your last name.." />


    <label>Email</label>
    <input type="email" id="email" name="user_email" placeholder="Your email" />


    <label>Subject</label>
    <textarea id="subject" name="message" placeholder="Write something.."></textarea>
    <input type="submit" value="Submit" />
    </form>
    </div>
   


    <div id="locaid">
    <iframe style={{width: '100%', height: '400px'}} src="https://maps.google.com/maps?q=1680%20Michigan%20Avenue&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
    </div> 
  
  )
}

export default Contact
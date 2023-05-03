import "./index.css"


import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

 
  };

  return (
    <div>
      <div className="first">
        <h1>Please contact</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      
      <input name="dname" placeholder="Your Name" type="text" />
      <label>Email</label>
      <input name="demail" placeholder="Your Email" type="text"/>
      <label>Message</label>
      <textarea name="dsubmit" type="submit" value="Send"/>
      <input name="dsubmit" type="submit" value="Send"/>
    </form>
   
    </div>
    <div className="skillCon">
    <h1 className="Resume-description-title">Skills</h1>

<ul className="Resume-skills-list">
  <li>Python</li>
  <li>JavaScript</li>
  <li>React.Js</li>
  <li>Node.Js</li>
  <li>Express.Js</li>
  <li>SQLite</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>Flexbox</li>
  <li>Bootstrap</li>
  <li>GitHub</li>
</ul>


   </div>
    </div>
  );
};

export default Email
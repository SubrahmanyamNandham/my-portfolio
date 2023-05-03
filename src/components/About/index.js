import "./index.css"

const About =()=>{
    return(
        <div className="about">
           <div>
          <img alt="img"  className="image" src="https://res.cloudinary.com/dvco5xnoe/image/upload/v1682964585/WhatsApp_Image_2023-04-08_at_18.05.27_gmqtt4.jpg"/>
           </div>

            <h1 className="hey">Hey There I'Am BalaSubrahmanyam</h1>
            <p className="role" >Full Stack Developer</p>
          
            <div class="left"></div>
            <a
  className="text"
 
  href="https://docs.google.com/document/d/1xGFMUSfLsGW-NUrmylxKdffGAhCQy-oq/edit"
  target={"_blank"}
  rel="noopener noreferrer"
>
            <button type="button">Download Resume</button>

            </a>
           
  <div class="right"></div>

        </div>
    )
}

export default About
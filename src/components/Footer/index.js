import { HiMail } from "react-icons/hi";
import { BsLinkedin} from "react-icons/bs";


import { VscGithub } from "react-icons/vsc";
import './index.css'

const Footer = () => (
  <footer class="footer-distributed">

<div class="footer-left">

  <h3>Bala<span>Subrahmanyam</span></h3>

 
  <p class="footer-company-name">Full stack Developer</p>
</div>

<div class="footer-center">

  <div>
    <i className="fa fa-map-marker"></i>
    <p><span>Kakinada , East Godavari</span> Andhra Pradesh,India</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+91-8919290366</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">kumarnandham111@gmail.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About Me</span>
    Passionate software developer adept in developing frontend/backend applications using technologies such as Java, Python, JavaScript, React, SQL,Node.Js,Mongodb, HTML, and CSS. Proven track record in successful 
development of projects with brilliant interpersonal and communication skills. Adept in project 
management and teamwork with a knack for creative problem-solving.
  </p>

 
  <div className='foot'>
  
              <div className="icon-con">
                <a
                  href="https://www.linkedin.com/in/balasubrahmanyam-nandham-859968155/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="social-icon" />
                </a>
              </div>

              <div className="icon-con">
                <a
                  href="https://github.com/SubrahmanyamNandham"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <VscGithub className="social-icon" />
                </a>
              </div>

         

              <div className="icon-con">
                <a
                  href="#email.com"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <HiMail className="social-icon" />
                </a>
              
            </div>
   
    </div>

</div>

</footer>
  
)
export default Footer


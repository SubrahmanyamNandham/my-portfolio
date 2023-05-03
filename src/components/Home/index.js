import Navbar from "../Navbar"
import Footer from "../Footer"
import "./index.css"
import About from "../About"
import Projects from "../Projects"


const Home =()=>{
    return(
     <div className="container">
     <Navbar/>
      
     
     <About/>
     <Projects/>

    <Footer/>
     
   </div>
    
    )

}

export default Home
import ProjectSlider from "../ProjectSlider"
import "./index.css"

const Projects=()=>{
    return(
<div className="home-bottom-card">
          <div className="movies-container">
            <h1 className="movie-type-heading">My Projects</h1>
            <div className="slick-container">
            <ProjectSlider/>
            </div>
          </div>
     
          </div>
    )
}

export default Projects
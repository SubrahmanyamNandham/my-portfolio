import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'




const moviesList=[
    {
        id:1,
        posterPath:"https://res.cloudinary.com/dvco5xnoe/image/upload/v1674235624/Home_page_with_top_rated_mimqfq.png",
      
        title:"moviesApp"

    },
    {
        id:2,
        posterPath:"https://res.cloudinary.com/dvco5xnoe/image/upload/v1683033142/Screenshot_2023-05-02_183049_btrtrx.png",
       
        title:"jobbyApp"

    },
    {
        id:3,
        posterPath:"https://res.cloudinary.com/dvco5xnoe/image/upload/v1683033151/Screenshot_2023-05-02_183202_eqrp4y.png",
     
        title:"nxtApp"

    },
    {
        id:4,
        posterPath:"https://res.cloudinary.com/dvco5xnoe/image/upload/v1683033160/Screenshot_2023-05-02_183400_vty3dc.png",
   
        title:"gameApp"

    },
    {
        id:5,
        posterPath:"https://res.cloudinary.com/dvco5xnoe/image/upload/v1683033521/Screenshot_2023-05-02_184810_nr4prl.png",
       
        title:"foodApp"

    },
]

const ProjectSlider = () => {


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='slider'>
    <Slider {...settings}>
      {moviesList.map(each => {
        const {posterPath,  title,id} = each
        return (
          <div className="slick-item" key={id}>
          

              <img src={posterPath} alt={title} className="movie-image" />
           
          </div>
        )
      })}
    </Slider>
    </div>
  )
}

export default ProjectSlider
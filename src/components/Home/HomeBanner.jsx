import React, { useState } from 'react'
import Banner1 from "../../assets/img/banner1.jpg";
import Banner2 from "../../assets/img/banner2.jpg";
import Banner3 from "../../assets/img/banner3.jpg";
import Slider from "react-slick"

const HomeBanner = () => {
     const [autoplay, setAutoplay] = useState(true);
  
  var settings = {
    dots: true,
    arrows: false,
    // centerMode: true,
    // centerPadding: "20px",
    slidesToShow: 1,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: 5000,
    swipeToSlide:true,
  };



  return (
   <>
   {/* home-banner-start */}
        <div className="home-banner">
          <Slider {...settings}>
            <div>
              <a href='/wedding'> <img src={Banner1}/></a>
            </div>
            <div>
              <a href='/new-arrivals'> <img src={Banner2}/></a>
            </div>
            <div>
              <a href=''><img src={Banner3}/></a>
            </div>
            
          </Slider>
        </div> 
        {/* home-banner-end */}
   </>
  )
}

export default HomeBanner
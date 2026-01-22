import React, { useState } from 'react'
import NewsImg1 from "../../assets/img/news1.jpeg";
import NewsImg2 from "../../assets/img/news2.jpeg";
import NewsImg3 from "../../assets/img/news3.jpeg";
import NewsImg4 from "../../assets/img/news4.jpeg";
import NewsImg5 from "../../assets/img/news5.jpeg";
import NewsImg6 from "../../assets/img/news6.jpg";
import NewsImg7 from "../../assets/img/news1.jpeg";
import NewsImg8 from "../../assets/img/news2.jpeg";
import Slider from 'react-slick';

const MediaBuzz = () => {
    const[autoplay,setAutoplay]=useState(true);

    const NewsChannel=[
        {
            socialImg:NewsImg1,
        },
        {
            socialImg:NewsImg2,
        },
        {
            socialImg:NewsImg3,
        },
        {
            socialImg:NewsImg4,
        },
        {
            socialImg:NewsImg5,
        },
        {
            socialImg:NewsImg6,
        },
        {
            socialImg:NewsImg7,
        },
         {
            socialImg:NewsImg8,
        },
    ]

     var settings = {
    dots: true,
    arrows: true,
    slidesToShow: 6,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: 4000,
  }

  return (
    <>
    <div className='social-media container'>
        <Slider {...settings}>
            {
                NewsChannel.map((item,index)=>(
                  <div className="socialchannel">
                  <img src={item.socialImg}/>
                    </div>
                ))
            }
        
        </Slider>
    </div>
    </>
  )
}

export default MediaBuzz
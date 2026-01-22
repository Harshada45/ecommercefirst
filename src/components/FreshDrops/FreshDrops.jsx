import React,{useState} from 'react'
import Slider from "react-slick"
import TrendingCloths from '../Trending/TrendingCloths';
import FreshImg1 from "../../assets/img/fresh1.webp";
import FreshImg2 from "../../assets/img/fresh2.webp";
import FreshImg3 from "../../assets/img/slide1.webp";
import FreshImg4 from "../../assets/img/slide2.webp";
import FreshImg5 from "../../assets/img/img1.webp";
import FreshImg6 from "../../assets/img/img2.webp";
import FreshImg7 from "../../assets/img/beauty1.webp";
import FreshImg8 from "../../assets/img/beauty2.webp";

const FreshDrops = () => {
 const [autoplay, setAutoplay] = useState(true);

 const FreshDropImg=[
  {
    img1:FreshImg1,
    img2:FreshImg2,
    title:"Green Satin Blazer",
    price:"1022",
  },
    {
    img1:FreshImg3,
    img2:FreshImg4,
    title:"Green Satin Blazer",
     price:"1022",
  },
    {
    img1:FreshImg5,
    img2:FreshImg6,
    title:"Green Satin Blazer",
     price:"1022",
  },
    {
    img1:FreshImg7,
    img2:FreshImg8,
    title:"Green Satin Blazer",
     price:"1022",
  },
  {
    img1:FreshImg1,
    img2:FreshImg2,
    title:"Green Satin Blazer",
    price:"1022",
  },
 ]
  
  var settings = {
    dots: true,
    arrows: true,
    slidesToShow: 4,
    infinite: true,
    // autoplay: autoplay,
    autoplaySpeed: 4000,
  }

  return (
    <>
     <div className='fresh-drops container'>
        <h1 className='text-center p-5'>Fresh Drops</h1>

        <div className='fresh-choice'>
            <Slider {...settings}>
              {FreshDropImg.map((item,index)=>(
                 <div className='main'>
                    <img src={item.img1} className='main-img'/>
                    <img src={item.img2} className='hover-img'/>

                    <div className='content'>
                   <p>{item.title}</p>
                   <span>{item.price}</span>
               </div>
            </div>
              ))}
            
            
          </Slider>
        </div>
        <div className='more-btn text-center mb-3 mt-3'>
          <button>See More</button>
        </div>
        {/* <TrendingCloths/> */}
     </div>
    </>
  )
}

export default FreshDrops
import React,{useState} from "react";
import festive1 from "../../assets/img/festive1.png";
import festive2 from "../../assets/img/festive2.png";
import festive3 from "../../assets/img/festive3.png";
import festive4 from "../../assets/img/festive4.png";
import mini1 from "../../assets/img/mini1.webp";
import mini2 from "../../assets/img/mini2.webp";
import mini3 from "../../assets/img/mini3.webp";
import mini4 from "../../assets/img/mini4.webp";
import mini5 from "../../assets/img/mini5.webp";
import mini6 from "../../assets/img/mini6.webp";
import mini7 from "../../assets/img/mini7.webp";
import mini8 from "../../assets/img/mini8.webp";
import mini9 from "../../assets/img/mini9.webp";
import mini10 from "../../assets/img/mini10.webp";
import mini11 from "../../assets/img/mini11.webp";
import mini12 from "../../assets/img/mini12.webp";
import Slider from "react-slick";

const TrendingCloths = () => {

   const [autoplay, setAutoplay] = useState(true);
  
  const fashionimg = [
    {
      title: "Festive Fits",
      img: festive1,
      mini1: mini1,
      mini2: mini2,
      mini3: mini3,
      subtitle1: "Kurta Set",
      subtitle2: "Kurtis",
      subtitle3: "Dress",

    },

    {
      title: "Cozy Comfies",
      img: festive2,
      mini1: mini4,
      mini2: mini5,
      mini3: mini6,
      subtitle1: "Kaftan",
      subtitle2: "Short Set",
      subtitle3: "Pajama Set",
    },

    {
      title: "Work Mode",
      img: festive3,
      mini1: mini7,
      mini2: mini8,
      mini3: mini9,
      subtitle1: "Tops",
      subtitle2: "Dresses",
      subtitle3: "co ords",
    },

    {
      title: "Glam Edits",
      img: festive4,
      mini1: mini10,
      mini2: mini11,
      mini3: mini12,
      subtitle1: "Bottoms",
      subtitle2: "Dresses",
      subtitle3: "Tops",
    },
    {
      title: "Festive Fits",
      img: festive1,
      mini1: mini1,
      mini2: mini2,
      mini3: mini3,
      subtitle1: "Kurta Set",
      subtitle2: "Kurtis",
      subtitle3: "Dress",

    },
  ];

   var settings = {
      dots: true,
      arrows: true,
      // centerMode: true,
      // centerPadding: "20px",
      slidesToShow: 4,
      infinite: true,
      autoplay: autoplay,
      autoplaySpeed: 4000,
      swipeToSlide:true,
    };
  return (
    <>
      <div className="fashion-trend container">
        <Slider {...settings}>
        {fashionimg.map((item, index) => (
          <div className="trendes" key={index}>
            <div className="trend-name">
              <h5 className="text-center">{item.title}</h5>
            </div>
            <div className="trend-box">
              <div className="trend-img">
                <img src={item.img} className="main-img" />
              </div>
              <div className="trend-option d-flex">
                <div className="mini-img d-block">
                  <div className="circle-img">
                    <img src={item.mini1} />
                    
                  </div>
                  <div><p>{item.subtitle1}</p></div>
                </div>
                <div className="mini-img d-block">
                  <div className="circle-img">
                    <img src={item.mini2} />
                    
                  </div>
                  <div><p>{item.subtitle2}</p></div>
                </div>
                <div className="mini-img d-block">
                  <div className="circle-img">
                    <img src={item.mini3} />
                    
                  </div>
                  <div><p>{item.subtitle3}</p></div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </>
  );
};

export default TrendingCloths;

import React from "react";
import Trends1 from "../../assets/img/trend1.webp";
import Trends2 from "../../assets/img/trend2.png";
import Trends3 from "../../assets/img/trend3.webp";
import Trends4 from "../../assets/img/trend4.webp";
import { CiHeart } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import Slider from "react-slick";

const TrendNow = () => {
  const TrendCloth = [
    {
      trendimg1: Trends1,
      title: "Blue Corset Dress",
      price: "1500",
      badge: "Top 1",
    },
    {
      trendimg1: Trends2,
      title: "Black Short Dress",
      price: "1500",
      badge: "Top 2",
    },
    {
      trendimg1: Trends3,
      title: "Blue Checked Dress",
      price: "1500",
      badge: "Top 3",
    },
    {
      trendimg1: Trends4,
      title: "White Sheer Dress",
      price: "1500",
      badge: "Top 4",
    },
    {
      trendimg1: Trends1,
      title: "Blue Corset Dress",
      price: "1500",
      badge: "Top 1",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="trends-part container">
        <div className="trend-heading text-center mb-3">Trending Now</div>
        <div className="trending-stocks ">
          <Slider {...settings}>
            {TrendCloth.map((item, index) => (
              <div key={index} className="cloth-types">
                <div className="dress-img">
                  <img src={item.trendimg1} alt={item.title} />
                  <span className="badge">{item.badge}</span>
                  <span className="whishlist">
                    <CiHeart />
                  </span>
                </div>

                <div className="contents">
                  <p className="name">{item.title}</p>
                  <p className="price">
                    <MdCurrencyRupee />
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TrendNow;

import React, { useRef, useState ,useContext} from "react";
import { GrStar } from "react-icons/gr";
import Slider from "react-slick";
import Home from "../Home/Home";
import {  useNavigate, useParams } from "react-router";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { toast } from "react-toastify";
import wedddescImg1 from "../../assets/img/weddescimg1.webp";
import wedddescImg2 from "../../assets/img/weddescimg2.webp";
import wedddescImg4 from "../../assets/img/weddescimg4.webp";
import WeddingImg1 from "../../assets/img/weddingimg1.webp";
import WeddingImg2 from "../../assets/img/weddingimg2.webp";
import WeddingImg3 from "../../assets/img/weddingimg3.webp";
import WeddingImg4 from "../../assets/img/weddingimg4.webp";
import Kurta1 from "../../assets/img/FloralPrintKurtaSet/kurta1.webp";
import Kurta2 from "../../assets/img/FloralPrintKurtaSet/kurta2.webp";
import Kurta3 from "../../assets/img/FloralPrintKurtaSet/kurta3.webp";
import Kurta4 from "../../assets/img/FloralPrintKurtaSet/kurta4.webp";
import { CartContext } from "../Context/CartContext";


import { CiHeart } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";

const ProductDetails = () => {
  const sliderRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("xs");
  const sizes = ["xs", "s", "m", "l"];
  const { id } = useParams();
  const navigate = useNavigate();
  const { setCartCount } = useContext(CartContext);

  /* ✅ PRODUCT MAIN IMAGES (ID BASED) */
  const productData = [
    {
      id: 1,
      img: WeddingImg1,
      title: "Kurta Set, ALL & Co ords",
      subtitle: "Pink Floral Printed Kurta With Flared Pants",
      price: "₹2479",
      rate: "4.2 Out of 5",
      deliviry: "7-9 Day Delivery",
      color: "Dark Pink",
    },
    {
      id: 2,
      img: WeddingImg2,
      title: "Lehengas & ALL",
      subtitle: "Yellow Floral Printed Lehenga With Dupatta",
      price: "₹3499",
      rate: "4.2 Out of 5",
      deliviry: "7-9 Day Delivery",
      color: "Mustard Yellow",
    },
    {
      id: 3,
      img: WeddingImg3,
       title: "Sharara Set & ALL",
      subtitle: "Pink Sharara Set With Dupatta",
      price: "₹2479",
      rate: "4.2 Out of 5",
      deliviry: "7-9 Day Delivery",
      color: "Dark Pink",
    },
    {
      id: 4,
      img: WeddingImg4,
      title: "Kaftan, ALL & Dresses",
      subtitle: "Green Floral Printed Kaftan Dress With Blouse",
      price: "₹2499",
      rate: "4.2 Out of 5",
      deliviry: "7-9 Day Delivery",
      color: "Light Green",
    },
  ];

  /* ✅ DESCRIPTION / GALLERY IMAGES */
  const productimg = [
    {
      id: 1,
      imgs: [Kurta1, Kurta2, Kurta3, Kurta4],
    },
    {
      id: 2,
      imgs: [wedddescImg1, wedddescImg2, wedddescImg1, wedddescImg2],
    },
    {
      id: 3,
      imgs: [wedddescImg1, wedddescImg4, wedddescImg1, wedddescImg2],
    },
    {
      id: 4,
      imgs: [wedddescImg1, wedddescImg4, wedddescImg1, wedddescImg2],
    },
  ];

  /* ✅ MATCH PRODUCT BY URL ID */
  const matchedProduct = productData.find((item) => item.id === Number(id));
  
  if (!matchedProduct) {
    return (
      <div className="wedding-product-details">
        <Home />
        <p className="text-center mt-5">Product not found</p>
      </div>
    );
  }

  let matchedImages =
    productimg.find((item) => item.id === Number(id));
    if(matchedImages){
      matchedImages = matchedImages.imgs;
    }
  
    
  /* ✅ COMBINE MAIN IMAGE + GALLERY IMAGES */

  const sliderImages = [
    matchedProduct.img, // ID matched image first
    ...matchedImages,
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  /* ✅ SLIDER SETTINGS */
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    beforeChange: (_, next) => setSelectedIndex(next),
  };

const handleProduct=()=>{
  navigate('/cart');
}

const addToCart = () => {
  let storedIds = JSON.parse(localStorage.getItem("cartIds")) || [];

  if (!storedIds.includes(matchedProduct.id)) {
    storedIds.push(matchedProduct.id);
    localStorage.setItem("cartIds", JSON.stringify(storedIds));
    setCartCount(storedIds.length);

  toast.success("Item added successfully");
  }else{
    toast.error("product already in cart");
  }

  
  
};

return (
    <div className="wedding-product-details">
      <Home />

      <div className="container">
        <div className="product-desc">
          <div className="left-img">
            {/* 🔹 MAIN SLIDER */}
            <Slider {...settings} ref={sliderRef}>
              {sliderImages.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`product-${index}`}
                    className="img-fluid"
                  />
                </div>
              ))}
            </Slider>

            {/* 🔹 THUMBNAILS */}
            <div className="product-options">
              {matchedImages.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    // alt={`thumb-${index}`}
                    className={selectedIndex === index ? "active-thumb" : ""}
                    onClick={() => {
                      sliderRef.current.slickGoTo(index );
                      setSelectedIndex(index);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="right-info">
        
              <div className="item-details">
                <p>{matchedProduct.title}</p>
                <div className="prod-cate">
                  <div>{matchedProduct.subtitle}</div>
                  <div>
                    {" "}
                    <CiHeart />
                  </div>
                </div>
                <p>{matchedProduct.price}</p>
                <p>
                  <GrStar /> {matchedProduct.rate}
                </p>
                <p>
                  <FaShippingFast />
                 {matchedProduct.deliviry}
                </p>
                <hr></hr>
                <div className="prod-color-card mb-2">
                  <div>color:{matchedProduct.color}</div>
                  <div>
                    <div
                      className={`down-arrow ${isOpen ? "rotate-up" : ""}`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <TfiArrowCircleDown className="arrow-icon" />
                    </div>
                  </div>
                </div>
                {isOpen && (
                  <div className={`color-btn ${isOpen ? "open" : "closed"}`}>
                    <div className="dress-color">
                      <div className="add-dress-img">
                        <img src={matchedProduct.img} />
                      </div>
                      <div className="color-name">Dark Pink</div>
                    </div>
                  </div>
                )}

                <hr></hr>

                <div className="size-options">
                  <div className="what-size">
                    <div className="update-size">Top : {selectedSize}</div>
                    <div className="what-size">
                      <a>What is my size?</a>
                    </div>
                  </div>

                  <div className="choose-size">
                    {sizes.map((size, index) => (
                      <div
                        className={`size ${
                          selectedSize === size ? "active" : ""
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                  <hr></hr>
                  <div className="product-list-cards d-flex">
                    <div className="product-details p-2" onClick={addToCart}>Add to cart</div>
                    <div className="add-to-bag p-2" onClick={handleProduct}>Buy Now</div>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

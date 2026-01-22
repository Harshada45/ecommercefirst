import React, { useState,useContext } from "react";
import WeddingImg1 from "../../assets/img/weddingimg1.webp";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { toast } from "react-toastify";
import { CartContext } from "../Context/CartContext";

const AddToBagPopup = ({  product, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sizes = ["xs", "s", "m", "l"];
  const [selectedSize, setSelectedSize] = useState("xs");
  const [selectedbottomsize, setSelectedBottomSize] = useState("l");
  const { setCartCount } = useContext(CartContext);

  const productdetails = [
    {
      productImg1: WeddingImg1,
    },
  ];
  

const addtoBag = () => {
  if (!product) return;

  let storedIds = JSON.parse(localStorage.getItem("cartIds")) || [];

  if (!storedIds.includes(product.id)) {
    storedIds.push(product.id);
    localStorage.setItem("cartIds", JSON.stringify(storedIds));
  }

  setCartCount(storedIds.length);

  toast.success("Item added successfully");
  onClose();
};


  return (
    <div className="add-to-bag-content container">
      {productdetails.map((item, index) => (
        <div className="inner-content" key={index}>
          <div className="left-content">
            <img src={item.productImg1} />
          </div>
          <div className="right-content">
            <p>All Kurta Set,Co ords</p>
            <p>Pink Floral Printed Kurta With Flared Pants</p>
            <p>₹2479(57% OFF)</p>
            <hr />
            <div className="color-options">
              <div>
                {" "}
                <p>color : Dark Pink</p>
              </div>
              <div
                className={`down-arrow ${isOpen ? "rotate-up" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <TfiArrowCircleDown className="arrow-icon" />
              </div>
            </div>
            {isOpen && (
              <div className={`color-btn ${isOpen ? "open" : "closed"}`}>
                <div className="dress-color">
                  <div className="add-dress-img">
                    <img src={item.productImg1} />
                  </div>
                  <div className="color-name">Dark Pink</div>
                </div>
              </div>
            )}
            <hr></hr>

            {/* top-size */}
            <div className="size-options">
              <div className="what-size">
                <div className="update-size">Top : {selectedSize}</div>
                <div className="what-size">
                  <a>What is my size?</a>
                </div>
              </div>

              <div className="choose-size">
                {sizes.map((size) => (
                  <div
                    key={size}
                    className={`size ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            {/* top-size-end */}

            {/* bottom-size-start */}
            <div className="bottom-size-options mt-3">
              <div className="what-size">
                <div className="update-size">Bottom : {selectedbottomsize}</div>
              </div>

              <div className="choose-size">
                {sizes.map((itemsize, index) => (
                  <div
                    className={`size ${
                      selectedbottomsize === itemsize ? "active" : ""
                    }`}
                    onClick={() => setSelectedBottomSize(itemsize)}
                  >
                    {itemsize}
                  </div>
                ))}
              </div>
            </div>
            {/* bottom-size-end */}

            <hr></hr>
            <div
              className="cart-btn"
              onClick={addtoBag}
            >
              Add To Bag
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddToBagPopup;

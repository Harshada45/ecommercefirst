import React, { useState } from "react";
import Home from "../Home/Home";
import WeddingImg1 from "../../assets/img/weddingimg1.webp";
import WeddingImg2 from "../../assets/img/weddingimg2.webp";
import WeddingImg3 from "../../assets/img/weddingimg3.webp";
import WeddingImg4 from "../../assets/img/weddingimg4.webp";
import { CiHeart } from "react-icons/ci";
import AddToBagPopup from "../Popup/AddToBagPopup";
import Modal from "../Popup/Modal";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Wedding = ({onClose}) => {
  const [showBag, setShowBag] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const weddingdress = [
    {
      id: 1,
      img1: WeddingImg1,
      title: "Floral-Print Kurta Set",
      price: "₹2479",
    },
    {
      id: 2,
      img1: WeddingImg2,
      title: "Floral-Print Kurta Set",
      price: "₹2479",
    },
    {
      id: 3,
      img1: WeddingImg3,
      title: "Floral-Print Kurta Set",
      price: "₹2479",
    },
    {
      id: 4,
      img1: WeddingImg4,
      title: "Floral-Print Kurta Set",
      price: "₹2479",
    },
  ];

  // Open modal with selected product
  const handleAddToBag = (item) => {
    setSelectedProduct(item);
    setShowBag(true);
     
  };

  // Navigate to product details page
  const productdetails = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <>
      <div className="wedding-container">
        <Home />

        <div className="wedding-collection">
          <div className="wedding-title">Wedding</div>

          <div className="container collection-filters d-flex">
            <div className="filters">Filters</div>

            <div className="sort-by">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Select Option
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item">Recommended</button>
                  </li>
                  <li>
                    <button className="dropdown-item">What's New</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Best Seller</button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      Discount High To Low
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      Discount Low To High
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">Price High To Low</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="wedding-shopping container">
            {weddingdress.map((item) => (
              <div className="sellar" key={item.id}>
                <div>
                  <img
                    src={item.img1}
                    alt={item.title}
                    onClick={() => productdetails(item.id)}
                    style={{ cursor: "pointer" }}
                  />

                  <div className="contents">
                    <p className="mt-1">{item.title}</p>
                    <p>{item.price}</p>
                  </div>
                </div>

                <div className="product-list-cards d-flex">
                  <div className="product-details">
                    <CiHeart />
                  </div>

                  <div
                    className="add-to-bag"
                    onClick={() => handleAddToBag(item)}
                  >
                    Add To Bag
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL */}
        {showBag && (
          <Modal onCloseModal={() => setShowBag(false)} modalHeader>
            <AddToBagPopup
              product={selectedProduct}
             onClose={() => setShowBag(false)}
              
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Wedding;

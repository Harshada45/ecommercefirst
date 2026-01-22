import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Home from "../Home/Home";
import { toast } from "react-toastify";
import WeddingImg1 from "../../assets/img/weddingimg1.webp";
import WeddingImg2 from "../../assets/img/weddingimg2.webp";
import WeddingImg3 from "../../assets/img/weddingimg3.webp";
import WeddingImg4 from "../../assets/img/weddingimg4.webp";

import { FaHeartCirclePlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "../Popup/Modal";
import ConfirmPopup from "../Popup/ConfirmPopup";

import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const sizes = ["xs", "s", "m", "l"];
  const { setCartCount } = useContext(CartContext);
  const [openSizeId, setOpenSizeId] = useState(null); // which item dropdown is open
  const [selectedSizes, setSelectedSizes] = useState({}); // { productId: size }
  const [count, setCount] = useState({});

  //  Product master list
  const cartproducts = [
    {
      id: 1,
      img: WeddingImg1,
      title: "Green Floral Printed Kaftan Dress With Blouse",
      price: "₹2299 ₹5594 (59% OFF)",
      color: "Color: Light Green",
    },
    {
      id: 2,
      img: WeddingImg2,
      title: "Blue Floral Printed Kaftan Dress With Blouse",
      price: "₹1999 ₹4999 (60% OFF)",
      color: "Color: Blue",
    },
    {
      id: 3,
      img: WeddingImg3,
      title: "Pink Floral Printed Kaftan Dress With Blouse",
      price: "₹2499 ₹5999 (58% OFF)",
      color: "Color: Pink",
    },
    {
      id: 4,
      img: WeddingImg4,
      title: "Yellow Floral Printed Kaftan Dress With Blouse",
      price: "₹1899 ₹4599 (59% OFF)",
      color: "Color: Yellow",
    },
  ];

  const [cartItems, setCartItems] = useState([]);

 useEffect(() => {
  const storedIds = JSON.parse(localStorage.getItem("cartIds")) || [];
  const items = cartproducts.filter(item =>
    storedIds.includes(item.id)
  );

  setCartItems(items);

  const initialCount = {};
  items.forEach(item => {
    initialCount[item.id] = 1;
  });
  setCount(initialCount);

  setCartCount(storedIds.length);
}, []);



  useEffect(() => {
  setCount(prev => {
    if (Object.keys(prev).length > 0) return prev;

    const initialCount = {};
    cartItems.forEach(item => {
      initialCount[item.id] = 1;
    });
    return initialCount;
  });
}, [cartItems]);



  const handleDelete = (id) => {
    // 1️ Get stored IDs
    let storedIds = JSON.parse(localStorage.getItem("cartIds")) || [];

    // 2️ Remove selected ID
    const updatedIds = storedIds.filter(
      (itemId) => itemId !== Number(deleteId)
    );

    // 3️ Save updated IDs
    localStorage.setItem("cartIds", JSON.stringify(updatedIds));

    // 4️ Update cart UI
    const updatedCartItems = cartproducts.filter((item) =>
      updatedIds.includes(item.id)
    );

    setCartItems(updatedCartItems);
    setCartCount(updatedIds.length);
    setOpen(false);
    setDeleteId(null);
    toast.error("Item removed from cart");
  };

  const handleSizeToggle = (id) => {
    setOpenSizeId((prev) => (prev === id ? null : id));
  };

  const handleSizeSelect = (id, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [id]: size,
    }));
    setOpenSizeId(null);
  };

  const handleCountChange = (id, value) => {
     console.log("Before:", count);

    setCount((prev) => {
      const current = prev[id] || 1;
      const newCount = current + value;
     console.log("after:", id,value);

    
      if (newCount < 1) return prev;
 
      return {
        ...prev,
        [id]: newCount,
       
      };
    });
  };

  return (
    <>
      <Home />

      {cartItems.length === 0 ? (
        <div className="container text-center">
          <h4 >Cart is empty</h4>
        </div>
      ) : (
        <div className="product-cart container">
          {/* LEFT CART */}
          <div className="left-cart-wrapper">
            {cartItems.map((item) => (
              <div className="left-cart" key={item.id}>
                <div className="like-product">
                  <div className="cart-img">
                    <img src={item.img} alt={item.title} />
                  </div>

                  <div className="prod-info">
                    <div className="prod-add">
                      <div className="prod-title">{item.title}</div>

                      <div className="prod-icons">
                        <FaHeartCirclePlus />
                        <RiDeleteBin6Line
                          onClick={() => {
                            setDeleteId(item.id);
                            setOpen(true);
                          }}
                        />
                      </div>
                    </div>

                    <p className="price">{item.price}</p>
                    <p className="color">{item.color}</p>

                    <div className="sizeqty">
                      <div>
                        <p>size</p>
                        <div className="size-choose">
                          <div className="size">
                            {selectedSizes[item.id] || "M"}
                          </div>
                          <div
                            className={`down-arrow ${
                              openSizeId === item.id ? "rotate-up" : ""
                            }`}
                            onClick={() => handleSizeToggle(item.id)}
                          >
                            <TfiArrowCircleDown className="arrow-icon" />
                          </div>
                        </div>

                        {openSizeId === item.id && (
                          <div className="select-size">
                            {sizes.map((size) => (
                              <p
                                key={size}
                                className={
                                  selectedSizes[item.id] === size
                                    ? "active"
                                    : ""
                                }
                                onClick={() => handleSizeSelect(item.id, size)}
                              >
                                {size.toUpperCase()}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="quanty">
                        <p>Qty</p>
                        <div className="manage-count d-flex">
                          <div
                            className={`decrease ${
                              count[item.id] > 1 ? "active-qty" : ""
                            }`}
                            onClick={() => handleCountChange(item.id, -1)}
                          >
                            -
                          </div>
                          <div className="number">{count[item.id] || 1}</div>
                          <div
                            className="increase"
                            onClick={() => handleCountChange(item.id, +1)}
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CART */}
          <div className="right-cart">
            <h4>Price Details</h4>
            <p>Total Items: {cartItems.length}</p>
          </div>

          {open && (
            <Modal onCloseModal={() => setOpen(false)} modalHeader>
              <ConfirmPopup
                onConfirm={handleDelete}
                onClose={() => setOpen(false)}
              />
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;

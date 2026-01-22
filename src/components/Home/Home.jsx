import React,{useState,useContext} from "react";
import Search from "../Search/Search";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import Banner1 from "../../assets/img/banner1.jpg";
import Banner2 from "../../assets/img/banner2.jpg";
import Banner3 from "../../assets/img/banner3.jpg";
import { useNavigate } from "react-router";
import { CartContext } from "../Context/CartContext";
import ProfilePopup from "../Popup/ProfilePopup";
import Modal from "../Popup/Modal";

const Home = () => {
  const [autoplay, setAutoplay] = useState(true);
  const navigate=useNavigate();
  const { cartCount } = useContext(CartContext);
  const [profileOpen,setprofileOpen]=useState(false);
  
  var settings = {
    dots: true,
    arrows: false,
    // centerMode: true,
    // centerPadding: "20px",
    slidesToShow: 1,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: 4000,
    swipeToSlide:true,
  };

  const homebanner=[
    {
      img:Banner1,
    },
    {
      img:Banner2,
    },
    {
      img:Banner3,
    },
  ]

  const handleChooseGift=()=>{
    navigate('/cart');
  }

  const handleProfile=()=>{
    setprofileOpen(true);
  }

  return (
    <>
      <div className="homepage">
        <div className="coupon">USE COUPON FIRSTBUY200 TO GET 200 OFF</div>
        <Search />

        {/* navbar-start */}

        <nav class="navbar navbar-expand-sm ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="\src\assets\logo.svg" alt="logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/new-arrivals">
                    New Arrivals
                  </a>
                </li>
                 <li class="nav-item">
                  <a class="nav-link" href="/sale">
                    Sale
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Link
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another link
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        A third link
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Boss Lady
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Link
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another link
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        A third link
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/influencers">
                    Styled By
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/gift">
                    Gift
                  </a>
                </li>
              </ul>
            </div>
            <div className="right-menu">
              <div>
                <CiHeart  />
                
              </div>
              <div className="product-count">
                <HiOutlineShoppingBag onClick={handleChooseGift}/>
                <div className="count">{cartCount}</div>
               
              </div>
              <div>
                <CgProfile onClick={handleProfile}/>
              </div>
            </div>
          </div>
        </nav>
        {/* navbar-end */}

         {profileOpen && (
          <Modal onCloseModal={() => setprofileOpen(false)} modalHeader>
            <ProfilePopup
              // product={selectedProduct}
             onClose={() => setprofileOpen(false)}
              
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Home;

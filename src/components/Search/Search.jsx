import React, { useState,useRef,useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import WeddingImg1 from "../../assets/img/weddingimg1.webp";


const Search = () => {
  const [isopen,setIsOpen]=useState(false);
  const searchRef = useRef(null);

  const handleSearch=()=>{
    setIsOpen(true)
  }

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false); // close popup
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  return (
    <>
      <div className="search-data" ref={searchRef}>
        <form action="/search">
          <input
            type="search"
            id="search-input"
            name="query"
            placeholder="Search..."
            className="form-control"
            onClick={handleSearch}
          />
         <div className="search-btn">
             <CiSearch />
         </div>

         
        </form>
        {isopen &&  <div className="search-products">
           <div className="your-choice">
            <div className="title">Trendings</div>
            <p>All Formals</p>
             <p>All Formals</p>
              <p>All Formals</p>
           </div>
           <div className="recently-view d-flex">
            <div className="outfit">
               <div className="outfit-veiw"><img src={WeddingImg1}/></div>
               <div className="outfit-details">
                <p>Gray solid pajama</p>
                <p>rs.1999</p>
               </div>
            </div>

             <div className="outfit">
               <div className="outfit-veiw"><img src={WeddingImg1}/></div>
               <div className="outfit-details">
                <p>Gray solid pajama</p>
                <p>rs.1999</p>
               </div>
            </div>
           </div>
         </div>}
       
      </div>
    </>
  );
};

export default Search;

import React from 'react'
import Home from '../Home/Home'
import Banner2 from "../../assets/img/banner2.jpg";

const NewArrivals = () => {
  return (
   <>
   <div className='container-fluid new-arrivals'>
    <Home/>
    <div className='new-banner'>
        <img src={Banner2}/>
    </div>
   </div>
   </>
  )
}

export default NewArrivals
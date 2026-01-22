import React from 'react'
import Banner3 from '../../assets/img/banner3.jpg'
import Home from '../Home/Home'

const Sale = () => {
  return (
   <>
   <div className='sales-container '>
    <Home/>
    <div className='sale-banner'>
      <img src={Banner3}/>
    </div>
   </div>
   </>
  )
}

export default Sale
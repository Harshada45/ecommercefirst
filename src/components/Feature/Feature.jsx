import React from 'react'
import Quality from "../../assets/img/quality.svg";
import Cod from "../../assets/img/cod.svg";
import Shipping from "../../assets/img/shipping.svg";
import Return from "../../assets/img/return.svg";
import Payment from "../../assets/img/payment.svg";
import India from "../../assets/img/india.svg";




const Feature = () => {
    const features=[
        {
           img1:Quality, 
           subject1:"Assuared Quality"
        },
         {
           img1:Cod, 
           subject1:"Cash On Delivery"
        },
         {
           img1:Shipping, 
           subject1:"Free Shipping"
        },
         {
           img1:Payment, 
           subject1:"Secured Payment"
        },
        {
           img1:Return, 
           subject1:"Easy Returns & Exchange"
        },
         {
           img1:India, 
           subject1:"Made In India"
        },
    ]

  return (
    <>
    <div className='feature-cards container d-flex  mb-4'>
        {features.map((item,index)=>(
            <div className='feature-card-img'>
            <img src={item.img1}/>
            <p className='subject'>{item.subject1}</p>
        </div>
        ))}
        
    </div>
    </>
  )
}

export default Feature
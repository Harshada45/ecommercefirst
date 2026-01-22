import React from 'react'
import googleImg from "../../assets/img/goggle.png";
import facebookImg from "../../assets/img/facebook.png";


const ProfilePopup = () => {
  return (
    <div className='profile-popup'>
        <div className='code-purchase'>
            <p>Flat ₹200 off on your first purchase</p>
            <div className='code'>
                Code - FIRSTBUY200
            </div>
        </div>
        <div className='login'>
            <h4 className='text-center'>Login</h4>
            <div className='contact'>
                <input type='text' placeholder='+91 Phone Number...'/>
            </div>
            <p>By continuing, I agree to the Terms of use & Privacy policy</p>
            <div className='varification'>Send OTP</div>
        </div>
        <p className='text-center mt-4'>---Or Login With---</p>
        <div className='login-with'>
            <div><a href='//http.google.com'><img src={googleImg}/></a></div>
            <div><a href='//http.facebook.com'><img src={facebookImg}/></a></div>
        </div>
        <div className='sign-up text-center mt-3'>Don't Have an Account? <a href=''>Signup</a></div>
    </div>
  )
}

export default ProfilePopup
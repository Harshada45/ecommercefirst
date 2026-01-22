import { useState } from 'react'
import './App.css'
import { Routes,Route } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home/Home'
import Search from './components/Search/Search';
import FreshDrops from './components/FreshDrops/FreshDrops';
import TrendingCloths from './components/Trending/TrendingCloths';
// import Gift from './components/Gift/GiftBanner';
import MainRoute from './components/Mainroute/MainRoute';
import NewArrivals from './components/NewArrivals/NewArrivals';
import StyledBy from './components/StyledBy/StyledBy';
import GiftPage from './components/Gift/GiftPage.jsx';
import Wedding from './components/Wedding/Wedding.jsx';
import Sale from './components/Sale/Sale.jsx';
import AddToBagPopup from './components/Popup/AddToBagPopup.jsx';
import SizeChartPopup from './components/Popup/SizeChartPopup.jsx';
import ProductDetails from './components/Wedding/ProductDetails.jsx';
import Cart from './components/Checkout/Cart.jsx';
import CartProvider from './components/Context/CartContext.jsx';

function App() {
  
  return (
   <div>

    <CartProvider>
<Routes>
      <Route path='/' element={<MainRoute/>}/>
      {/* <Route path='/home' element={<Home/>}/> */}
      <Route path='/new-arrivals' element={<NewArrivals/>}/>
      <Route path='/influencers' element={<StyledBy/>}/>
      <Route path='/gift' element={<GiftPage/>}/>
      <Route path='/wedding' element={<Wedding/>}/>
      <Route path='/sale' element={<Sale/>}/>

      {/* <Route path='/add-to-bag' element={<AddToBagPopup/>}/> */}
      <Route path='/sizechart' element={<SizeChartPopup/>}/>
      <Route path='/product-details/:id' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </CartProvider>
   
    <ToastContainer autoClose={4000}/>
   </div>
  )
}

export default App

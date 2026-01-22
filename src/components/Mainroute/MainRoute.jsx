import React from 'react'
import FreshDrops from '../FreshDrops/FreshDrops'
import Gift from '../Gift/GiftBanner'
import Home from '../Home/Home'
import TrendingCloths from '../Trending/TrendingCloths'
import TrendNow from '../TrendNow/TrendNow'
import MiddleBanner from '../MiddleBanner/MiddleBanner'
import MediaBuzz from '../MediaBuzz/MediaBuzz'
import HomeBanner from '../Home/HomeBanner'
import Feature from '../Feature/Feature'
import Footer from '../Footer/Footer'
import GiftBanner from '../Gift/GiftBanner'

const MainRoute = () => {
  return (
    <div>
        <Home/>
        <HomeBanner/>
        <FreshDrops/>
        <TrendingCloths/>
        <GiftBanner/>
        <TrendNow/>
        <MiddleBanner/>
        <MediaBuzz/>
        <Feature/>
        <Footer/>

    </div>
  )
}

export default MainRoute
import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import './home.scss'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

function Home() {
  return (
    <div className='homePage'>
        <HeroBanner/>
        <Trending/>
        <Popular/>
        <TopRated/>
    </div>
  )
}

export default Home
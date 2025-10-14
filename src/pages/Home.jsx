import React from 'react'
import HomeHeroSection from '../components/Home/HomeHeroSection'
import BestUsersSection from '../components/Home/BestUsersSection'
import WeeklyBolg1 from '../components/Home/WeeklyBolg1'
import WeeklyBlog2 from '../components/Home/WeeklyBlog2'
import UserReviews from '../components/Home/UserReviews'

const Home = () => {
  return (
    <div>
      <HomeHeroSection/>
      <BestUsersSection/>
      <WeeklyBolg1/>
      <UserReviews/>
      <WeeklyBlog2/>
    </div>
  )
}

export default Home
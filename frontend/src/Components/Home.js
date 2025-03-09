import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  localStorage.removeItem('user');
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from './Navbar'
import '../style.css';
const Home = () => {
  localStorage.removeItem('user');
  return (
    <div>
      <Navbar/>
      <div className='bg'></div>
    </div>
  )
}

export default Home

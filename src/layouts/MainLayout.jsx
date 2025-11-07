import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className='flex flex-col space-y-20'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
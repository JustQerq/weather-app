import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  const linkClass = ({ isActive }) => 
              isActive 
              ? 'bg-gray-900 text-white px-4 py-2 rounded-sm'
              : 'bg-indigo-300 text-white hover:bg-gray-900 px-4 py-2 rounded-sm'

  return (
    <nav className='bg-indigo-700 border-2 border-indigo-500 p-4 fixed top-0 left-0 w-full h-1/12'>
        <div className='container mx-auto flex justify-center space-x-10'>
            <NavLink to='/' className={linkClass}>
              Current
            </NavLink>
            <NavLink to='/Forecast' className={linkClass}>
              Forecast
            </NavLink>
            <NavLink to='/History' className={linkClass}>
              History
            </NavLink>
            <NavLink to='/Modify' className={linkClass}>
              Modify
            </NavLink>
            <NavLink to='/About' className={linkClass}>
              About
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar
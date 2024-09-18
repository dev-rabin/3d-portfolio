import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <header className='header'>
    <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
    <p className='blue-gradient_text'>SY</p>
    </NavLink>
    <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-500" : "text-black"}>
        About
    </NavLink>
    <NavLink to="/projects" className={({isActive}) => isActive ? "text-blue-500" : "text-black"}>
        Projects
    </NavLink>
   </header>
  )
}

export default Navbar
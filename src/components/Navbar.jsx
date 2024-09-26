import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header flex justify-between items-center p-4'>
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md  hover:bg-slate-100">
        <p className='blue-gradient_text'>SY</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) => 
            isActive
              ? "text-blue-600 bg-blue-100 px-3 py-1 rounded-lg shadow-md font-semibold" 
              : "text-black hover:text-blue-500 hover:bg-blue-50 px-3 py-1 rounded-lg transition-all"
          }
        >
          About
        </NavLink>

        {/* Projects Link */}
        <NavLink
          to='/projects'
          className={({ isActive }) => 
            isActive
              ? "text-blue-600 bg-blue-100 px-3 py-1 rounded-lg shadow-md font-semibold"
              : "text-black hover:text-blue-500 hover:bg-blue-50 px-3 py-1 rounded-lg transition-all"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar;

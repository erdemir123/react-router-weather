import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='flex justify-between px-10 py-6 text-sm font-bold bg-slate-400 md:text-lg'>
        <div>Sadık ERDEMİR</div>
        <ul className='flex gap-3'>
          <li>
            <NavLink to="/" style={({isActive})=>({
              color: isActive && "#f0f0f0"
            })}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/harita" style={({isActive})=>({
              color: isActive && "#f0f0f0"
            })}>Map</NavLink>
          </li>
          <li>
            <NavLink to="/list" style={({isActive})=>({
              color: isActive && "#f0f0f0"
            })}>City List</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({isActive})=>({
              color: isActive && "#f0f0f0"
            })}>About</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Nav;
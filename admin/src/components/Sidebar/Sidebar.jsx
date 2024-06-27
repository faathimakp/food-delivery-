import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon_green} alt="Add" />
            <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <img src={assets.selector_icon} alt="List" />
            <p>list Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
            <img src={assets.selector_icon} alt="Order" />
            <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
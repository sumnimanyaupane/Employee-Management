import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className="navbar-brand" href="https://javaguides.">Teacher Student System</a>

<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav">
<li className="nav-item ">
  <NavLink className='nav-link' to='/students'>Students</NavLink>
</li>

<li className="nav-item ">
  <NavLink className='nav-link' to='/teachers'>Teachers</NavLink>
</li>
</ul>
</div>

            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent
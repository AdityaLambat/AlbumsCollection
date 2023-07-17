import React from 'react';
import { Link } from 'react-router-dom'

//get button name and path for every component
const Navbar = (props) => {

  return (

    <nav className="navbar bg-body-tertiary bg-dark">
      <div className="container-fluid">
        <h2 onClick={() => props.handleClick(false)}>
          <span className='navbar-brand text-light'>
          <img id='nav-logo' src="https://cdn-icons-png.flaticon.com/128/2659/2659360.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>Albums Collection</span>
        </h2>
        <Link to={props.path}><button className='btn btn-success'>{props.page}</button></Link>
      </div>
    </nav>
  )
}

export default Navbar

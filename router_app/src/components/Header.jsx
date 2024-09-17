import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        {/* Method 1

        <nav>
          <button><a href='/'>Home</a></button>
          <button><a href='/services'>Services</a></button>
          <button><a href='/contacts'>Contacts</a></button>
        </nav> */}



        {/* method 2 */}

        <nav className='navbar'>
          <button className='navigate'>
            <Link to={'/'} > Home </Link>
          </button>
          <button className='navigate'><Link to={'/services'} > Services </Link></button>
          <button className='navigate'><Link to={'/contacts'} > Contacts </Link></button>
          
        </nav>
    </div>
  )
}

export default Header
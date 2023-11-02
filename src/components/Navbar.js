import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <div className="navbar">
        <ol>
            <li>
                <Link to="/" >HOME</Link> 
            </li>
            <li>
                <Link to="/products">PRODUCTS</Link>
            </li>
        </ol>
    </div>
  )
}

export default Navbar
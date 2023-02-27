import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/products">Products</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Header

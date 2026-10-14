import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center py-5">
      <h1 className="mb-3">Welcome to the homepage</h1>
      <p className="text-muted">Use the navigation bar to log in or create an account.</p>
      <nav className="nav justify-content-center mt-4">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-link" to="/registration">
          Registration
        </NavLink>
      </nav>
    </div>
  )
}

export default Home

import React from 'react'
import logo from "../../netflixlogo.png"
import { Link } from 'react-router-dom'
import { ImSearch} from "react-icons/im"
// import Home from "../Home/Home.jsx"

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      {/* Navbar */}

      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/Movies">Movies</Link>
        <Link to="/Recently_Added">Recently Added</Link>
        <Link to="/My_List">My List</Link>
      </div>

      <ImSearch/>

      
    </nav>
    




  )
}

export default Header

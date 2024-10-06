import React from 'react';
import { Link } from 'react-router-dom';

const navBar = () => {
  return (
    <nav className="navbar">
        <h1>The Blogs</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" className='button'>Add Blog</Link>
        </div>
    </nav>
  )
}

export default navBar;
 
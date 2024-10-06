import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
        <h2>Soooorrrryyyyy</h2>
        <p>Page Not Found...</p>
        <p>Back to <Link  to="/">Home Page..</Link> </p>
      
    </div>
  )
}

export default NotFound;

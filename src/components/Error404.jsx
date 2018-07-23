import React from 'react';
import { Link } from 'react-router-dom';

function Error404(){
  return (
    <div>
      <p>you have chosen an invalid URL path, try again or go <Link to='/'>home.</Link></p>
    </div>
  );
}

export default Error404;

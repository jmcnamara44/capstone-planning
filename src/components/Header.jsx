import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var styledHeader = {
    color: 'red'
  };

  return (
    <div style={styledHeader}>
      <h1>1/2way</h1>
      <Link to='/'>Home</Link> | <Link to='user'>User Page</Link> | <Link to='/results'>Results</Link>
    </div>
  );
}

export default Header;

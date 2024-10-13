import React from 'react';

function Header() {
  return (
    <div className="header">
      <h2>Overview</h2>
      <input type="text" className="search-bar" placeholder="Search Part Number..." />

      <h2>{}</h2>
    </div>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const handleMenuClick = (event) => {
    document.querySelectorAll('.menu-item').forEach((item) => {
    item.style.fontWeight = 'normal';
    });
    event.currentTarget.style.fontWeight = 'bold';
};

return (
    <div className="sidebar">
    <div className="logo">
        D&M <span>STUDIOS</span>
    </div>
    {/* {[
        { icon: 'chart-line', label: 'Overview' },
        { icon: 'plus', label: 'Add item' },
        { icon: 'credit-card', label: 'Credit Customer' },
        { icon: 'user', label: 'Customer' },
        { icon: 'dollar-sign', label: 'Revenue' },
        { icon: 'building', label: 'Company' },
        { icon: 'shopping-cart', label: 'Purchase' },
        { icon: 'info-circle', label: 'About' },
    ].map((item, index) => (
        <div key={index} className="menu-item" onClick={handleMenuClick}>
        <i className={`fas fa-${item.icon}`}></i> {item.label}
        </div>
    ))} */}

<Link to="/overview" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-chart-line"></i> Overview
</Link>

<Link to="/add-item" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-plus"></i> Add Item
</Link>

<Link to="/credit-customer" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-credit-card"></i> Credit Customer
</Link>

<Link to="/customer" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-user"></i> Customer
</Link>

<Link to="/revenue" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-dollar-sign"></i> Revenue
</Link>

<Link to="/company" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-building"></i> Company
</Link>

<Link to="/purchase" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-shopping-cart"></i> Purchase
</Link>

<Link to="/about" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-info-circle"></i> About
</Link>



    </div>
);
}

export default Sidebar;

import React from 'react';

function OverviewCards() {
  const handleRemove = () => alert('Item removed successfully!');

  return (
    <div className="overview-cards">
      <div className="card">
        <div className="card-icon">
          <i className="fas fa-tag"></i>
        </div>
        <div className="card-content">
          <h3>Items Sold</h3>
          <p>85</p>
        </div>
    </div>
    <div className="card">
        <div className="card-icon">
        <i className="fas fa-credit-card"></i>
        </div>
        <div className="card-content">
        <h3>Customer Credit</h3>
        <p>17,800</p>
        </div>
      </div>
      <div className="card">
        <button className="btn-icon" onClick={handleRemove}>
          <i className="fas fa-trash-alt"></i>
        </button>
        <div className="card-content">
          <h3>Remove Item</h3>
        </div>
      </div>
    </div>
  );
}

export default OverviewCards;

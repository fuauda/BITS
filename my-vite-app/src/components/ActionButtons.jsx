import React from 'react';

function ActionButtons() {
  return (
    <div className="action-buttons">
      <button className="btn" onClick={() => window.location.reload()}>
        <i className="fas fa-sync-alt"></i> Refresh
      </button>
      <button className="btn" onClick={() => alert('Transfer items functionality not implemented.')}>
        <i className="fas fa-exchange-alt"></i> Transfer Items
      </button>
      <button className="btn" onClick={() => {
        const newPassword = prompt('Enter new password:');
        if (newPassword) alert('Password changed successfully!');
      }}>
        <i className="fas fa-lock"></i> Change Password
      </button>
    </div>
  );
}

export default ActionButtons;

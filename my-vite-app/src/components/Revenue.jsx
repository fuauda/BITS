import React from 'react';


const RevenueDashboard = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Revenue</h2>
        <input type="text" className="search-bar" placeholder="xxxxxxx" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <RevenueCard title="Daily" amount="35,468" description="Today's revenue" />
        <RevenueCard title="Weekly" amount="155,408" description="Revenue" />
        <RevenueCard title="Monthly" amount="435,878" description="Revenue" />
      </div>
      <Calendar />
      <RevenueTable />
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <span>On credit: xxxxx</span>
        <span style={{ marginLeft: '20px' }}>Paid: xxxxxx</span>
        <span style={{ marginLeft: '20px' }}>Total: xxxxxxxxx</span>
      </div>
    </div>
  );
};

const RevenueCard = ({ title, amount, description }) => {
  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', width: '30%' }}>
      <i className="fas fa-dollar-sign" style={{ float: 'right', fontSize: '24px', color: '#16a085' }}></i>
      <h3 style={{ margin: '0', fontSize: '14px', color: '#888' }}>{title}</h3>
      <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '10px' }}>{amount}</div>
      <div>{description}</div>
    </div>
  );
};

const Calendar = () => {
  return (
    <div style={{ backgroundColor: '#f0f2f5', padding: '10px', borderRadius: '8px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span>Choose date</span>
        <span>September</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px' }}>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div className="calendar-day" style={{ textAlign: 'center', padding: '5px', backgroundColor: '#fff', borderRadius: '4px' }} key={day}>{day}</div>
        ))}
      </div>
    </div>
  );
};

const RevenueTable = () => {
  return (
    <table className="revenue-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #e0e0e0', padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Part number</th>
          <th style={{ border: '1px solid #e0e0e0', padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Brand</th>
          <th style={{ border: '1px solid #e0e0e0', padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Item type</th>
          <th style={{ border: '1px solid #e0e0e0', padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Unit price</th>
          <th style={{ border: '1px solid #e0e0e0', padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Quantity</th>
          <th style={{ border: '1px solid #e0e0e0', padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Total price</th>
        </tr>
      </thead>
      <tbody>
        {[
          { part: 'xxxxxxx', brand: 'Brand', type: 'Type', price: 3570.00, quantity: 23 },
          { part: 'xxxxxxx', brand: 'Brand', type: 'Type', price: 491.35, quantity: 16 },
          { part: 'xxxxxxx', brand: 'Brand', type: 'Type', price: 9820.50, quantity: 28 },
          { part: 'xxxxxxx', brand: 'Brand', type: 'Type', price: 27000, quantity: 79 }
        ].map(item => (
          <tr key={item.part}>
            <td style={{ border: '1px solid #e0e0e0', padding: '12px' }}>{item.part}</td>
            <td style={{ border: '1px solid #e0e0e0', padding: '12px' }}>{item.brand}</td>
            <td style={{ border: '1px solid #e0e0e0', padding: '12px' }}>{item.type}</td>
            <td style={{ border: '1px solid #e0e0e0', padding: '12px' }}>{item.price}</td>
            <td style={{ border: '1px solid #e0e0e0', padding: '12px' }}>{item.quantity}</td>
            <td style={{ border: '1px solid #e0e0e0', padding: '12px' }}>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RevenueDashboard;

import React from 'react';

const PurchaseOverView = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <h2>Purchase Overview</h2>
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="purchase-cards">
          <PurchaseCard title="Total Purchases" amount="1,234" icon="fas fa-shopping-cart" />
          <PurchaseCard title="Total Spent" amount="$87,654" icon="fas fa-dollar-sign" />
          <PurchaseCard title="Items Purchased" amount="5,678" icon="fas fa-box" />
        </div>
        <PurchaseTable />
      </div>
    </div>
  );
};

const PurchaseCard = ({ title, amount, icon }) => (
  <div className="purchase-card">
    <i className={icon + " icon"}></i>
    <h3>{title}</h3>
    <div className="amount">{amount}</div>
    <div>Last 30 days</div>
  </div>
);

const PurchaseTable = () => {
  const purchases = [
    { id: 'PUR-001', date: '2023-09-01', supplier: 'Supplier A', items: 15, total: '$2,500', status: 'Completed' },
    { id: 'PUR-002', date: '2023-09-03', supplier: 'Supplier B', items: 8, total: '$1,800', status: 'Pending' },
    { id: 'PUR-003', date: '2023-09-05', supplier: 'Supplier C', items: 22, total: '$3,700', status: 'Completed' },
    { id: 'PUR-004', date: '2023-09-07', supplier: 'Supplier A', items: 10, total: '$1,500', status: 'In Transit' },
    { id: 'PUR-005', date: '2023-09-10', supplier: 'Supplier D', items: 18, total: '$2,900', status: 'Completed' },
  ];

  return (
    <table className="purchase-table">
      <thead>
        <tr>
          <th>Purchase ID</th>
          <th>Date</th>
          <th>Supplier</th>
          <th>Items</th>
          <th>Total Amount</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {purchases.map(purchase => (
          <tr key={purchase.id}>
            <td>{purchase.id}</td>
            <td>{purchase.date}</td>
            <td>{purchase.supplier}</td>
            <td>{purchase.items}</td>
            <td>{purchase.total}</td>
            <td>{purchase.status}</td>
            <td><button className="action-btn">View</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PurchaseOverView;

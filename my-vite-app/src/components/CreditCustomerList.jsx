import React, { useEffect, useState } from 'react';

const CreditCustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock customer data
  const mockCustomers = [
    { name: "John Doe", id: "CUST001", creditBalance: 150.00, lastCredit: "2023-04-15" },
    { name: "Jane Smith", id: "CUST002", creditBalance: 75.50, lastCredit: "2023-04-10" },
    { name: "Alice Johnson", id: "CUST003", creditBalance: 200.00, lastCredit: "2023-04-18" },
    { name: "Bob Williams", id: "CUST004", creditBalance: 50.00, lastCredit: "2023-04-05" },
    { name: "Carol Brown", id: "CUST005", creditBalance: 125.75, lastCredit: "2023-04-12" }
  ];

  useEffect(() => {
    setCustomers(mockCustomers);
  }, []);

  const deleteCustomer = (customerId) => {
    setCustomers(customers.filter(customer => customer.id !== customerId));
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wrapper">
      <div className="header">
        <h2>Credit Customers</h2>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="customer-list">
        {filteredCustomers.map(customer => (
          <div key={customer.id} className="customer-item">
            <div className="customer-name">{customer.name}</div>
            <div className="customer-id">{customer.id}</div>
            <div className="credit-balance">${customer.creditBalance.toFixed(2)}</div>
            <div className="last-credit">
              {new Date(customer.lastCredit).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>
            <button className="btn2" onClick={() => deleteCustomer(customer.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCustomerList;

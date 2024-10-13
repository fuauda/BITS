import React, { useState } from 'react';
 // Create a separate CSS file for styles

const Company = () => {
  const [mockCustomers, setMockCustomers] = useState([
    { id: "CUST001", name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { id: "CUST002", name: "Jane Smith", email: "jane@example.com", phone: "234-567-8901" },
    { id: "CUST003", name: "Alice Johnson", email: "alice@example.com", phone: "345-678-9012" },
    { id: "CUST004", name: "Bob Williams", email: "bob@example.com", phone: "456-789-0123" },
    { id: "CUST005", name: "Carol Brown", email: "carol@example.com", phone: "567-890-1234" }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  const filteredCustomers = mockCustomers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    customer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const openModal = (customer = null) => {
    setCurrentCustomer(customer);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentCustomer(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = e.target.elements;

    if (currentCustomer) {
      setMockCustomers(mockCustomers.map(customer => 
        customer.id === currentCustomer.id ? 
        { ...customer, name: name.value, email: email.value, phone: phone.value } : customer
      ));
    } else {
      const newId = `CUST${String(mockCustomers.length + 1).padStart(3, '0')}`;
      setMockCustomers([...mockCustomers, { id: newId, name: name.value, email: email.value, phone: phone.value }]);
    }

    closeModal();
  };

  const deleteCustomer = (id ) => {
    setMockCustomers(mockCustomers.filter(customer => customer.id !== id));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>Customer Management</h2>
        <button className="add-customer-btn" onClick={() => openModal()}>Add New Customer</button>
      </div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search customers..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          style={{ width: '100%', padding: '10px', border: '1px solid #bdc3c7', borderRadius: '4px', fontSize: '16px' }} 
        />
      </div>
      <div className="customer-list" style={{ backgroundColor: '#f7f9fa', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        {filteredCustomers.map(customer => (
          <div key={customer.id} className="customer-item" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr auto auto', gap: '10px', alignItems: 'center', padding: '15px', borderBottom: '1px solid #e0e0e0' }}>
            <div className="customer-name" style={{ fontWeight: 'bold', color: '#2c3e50' }}>{customer.name}</div>
            <div className="customer-id" style={{ color: '#7f8c8d' }}>{customer.id}</div>
            <div className="customer-email" style={{ color: '#3498db' }}>{customer.email}</div>
            <div className="customer-phone" style={{ color: '#34495e' }}>{customer.phone}</div>
            <button className="btn btn-edit" onClick={() => openModal(customer)} style={{ color: '#2980b9' }}><i className="fas fa-edit"></i></button>
            <button className="btn btn-delete" onClick={() => deleteCustomer(customer.id)} style={{ color: '#e74c3c' }}><i className="fas fa-trash-alt"></i></button>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="modal" style={{ display: 'block', position: 'fixed', zIndex: 1, left: 0, top: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <div className="modal-content" style={{ backgroundColor: '#fefefe', margin: '15% auto', padding: '20px', border: '1px solid #888', width: '50%', borderRadius: '8px' }}>
            <span className="close" onClick={closeModal} style={{ color: '#aaa', float: 'right', fontSize: '28px', fontWeight: 'bold', cursor: 'pointer' }}>&times;</span>
            <h2>{currentCustomer ? 'Edit Customer' : 'Add New Customer'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="customerName">Name:</label>
                <input type="text" id="customerName" name="name" defaultValue={currentCustomer ? currentCustomer.name : ''} required style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="customerEmail">Email:</label>
                <input type="email" id="customerEmail" name="email" defaultValue={currentCustomer ? currentCustomer.email : ''} required style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="customerPhone">Phone:</label>
                <input type="tel" id="customerPhone" name="phone" defaultValue={currentCustomer ? currentCustomer.phone : ''} required style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
              </div>
              <button type="submit" className="submit-btn" style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>Save Customer</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;

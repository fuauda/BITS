import React, { useState } from 'react';

const AddItemForm = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemCode: '',
    price: '',
    quantity: '',
    category: '',
    sku: '',
    brand: '',
    paymentType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item data:', formData);
    alert('Item added successfully!');
    setFormData({
      itemName: '',
      itemCode: '',
      price: '',
      quantity: '',
      category: '',
      sku: '',
      brand: '',
      paymentType: '',
    });
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel?')) {
      setFormData({
        itemName: '',
        itemCode: '',
        price: '',
        quantity: '',
        category: '',
        sku: '',
        brand: '',
        paymentType: '',
      });
    }
  };

  const handlePaymentChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      paymentType: e.target.value,
    }));
  };

  return (
    <div className="form-container">
      <form className="form-layout" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="itemName">Item Name</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="itemCode">Item Code</label>
            <input
              type="text"
              id="itemCode"
              name="itemCode"
              value={formData.itemCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="home">Home & Garden</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sku">SKU</label>
            <input
              type="text"
              id="sku"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="payment-type">
          <div className="form-group">
            <label>Payment Type</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  name="paymentType"
                  value="paid"
                  checked={formData.paymentType === 'paid'}
                  onChange={handlePaymentChange}
                />
                Paid
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentType"
                  value="onCredit"
                  checked={formData.paymentType === 'onCredit'}
                  onChange={handlePaymentChange}
                />
                On Credit
              </label>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button type="submit" className="btn1">
            <i className="fas fa-plus"></i> Add Item
          </button>
          <button type="button" className="btn1" onClick={handleCancel}>
            <i className="fas fa-times"></i> Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;

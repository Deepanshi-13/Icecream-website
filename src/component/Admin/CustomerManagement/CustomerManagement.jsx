import React, { useState } from 'react';
import ReusableModal from '../Modal/ReuseableModal';
import "./CustomerManagement.css";
import CustomerForm from './CustomerForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@email.com', phone: '(555) 123-4567', totalOrders: 15, totalSpent: 1200, lastVisit: '2024-01-21', status: 'Active', favoriteFlavors: 'Strawberry' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@email.com', phone: '(555) 234-5678', totalOrders: 8, totalSpent: 480, lastVisit: '2024-01-20', status: 'Active', favoriteFlavors: 'Vanilla' },
    { id: 3, name: 'Mike Johnson', email: 'mike@email.com', phone: '(555) 345-6789', totalOrders: 22, totalSpent: 1760, lastVisit: '2024-01-19', status: 'VIP', favoriteFlavors: 'Chocolate' },
    { id: 4, name: 'Emily Brown', email: 'emily@email.com', phone: '(555) 456-7890', totalOrders: 3, totalSpent: 2250, lastVisit: '2024-01-18', status: 'New', favoriteFlavors: 'Mango' },
    { id: 5, name: 'David Wilson', email: 'david@email.com', phone: '(555) 567-8901', totalOrders: 12, totalSpent: 840, lastVisit: '2024-01-17', status: 'Active', favoriteFlavors: 'Blueberry' },
    { id: 6, name: 'Lisa Garcia', email: 'lisa@email.com', phone: '(555) 678-9012', totalOrders: 7, totalSpent: 560, lastVisit: '2024-01-15', status: 'Active', favoriteFlavors: 'Butterscotch' },
    { id: 7, name: 'Tom Anderson', email: 'tom@email.com', phone: '(555) 789-0123', totalOrders: 18, totalSpent: 1080, lastVisit: '2024-01-10', status: 'Regular', favoriteFlavors: 'BlueMoon' },
    { id: 8, name: 'Anna Martinez', email: 'anna@email.com', phone: '(555) 890-1234', totalOrders: 5, totalSpent: 400, lastVisit: '2024-01-08', status: 'Active', favoriteFlavors: 'Pistachio' }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState("all")

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditCustomer(null);
  };

  const getCustomerStats = () => {
    return {
      total: customers.length,
      new: customers.filter(c => c.status === 'New').length,
      active: customers.filter(c => c.status === 'Active').length,
      vip: customers.filter(c => c.status === 'VIP').length,
    };
  };

  const handleCustomerFormSubmit = (customer) => {
    if (editCustomer) {
      const updatedCustomers = customers.map((c) =>
        c.id === editCustomer.id ? { ...customer, id: editCustomer.id } : c
      );
      setCustomers(updatedCustomers);
      toast.success("Customer updated successfully!");
    } else {
      const newCustomer = {
        ...customer,
        id: Date.now(),
        totalOrders: 0, 
        totalSpent: 0, 
        lastVisit: new Date().toISOString().split('T')[0], // today's date
        status: 'New' 
      };
      setCustomers((prev) => [...prev, newCustomer]);
      toast.success("Customer added Successfully!");
    }

    handleCloseModal();
  };

  const handleEdit = (customer) => {
    setEditCustomer(customer);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setCustomers((prev) => prev.filter((customer) => customer.id !== id));
    toast.success("Customer deleted successfully!");
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase()) ||
      customer.phone.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter

    return matchesSearch && matchesStatus
  })
  const stats = getCustomerStats();

  return (
    <>
      <div className="customer-management">
        <div className="section-header">
          <div>
            <h2>Customer Management</h2>
            <p>Manage your customer database and relationships</p>
          </div>
          <button className="primary-btn" onClick={handleOpenModal}>
            + Add New Customer
          </button>
        </div>

        <div className="customer-stats">
          <div className="stat-card primary">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>{stats.total}</h3>
              <p>Total Customers</p>
            </div>
          </div>
          <div className="stat-card info">
            <div className="stat-icon">🆕</div>
            <div className="stat-content">
              <h3>{stats.new}</h3>
              <p>New Customers</p>
            </div>
          </div>
          <div className="stat-card success">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{stats.active}</h3>
              <p>Active Customers</p>
            </div>
          </div>
          <div className="stat-card accent">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h3>{stats.vip}</h3>
              <p>VIP Customers</p>
            </div>
          </div>
        </div>

        <div className="customer-filters">
          <div className="search-group">
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customers..."
              className="search-input"
            />
          </div>
          <div className="filter-group">
            <label>Status:</label>
            <select value={statusFilter} name='status' onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All Status</option>
              <option value="New">New</option>
              <option value="Active">Active</option>
              <option value="Regular">Regular</option>
              <option value="VIP">VIP</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className='customers-table'>
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Last Visit</th>
                <th>Favorite Flavors</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map(customer => (
                <tr key={customer.id}>
                  <td className="customer-info">
                    <div className="customer-name">{customer.name}</div>
                  </td>
                  <td className="contact-info">
                    <div>{customer.email}</div>
                    <div className="phone">{customer.phone}</div>
                  </td>
                  <td><span>{customer.status}</span></td>
                  <td className="orders-count">{customer.totalOrders}</td>
                  <td className="total-spent">₹{customer.totalSpent}.00</td>
                  <td>{customer.lastVisit}</td>
                  <td className="favorite-flavors">{customer.favoriteFlavors}</td>
                  <td className="actions">
                    <button className="edit-btn" onClick={() => handleEdit(customer)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(customer.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ReusableModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <CustomerForm
          onSubmit={handleCustomerFormSubmit}
          onCancel={handleCloseModal}
          initialData={editCustomer}
        />
      </ReusableModal>

      <ToastContainer position='top-right' autoClose={3000} />
    </>
  );
};

export default CustomerManagement;

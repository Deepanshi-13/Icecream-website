// src/pages/FlavorManagement.jsx
import React, { useState } from 'react';
import './FlavorManagement.css';
import ReusableModal from '../Modal/ReuseableModal';
import Form from '../Form/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const FlavorManagement = () => {
  const [flavors, setFlavors] = useState([
    { id: 1, name: 'Strawberry Icecream', category: 'Classic', status: 'Active', price: 80, ingredients: 'Milk, Cream, Strawberry Extract', allergens: 'Dairy' },
    { id: 2, name: 'Vanilla Icecream', category: 'Classic', status: 'Active', price: 60, ingredients: 'Milk, Cream, Vanilla, Sugar', allergens: 'Dairy' },
    { id: 3, name: 'Chocolate Icecream', category: 'Fruit', status: 'Active', price: 80, ingredients: 'Milk, Cream, Chocolate', allergens: 'Dairy' },
    { id: 4, name: 'Mango Icecream', category: 'Specialty', status: 'Active', price: 75, ingredients: 'Milk, Cream, Mango', allergens: 'Dairy' },
    { id: 5, name: 'Blueberry Icecream', category: 'Specialty', status: 'Active', price: 70, ingredients: 'Blueberry, Marshmallows, Nuts', allergens: 'Dairy, Nuts' },
    { id: 6, name: 'Butterscotch Icecream', category: 'Premium', status: 'Limited', price: 80, ingredients: 'Milk, Cream, Butterscotch', allergens: 'Dairy, Nuts' }
  ])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFlavor, setEditFlavor] = useState(null);
  const handleOpen = (flavor = null) => {
    setEditFlavor(flavor);
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);


  const handleFormSubmit = (data) => {
    if (editFlavor) {
      // Edit logic
      const updatedFlavors = flavors.map((f) =>
        f.id === editFlavor.id ? { ...data, id: editFlavor.id } : f
      );
      setFlavors(updatedFlavors);
      toast.success("Flavor updated successfully!");
    } else {
      // Add logic
      const newFlavor = {
        ...data,
        id: Date.now()
      };
      setFlavors((prev) => [...prev, newFlavor]);
      toast.success("Flavor added successfully!");
    }

    handleClose();
    setEditFlavor(null); // Reset edit state
  };

  const handleAddNew = () => {
    setEditFlavor(null); // Reset edit state
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setFlavors((prev) => prev.filter((flavor) => flavor.id !== id));
    toast.success("Flavor deleted successfully!");
  };


  const handleEdit = (flavor) => {
    setEditFlavor(flavor);
    setIsModalOpen(true);

  }

  return (
    <div className='flavor-management'>
      <div className="section-header">
        <div>
          <h2>Flavor Management</h2>
          <p>Manage your ice cream flavors, ingredients, and pricing</p>
        </div>
        <button onClick={handleAddNew}>+ Add more flavor</button>
      </div>

      <div className='flavors-table'>
        <table>
          <thead>
            <tr>
              <th>Flavor Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Price</th>
              <th>Ingredients</th>
              <th>Allergens</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flavors.map((flavor) => (
              <tr key={flavor.id}>
                <td className='flavor-name'>{flavor.name}</td>
                <td><span className='category-badge'>{flavor.category}</span></td>
                <td><span className={`status-badge ${flavor?.status?.toLowerCase()}`}>{flavor.status}</span></td>
                <td className='price'>₹{flavor.price}.00</td>
                <td className='ingredients'>{flavor.ingredients}</td>
                <td className='allergens'>{flavor.allergens}</td>
                <td className='actions'>
                  <button className='edit-btn'
                    onClick={() => handleEdit(flavor)}
                  >Edit</button>
                  <button className='delete-btn'
                    onClick={() => handleDelete(flavor.id)}
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReusableModal isOpen={isModalOpen} onClose={handleClose} >
        <Form
          onSubmit={handleFormSubmit}
          onCancel={handleClose}
          initialData={editFlavor}
        />

      </ReusableModal>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default FlavorManagement;

import React, { useState, useEffect } from 'react';
import './FlavorManagement.css';
import ReusableModal from '../Modal/ReuseableModal.jsx';
import { toast } from 'react-toastify';
import FlavorModal from '../Form/FlavorModal.jsx';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/Firebase.js';

const FlavorManagement = () => {
  const [flavors, setFlavors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFlavor, setEditFlavor] = useState(null);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchFlavors = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'flavors'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFlavors(data);
      console.log("Fetched flavors:", data);
    } catch (error) {
      toast.error("Error fetching flavors");
    }
  };

  useEffect(() => {
    console.log('This is for flavor');
    fetchFlavors();
  }, []);

  const handleFormSubmit = async (data) => {
    try {
      if (editFlavor) {
        const docRef = doc(db, 'flavors', editFlavor.id);
        await updateDoc(docRef, data);
        toast.success("Flavor updated successfully!");
      } else {
        await addDoc(collection(db, 'flavors'), data);
        toast.success("Flavor added successfully!");
      }
      fetchFlavors();
    } catch (error) {
      toast.error("Error saving flavor data!");
    }
    handleClose();
    setEditFlavor(null);
  };

  const handleAddNew = () => {
    setEditFlavor(null);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'flavors', id));
      toast.success("Flavor deleted!");
      fetchFlavors();
    } catch (error) {
      toast.error("Failed to delete flavor.");
    }
  };

  const handleEdit = (flavor) => {
    setEditFlavor(flavor);
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);

  const filteredFlavors = flavors.filter(flavor =>
    flavor.flavor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='flavor-management'>
      <div className="section-header">
        <div>
          <h2>Flavor Management</h2>
          <p>Manage your ice cream flavors and pricing</p>
        </div>
        <button onClick={handleAddNew}>+ Add Flavor</button>
      </div>

      <div className="search-group">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search Flavor..."
          className="search-input"
        />
      </div>

      <div className='flavors-table'>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Flavor</th>
              <th>Type</th>
              <th>Status</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Previous Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFlavors.map((flavor) => (
              <tr key={flavor.id}>
                <td>
                  <img
                    src={flavor.image}
                    alt={flavor.flavor}
                    style={{ width: '50px', height: '50px', borderRadius: '8px' }}
                  />
                </td>
                <td>{flavor.flavor}</td>
                <td>{flavor.type}</td>
                <td><span className={`status-badge ${flavor?.status?.toLowerCase()}`}>{flavor.status}</span></td>
                <td>{flavor.rating}</td>
                <td>₹{flavor.price}</td>
                <td>₹{flavor.previousPrice}</td>
                <td>
                  <button className='edit-btn' onClick={() => handleEdit(flavor)}>Edit</button>
                  <button className='delete-btn' onClick={() => handleDelete(flavor.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReusableModal isOpen={isModalOpen} onClose={handleClose}>
        <FlavorModal
          onSubmit={handleFormSubmit}
          onCancel={handleClose}
          initialData={editFlavor}
          onClose={handleClose}
        />
      </ReusableModal>
    </div>
  );
};

export default FlavorManagement;

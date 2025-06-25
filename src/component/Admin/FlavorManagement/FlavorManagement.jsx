import React, { useState } from 'react';
import "./FlavorManagement.css";

const FlavorManagement = () => {
  const [flavors, setFlavors] = useState([
    { id: 1, name: 'Strawberry Ice Cream', category: 'Classic', status: 'Active', price: 80, ingredients: 'Milk, Cream, Strawberry Extract', allergens: 'Dairy' },
    { id: 2, name: 'Vanilla Ice Cream', category: 'Classic', status: 'Active', price: 60, ingredients: 'Milk, Cream, vanilla, Sugar', allergens: 'Dairy' },
    { id: 3, name: 'Chocolate Ice Cream', category: 'Fruit', status: 'Active', price:80, ingredients: 'Milk, Cream,Coco', allergens: 'Dairy' },
    { id: 4, name: 'Mango Ice Cream', category: 'Specialty', status: 'Active', price: 75, ingredients: 'Milk, Cream, Mango', allergens: 'Dairy' },
    { id: 5, name: 'Blueberry Ice Cream', category: 'Specialty', status: 'Active', price: 70, ingredients: 'Blueberry, Marshmallows, Nuts', allergens: 'Dairy, Nuts' },
    { id: 6, name: 'Butterscotch Ice Cream', category: 'Premium', status: 'Limited', price: 80, ingredients: 'Milk, Cream, Butterscotch', allergens: 'Dairy, Nuts' }
  ])
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingFlavor, setEditingFlavor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "Classic",
    status: "Active",
    price: "",
    ingredients: "",
    allergens: ""
  })

  const categories = ['Classic', 'Fruit', 'Specialty', 'Premium', 'Seasonal']
  const statuses = ['Active', 'Limited', 'Discontinued']
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingFlavor) {
      setFlavors(flavors.map(flavor => flavor.id === editingFlavor.id ? { ...formData, id: editingFlavor.id, price: parseFloat(formData.price) } : flavor))
      setEditingFlavor(null)
    } else {
      const newFlavor = {
        ...formData,
        id: Date.now(),
        price: parseFloat(formData.price)
      }
      setFlavors([...flavors, newFlavor])
    }
    setFormData({ name: "", category: "Classic", status: "Active", price: "", ingredients: "", allergens: "" })
    setShowAddForm(false)
  }

  const handleEdit = (flavor) => {
    setEditingFlavor(flavor)
    setFormData({
      name: flavor.name,
      category: flavor.category,
      status: flavor.price.toString(),
      ingredients: flavor.ingredients,
      allergens: flavor.allergens
    })
    setShowAddForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this flavor?')) {
      setFlavors(flavors.filter(flavor => flavor.id !== id))
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'success'
      case 'Limited': return 'warning'
      case 'Discontinued': return 'error'
      default: return 'neutral'
    }
  }
  return (
    <>
      <div className='flavor-management'>
        <div className="section-header">
          <div>
            <h2>Flavor Management</h2>
            <p>Manage your ice cream flavors, ingredients, and pricing</p>
          </div>
          <button
            className="primary-btn"
            onClick={() => setShowAddForm(true)}
          >
            + Add New Flavor
          </button>
        </div>
        {showAddForm && (
          <div className='modal-overlay'>
            <div className='modal'>
              <div className='modal-header'>
                <h3>{editingFlavor ? "Edit Flavor" : 'Add New Flavor'}</h3>
                <button
                  className='close-btn'
                  onClick={() => {
                    setShowAddForm(false)
                    setEditingFlavor(null)
                    setFormData({ name: '', category: 'Classic', status: "Active", price: '', ingredients: '', allergens: '' })
                  }}
                > ×</button>
              </div>
              <form onSubmit={handleSubmit} className='flavor-form'>
                <div className='form-row'>
                  <div className='form-group'>
                    <label>Flavor Name</label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>category</label>
                    <select
                      name='category'
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      {
                        categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group'>
                    <label>Status</label>
                    <select
                      name='status'
                      value={formData.status}
                      onChange={handleInputChange}
                    >
                      {statuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Price(₹)</label>
                    <input
                      type='number'
                      step={"0.01"}
                      name='price'
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <label>Ingredients</label>
                  <input
                    type='text'
                    name='ingredients'
                    value={formData.ingredients}
                    onChange={handleInputChange}
                    placeholder='List main ingredients separated by commas'
                  />
                </div>
                <div className='form-group'>
                  <label>Allergens</label>
                  <input
                    type='text'
                    name='allergens'
                    value={formData.allergens}
                    onChange={handleInputChange}
                    placeholder='List allergens separated by commas'
                  />
                  <div className='form-actions'>
                    <button
                      type='button'
                      className='cancel-btn'
                      onClick={() => {
                        setShowAddForm(false)
                        setEditingFlavor(null)
                        setFormData({ name: '', category: 'Classic', status: 'Active', price: "", ingredients: '', allergens: '' })
                      }}
                    >Cancel</button>
                    <button type='submit' className='primary-btn'>{editingFlavor ? 'Update Flavor' : 'Add Flavor'}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className='flavors-table'>
          <table>
            <thead>
              <tr>
                <th>Flavor Name</th>
                <th>category</th>
                <th>Status</th>
                <th>Price</th>
                <th>Ingredients</th>
                <th>Allergens</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {flavors.map(flavor => (
                <tr key={flavor.id}>
                  <td className='flavor-name'>
                    {flavor.name}
                  </td>
                  <td>
                    <span className='catgeory-badge'>
                      {flavor.category}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusColor(flavor.status)} `}>{flavor.status}
                    </span>
                  </td>
                  <td className='price'>₹{flavor.price.toFixed(2)}
                  </td>
                  <td className='ingredients'>{flavor.ingredients}</td>
                  <td className='allergens'>
                    {flavor.allergens}
                  </td>
                  <td className='actions'>
                    <button
                      className='edit-btn'
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
      </div>
    </>
  )
}

export default FlavorManagement

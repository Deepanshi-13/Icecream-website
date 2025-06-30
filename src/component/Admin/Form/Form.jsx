import React, { useEffect, useState } from 'react'
import "./Form.css";

const Form = ({ onSubmit, onCancel, initialData }) => {
    const [formData, setFormData] = useState({
        name: "",
        category: "Classic",
        status: "Active",
        price: "",
        ingredients: "",
        allergens: ""
    });
    console.log(formData);

    // Update form data when editing
    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            // Reset when adding
            setFormData({
                name: '',
                category: 'Classic',
                status: 'Active',
                price: '',
                ingredients: '',
                allergens: ''
            });
        }
    }, [initialData]);


    const categories = ['Classic', 'Fruit', 'Specialty', 'Premium', 'Seasonal']
    const statuses = ['Active', 'Limited', 'Discontinued']
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', category: 'Classic', status: 'Active', price: '', ingredients: '', allergens: '' });
    }
    const handleCancel = (e) => {
        e.preventDefault();
        onCancel();
    }
    return (
        <>
            <form className='flavor-form' onSubmit={handleSubmit}>
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
                        <label>Category</label>
                        <select
                            name='category'
                            value={formData.category}
                            onChange={handleInputChange}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>

                            ))}
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
                        <label> ₹Price</label>
                        <input
                            type='text'
                            name='price'
                            value={formData.price}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label>Ingredients</label>
                    <input
                        type='text'
                        name='ingredients'
                        placeholder='List main ingredients separated  by commas'
                        value={formData.ingredients}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Allergens</label>
                    <input
                        type='text'
                        name='allergens'
                        placeholder='List allergens separated by commas'
                        value={formData.allergens}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-actions">
                    <button onClick={handleCancel}>Cancel</button>
                    <button type='submit'>
                        {initialData ? "Update Flavor" : "Add Flavor"}
                    </button>

                </div>
            </form>
        </>
    )
}

export default Form

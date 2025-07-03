import React, { useEffect, useState } from 'react'
import "./CustomerManagement.css";
const CustomerForm = ({ onSubmit, onCancel, initialData }) => {
    const [customerData, setCustomerData] = useState({
        name: "",
        email: "",
        phone: "",
        favoriteFlavors: ""
    });
    console.log(customerData)

    //update when editing form data
    useEffect(() => {
        if (initialData) {
            setCustomerData(initialData);
        } else {
            // Reset form after editing
            setCustomerData({
                name: "",
                email: "",
                phone: "",
                favoriteFlavors: ""
            })
        }
    }, [initialData])
    const handleCustomerInput = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(customerData)
        onSubmit(customerData)
        setCustomerData({
            name: "",
            email: "",
            phone: "",
            favoriteFlavors: ""
        })
    }

    const handleCancel = (e) => {
        e.preventDefault();
        onCancel();
    }
    return (
        <>
            <form className='flavor-form' onSubmit={handleSubmit}>
                <h3>Add New Customer</h3>

                <div className='form-group'>
                    <label>Name</label>
                    <input type='text'
                        name='name'
                        value={customerData.name}
                        onChange={handleCustomerInput}
                        required />
                </div>

                <div className='form-row'>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='email'
                            name='email'
                            value={customerData.email}
                            onChange={handleCustomerInput}
                            required />
                    </div>
                    <div className='form-group'>
                        <label>Phone</label>
                        <input type='text'
                            name='phone'
                            value={customerData.phone}
                            onChange={handleCustomerInput}
                            placeholder='(555) 123-4567'
                            required />
                    </div>
                </div>

                <div className='form-group'>
                    <label>Favorite Flavors</label>
                    <input type='text'
                        name='favoriteFlavors'
                        value={customerData.favoriteFlavors}
                        onChange={handleCustomerInput}
                        placeholder='List favorite flavors separated by commas' />
                </div>

                <div className='form-actions'>
                    <button type='button'
                        onClick={handleCancel}>Cancel</button>
                    <button type='submit'>{initialData ? "Update Customer" : "Add Customer"}</button>
                </div>

            </form>


        </>
    )
}

export default CustomerForm

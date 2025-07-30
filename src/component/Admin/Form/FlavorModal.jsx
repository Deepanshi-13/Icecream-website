 import React, { useState, useEffect } from "react";
import { db } from "../../../firebase/Firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FlavorModal.css";

const FlavorModal = ({ initialData, onClose }) => {
  const [formData, setFormData] = useState({
    image: "",
    flavor: "",
    rating: "",
    previousPrice: "",
    price: "",
    type: "",
    status: "Active",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialData && initialData.id) {
        const docRef = doc(db, "flavors", initialData.id);
        await updateDoc(docRef, formData);
        toast.success("✅ Flavor updated in Firestore!");
      } else {
        await addDoc(collection(db, "flavors"), formData);
        toast.success("✅ Flavor uploaded to Firestore!");
      }

      setFormData({
        image: "",
        flavor: "",
        rating: "",
        previousPrice: "",
        price: "",
        type: "",
        status: "Active",
      });

      setTimeout(() => {
        if (onClose) onClose(); // Close modal after short delay
      }, 1000);
    } catch (error) {
      console.error("Error adding/updating document: ", error);
      toast.error("❌ Something went wrong!");
    }
  };

  return (
    <div className="flavor-form">
      <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
        {initialData ? "Edit Flavor" : "Add New Flavor"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Image URL</label>
            <input name="image" type="url" value={formData.image} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Flavor Name</label>
            <input name="flavor" value={formData.flavor} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Rating (e.g. 4.1★)</label>
            <input name="rating" value={formData.rating} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Previous Price</label>
            <input name="previousPrice" value={formData.previousPrice} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Current Price</label>
            <input name="price" value={formData.price} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Type (e.g. topSeller)</label>
            <input name="type" value={formData.type} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() =>
              setFormData({
                image: "",
                flavor: "",
                rating: "",
                previousPrice: "",
                price: "",
                type: "",
                status: "Active",
              })
            }
          >
            Clear
          </button>
          <button type="submit">{initialData ? "Update" : "Upload"} Flavor</button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default FlavorModal;
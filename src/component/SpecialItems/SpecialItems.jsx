import "./SpecialItems.css";

import Button from "../Button/Button";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FaStar, FaRegStar } from "react-icons/fa";
import { ADD } from "../../Redux/actions/action";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { useEffect, useState } from "react";


const SpecialItems = ({ searchQuery }) => {
  const [specialFlavors, setSpecialFlavors] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'flavors'),
      (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const specialData = data.filter(item => item.type === 'Special').filter(item => item.status?.toLowerCase() === "active");
        setSpecialFlavors(specialData);
      },
      (error) => {
        toast.error('Failed to fetch special flavors');
        console.error('Error fetching special flavors:', error);
      }
    );

    return () => unsubscribe();
  }, []);


  const dispatch = useDispatch();
  const send = (item) => {
    dispatch(ADD({ ...item, quantity: 1 }));
    toast.success(`${item.flavor} added to cart!`, {
      position: "top-right",
      autoClose: 1000,
      toastId: item.id, // This ensures unique toasts for each item
    });
  };

  const filteredItems = specialFlavors.filter((item) => {
    if (!searchQuery) {
      return true;
    } else {
      return item.flavor.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) =>
        i < rating ? (
          <FaStar key={i} className="star filled" />
        ) : (
          <FaRegStar key={i} className="star" />
        )
      );
  };

  return (
    <div className="special-container">
      {!searchQuery && <h1 className="special-title">Our Special</h1>}
      <div className="special-grid">
        {filteredItems.map((item) => (
          <div className="special-card" key={item.id}>
            <div
              className="special-card-image"
              style={{ backgroundColor: item.background }}
            >
              <img src={item.image} alt={item.flavor} />
            </div>
            <div className="special-card-content">
              <div className="rating">
                {renderStars(item.rating)}
                <span>({item.rating})</span>
              </div>
              <h3>{item.flavor} </h3>
              <div className="price-container">
                <span className="original-price">{item.previousprice}</span>
                <span className="current-price">₹{item.price}</span>
              </div>
              <Button
                className="buy-now-btn"
                onClick={() => send(item)}
                value="Add to Cart"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialItems;

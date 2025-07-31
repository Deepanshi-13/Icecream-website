import React, { useEffect, useState } from "react";
import "./Flavor.css";
import Button from "../Button/Button";
import { FaArrowLeft, FaArrowRight, FaStar, FaRegStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setFlavors } from "../../Redux/actions/action";
import { ADD } from "../../Redux/actions/action";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import 'react-toastify/dist/ReactToastify.css';

const Flavor = ({ searchQuery, setSearchQuery }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterItems, setFilterItems] = useState([]);
  const [category, setCategory] = useState("");
  const ItemsPerPage = 6;

  const allFlavors = useSelector((state) => state.flavor.flavors);

  // Fetch flavors from Firestore
  useEffect(() => {
    const fetchFlavors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "flavors"));
        const flavorsFromFirebase = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(flavorsFromFirebase);
        dispatch(setFlavors(flavorsFromFirebase));
      } catch (error) {
        console.error("Error fetching flavors from Firestore:", error);
        toast.error("Failed to load flavors.");
      }
    };

    fetchFlavors();
  }, [dispatch]);

  const send = (item) => {
    dispatch(ADD(item));
    setTimeout(() => {
      toast.success(`${item.flavor} added to cart!`, {
        position: "top-right",
        autoClose: 1000,
      });
    }, 100);
  };

  const startIndex = (currentPage - 1) * ItemsPerPage;
  const selectedItems = filterItems.slice(
    startIndex,
    startIndex + ItemsPerPage
  );
  const totalPages = Math.ceil(filterItems.length / ItemsPerPage);

  useEffect(() => {
    let filtered = allFlavors.filter(item => item.type !== "Special");

    if (searchQuery) {
      setCategory("");
      filtered = filtered.filter((item) =>
        item.flavor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }


    if (category !== "") {
      setSearchQuery("");
      filtered = filtered.filter((item) => item.type === category);
      console.log(filtered);
    }

    setFilterItems(filtered);
    setCurrentPage(1);
  }, [category, searchQuery, allFlavors]);

  const PreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const NextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

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
    <div className="flavor-container">
      <div className="flavor-header">
        <h1>Find Your Perfect Pint!</h1>
        <div className="category-buttons">
          <button
            className={`category-btn ${category === "" ? "active" : ""}`}
            onClick={() => setCategory("")}
          >
            All
          </button>
          <button
            className={`category-btn ${category === "BestSeller" ? "active" : ""}`}
            onClick={() => setCategory("BestSeller")}
          >
            Top Seller
          </button>
          <button
            className={`category-btn ${category === "Trending" ? "active" : ""}`}
            onClick={() => setCategory("Trending")}
          >
            Top Trending
          </button>
          <button
            className={`category-btn ${category === "New" ? "active" : ""}`}
            onClick={() => setCategory("New")}
          >
            New Products
          </button>
        </div>
      </div>

      <div className="flavor-grid">
        {selectedItems.map((curr) => (
          <div className="flavor-card" key={curr.id}>
            <div className="card-badge">
              {curr.type === "BestSeller"
                ? "BESTSELLER"
                : curr.type === "Trending"
                  ? "TRENDING"
                  : "NEW"}
            </div>

            <div className="card-header">
              <div
                className="card-image"
                style={{ backgroundColor: curr.background }}
              >
                <img src={curr.image} alt={curr.flavor} />
              </div>
              <div className="card-content">
                <div className="rating">
                  {renderStars(curr.rating)}
                  <span>({curr.rating})</span>
                </div>
                <h3>{curr.flavor} Ice Cream</h3>
                <div className="price-container">
                  {curr.previousPrice && (
                    <span className="original-price">
                      {curr.previousPrice}
                    </span>
                  )}
                  <span className="current-price">₹{curr.price}</span>
                </div>
                <Button
                  className="buy-now-btn"
                  onClick={() => send(curr)}
                  value="Add to Cart"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {filterItems.length > 3 && (
        <div className="pagination">
          <button
            onClick={PreviousPage}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            <FaArrowLeft />
          </button>
          <span className="page-indicator">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={NextPage}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Flavor;

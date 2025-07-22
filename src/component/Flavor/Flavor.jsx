import React, { useEffect, useState } from "react";
import "./Flavor.css";
import Button from "../Button/Button";
import { FaArrowLeft, FaArrowRight, FaStar, FaRegStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import flavorData from "../Flavor/FlavorData";
import { setFlavors } from "../../Redux/actions/action";
import { ADD } from "../../Redux/actions/action";

const Flavor = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterItems, setFilterItems] = useState([]);
  const [category, setCategory] = useState("");
  const ItemsPerPage = 6;

  const allFlavors = useSelector((state) => state.flavor.flavors);
  console.log("All Flavors:", allFlavors);

  useEffect(() => {
    dispatch(setFlavors(flavorData));
  }, [dispatch]);

  const send = (item) => {
    dispatch(ADD(item));
  };

  const startIndex = (currentPage - 1) * ItemsPerPage;
  const selectedItems = filterItems.slice(
    startIndex,
    startIndex + ItemsPerPage
  );
  const totalPages = Math.ceil(filterItems.length / ItemsPerPage);

  useEffect(() => {
    let filtered = flavorData;

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.flavor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category !== "") {
      filtered = filtered.filter((item) => item.type === category);
    }

    setFilterItems(filtered);
    setCurrentPage(1);
  }, [category, searchQuery]);

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
            className={`category-btn ${category === "topSeller" ? "active" : ""
              }`}
            onClick={() => setCategory("topSeller")}
          >
            Top Seller
          </button>
          <button
            className={`category-btn ${category === "topTrending" ? "active" : ""
              }`}
            onClick={() => setCategory("topTrending")}
          >
            Top Trending
          </button>
          <button
            className={`category-btn ${category === "topProducts" ? "active" : ""
              }`}
            onClick={() => setCategory("topProducts")}
          >
            New Products
          </button>
        </div>
      </div>

      <div className="flavor-grid">
        {selectedItems.map((curr) => (
          <div className="flavor-card" key={curr.id}>
            <div className="card-badge">
              {curr.type === "topSeller"
                ? "BESTSELLER"
                : curr.type === "topTrending"
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
    </div>
  );
};

export default Flavor;

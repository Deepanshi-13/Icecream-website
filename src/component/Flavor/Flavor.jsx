import React, { useEffect, useState } from "react";
import "./Flavor.css";
import Button from "../Button/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import flavorData from "../Flavor/FlavorData";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/actions/action";
const Flavor = () => {
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  const [currentPage, setCurrentPage] = useState(1);
  // console.log(currentPage);
  const [filterItems, setFilterItems] = useState([]);

  const [category, setCategory] = useState("");
  // console.log(category)
  const ItemsPerPage = 6;
  const startIndex = (currentPage - 1) * ItemsPerPage;
  const selectedItems = filterItems.slice(
    startIndex,
    startIndex + ItemsPerPage
  );

  useEffect(() => {
    if (category === "") {
      setFilterItems(flavorData);
    } else {
      const filteredFlavors = flavorData.filter(
        (item) => item.type === category
      );
      setFilterItems(filteredFlavors);
    }
    setCurrentPage(1);
  }, [category]);

  //This calculates how many pages you’ll need to display all the items, based on how many you show per page.

  //Math.ceil() rounds a number up to the nearest whole number.

  const totalPages = Math.ceil(filterItems.length / ItemsPerPage);
  console.log(filterItems);

  // Slice data for current page

  //Here:  math.max(prev-1,1) ensures the page doesn't go below 1 (the first page).
  // Math.min(prev+1,totalPages) makes sure it doesn't go beyond the last page.
  // prev is the current page number before the update.
  const PreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const NextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <div className="seller-box">
        <div className="seller-text">
          <h1>Find your perfect pint!</h1>
        </div>
        <div className="seller-button">
          <div className="top-seller">
            <Button
              value="Top Seller"
              onClick={() => setCategory("topSeller")}
            />
          </div>
          <div className="top-trending">
            <Button
              value="Top Trending"
              onClick={() => setCategory("topTrending")}
            />
          </div>
          <div className="new-products">
            <Button
              value="New Products"
              onClick={() => setCategory("topProducts")}
            />
          </div>
        </div>
      </div>
      <div className="flavor-box">
        {selectedItems.map((curr) => {
          return (
            <div className="card " key={curr.id}>
              <div
                className="flavor-image"
                style={{ backgroundColor: curr.background }}
              >
                <img src={curr.image} alt="icecream-image" />
              </div>
              <div className="flavor-content">
                <div className="flavor-rating">
                  <p> Rating:{curr.rating}</p>
                </div>
                <div className="flavor-name">
                  <h4>{curr.flavor} Icecream</h4>
                </div>
                <div className="flavor-prize">
                  <div className="previous-prize">
                    <p>{curr.previousPrize}</p>
                  </div>
                  <div className="prize">
                    <b>
                      <p style={{ color: "rgb(219, 71, 120)" }}>{curr.prize}</p>
                    </b>
                  </div>
                </div>
              </div>
              <Button value="Buy Now" onClick={() => send(curr)} />
            </div>
          );
        })}
      </div>

      {/* Pagination control */}
      <div className="Pagination-control">
        <button onClick={PreviousPage} className="arrow">
          <FaArrowLeft />
        </button>
        <span>
          {currentPage}of{totalPages}
        </span>
        <button onClick={NextPage} className="arrow">
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default Flavor;

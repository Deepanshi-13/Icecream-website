// Shop.jsx
import Flavor from "../component/Flavor/Flavor";
import "./Shop.css";
import React, { useState } from "react";
const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Flavor searchQuery={searchQuery} />;
    </>
  );
};

export default Shop;

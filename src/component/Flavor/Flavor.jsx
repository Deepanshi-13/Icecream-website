import React, { useEffect, useState } from "react";
import "./Flavor.css";
import strawberry from "../../assets/strawberry1.png";
import vanilla from "../../assets/vanilla.png";
import chocolate from "../../assets/chocolate.png";
import mango from "../../assets/mango.png";
import butterScotch from "../../assets/butterScotch.png";
import blueberry from "../../assets/blueberry.png";
import mintChocolate from "../../assets/mintChocolate.png";
import pistachio from "../../assets/pistachio.png";
import coffee from "../../assets/coffee.png";
import darkChocolate from "../../assets/darkChocolate.png";
import butterPecan from "../../assets/butterPecan.png";
import cookies from "../../assets/cookies.png";
import blueMoon from "../../assets/bluemoon.png";
import rockRoad from "../../assets/rockyRoad.png";
import coconut from "../../assets/coconut.png";
import rose from "../../assets/rose.png";
import pineapple from "../../assets/pineapple.png";
import chocoChip from "../../assets/chocoChip.png";
import oreo from "../../assets/oreo.png";
import kiwi from "../../assets/kiwi.png";
import Button from "../Button/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Flavor = () => {


  const item = [
    {
      id: "1",
      image: strawberry,
      flavor: "Strawberry",
      background: "#ffe4ec",
      rating: "4",
      previousPrize: "₹90",
      prize: "₹ 80",
      type:"topSeller"
    },
    {
      id: "2",
      image: vanilla,
      flavor: "Vanilla",
      background: "#fff8e1",
      rating: "4",
      previousPrize: "₹70",
      prize: "₹60",
      type:"topSeller"
    },
    {
      id: "3",
      image: chocolate,
      flavor: "Chocolate",
      background: "#f3e0d2",
      rating: "5",
      previousPrize: "₹90",
      prize: "₹80",
      type:"topProducts",
    },
    {
      id: "4",
      image: mango,
      flavor: "Mango",
      background: "#fff3cd",
      rating: "5",
      previousPrize: "₹80",
      prize: "₹75",
      type:"topProducts",
    },
    {
      id: "5",
      image: blueberry,
      flavor: "Blueberry",
      background: "#e8e6ff",
      rating: "4",
      previousPrize: "₹75",
      prize: "₹70",
        type:"topSeller"
    },
    {
      id: "6",
      image: butterScotch,
      flavor: "Butterscotch",
      background: "#fce8c3",
      rating: "5",
      previousPrize: "₹85",
      prize: "₹80",
      type:"topTrending",
    },
    {
      id: "7",
      image: blueMoon,
      flavor: "BlueMoon",
      background: "#fce8c3",
      rating: "4.3",
      previousPrize: "₹65",
      prize: "₹60",
      type:"topProducts",
    },
    {
      id: "8",
      image: pistachio,
      flavor: "Pistachio",
      background: "#fce8c3",
      rating: "4.3",
      previousPrize: "₹90",
      prize: "₹80",
      type:"topTrending",
    },
    {
      id: "9",
      image: coffee,
      flavor: " Coffee",
      background: "#fce8c3",
      rating: "4",
      previousPrize: "₹70",
      prize: "₹60",
      type:"topProducts",
    },
    {
      id: "10",
      image: darkChocolate,
      flavor: "Dark-Chocolate",
      background: "#fce8c3",
      rating: "5",
      previousPrize: "₹90",
      prize: "₹70",
      type:"topTrending",
    },
    {
      id: "11",
      image: butterPecan,
      flavor: "Butter-Pecan ",
      background: "#fce8c3",
      rating: "4.1",
      previousPrize: "₹50",
      prize: "₹40",
      type:"topProducts",
    },
    {
      id: "12",
      image: cookies,
      flavor: "Cookies ",
      background: "#fce8c3",
      rating: "4.5",
      previousPrize: "₹60",
      prize: "₹50",
      type:"topProducts",
    },
    {
      id: "13",
      image: mintChocolate,
      flavor: "Mint-Chocolate",
      background: "#fce8c3",
      rating: "4.2",
      previousPrize: "₹80",
      prize: "₹70",
      type:"topSeller"
    },
    
    {
      id: "14",
      image: rockRoad,
      flavor: "RockRoad",
      background: "#fce8c3",
      rating: "4.1",
      previousPrize: "₹75",
      prize: "₹70",
      type:"topProducts",
    },
    {
      id: "15",
      image: coconut,
      flavor: "Coconut",
      background: "#fce8c3",
      rating: "4.1",
      previousPrize: "₹65",
      prize: "₹60",
      type:"topTrending",
    },
    {
      id: "16",
      image: rose,
      flavor: "Rose",
      background: "#fce8c3",
      rating: "4.5",
      previousPrize: "₹65",
      prize: "₹60",
      type:"topSeller",
    },
    {
      id: "17",
      image: pineapple,
      flavor: "Pineapple",
      background: "#fce8c3",
      rating: "3.9",
      previousPrize: "₹50",
      prize: "₹45",
      type:"topSeller"
    },
    {
      id: "18",
      image: chocoChip,
      flavor: "ChocoChip ",
      background: "#fce8c3",
      rating: "4.3",
      previousPrize: "₹70",
      prize: "₹65",
      type:"topTrending",
    },
    {
      id: "19",
      image: oreo,
      flavor: "Oreo ",
      background: "#fce8c3",
      rating: "5",
      previousPrize: "₹75",
      prize: "₹70",
      type:"topTrending",
    },
    {
      id: "20",
      image: kiwi,
      flavor: "Kiwi ",
      background: "#fce8c3",
      rating: "4",
      previousPrize: "₹60",
      prize: "₹55",
      type:"topSeller",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  // console.log(currentPage);
  const [filterItems,setFilterItems] = useState([]);

  const [category,setCategory] = useState("");
  // console.log(category)
  const ItemsPerPage = 6;
  const startIndex = (currentPage - 1) * ItemsPerPage;
  const selectedItems = filterItems.slice(startIndex, startIndex + ItemsPerPage);
  
  useEffect(()=>{
    if(category== "") setFilterItems(item);
    else{

      const filteredFlavors = item.filter((item)=>item.type === category);
      setFilterItems(filteredFlavors);
    }
    setCurrentPage(1)
  },[category])
  
  //This calculates how many pages you’ll need to display all the items, based on how many you show per page.

  //Math.ceil() rounds a number up to the nearest whole number.
  
  const totalPages = Math.ceil(filterItems.length / ItemsPerPage);
  console.log(filterItems)



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
            <Button value="Top Seller" onClick={()=>setCategory("topSeller")} />
          </div>
          <div className="top-trending">
            <Button value="Top Trending" onClick={()=>setCategory("topTrending")} />
          </div>
          <div className="new-products">
            <Button value="New Products" onClick={()=>setCategory("topProducts")}/>
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
              <Button value="Buy Now" />
            </div>
          );
        })}
      </div>

      {/* Pagination control */}
      <div className="Pagination-control">
        <button onClick={PreviousPage} className="arrow"> 
        <FaArrowLeft/>
        </button>
        <span>
          {currentPage}of{totalPages}
        </span>
        <button onClick={NextPage} className="arrow">
          <FaArrowRight/>
        </button>
      </div>
    </>
  );
};

export default Flavor;

import React from "react";
import "./Flavor.css";
import strawberry from "../../assets/strawberry1.png";
import vanilla from "../../assets/vanilla.png";
import chocolate from "../../assets/chocolate.png";
import mango from "../../assets/mango.png";
import butterScotch from "../../assets/butterScotch.png";
import blueberry from "../../assets/blueberry.png";
import Button from "../Button/Button";
// import rating from "../../assets/rating";

const Seller = () => {
  return (
    <>
      <div className="seller-box">
        <div className="seller-text">
          <h1>Find your perfect pint!</h1>
        </div>
        <div className="seller-button">
          <div className="top-seller">
           <Button value="Top Seller"/>
          </div>
          <div className="top-trending">
             <Button value="Top Trending"/>
          </div>
          <div className="new-products">
          <Button value="New Products"/>
          </div>
        </div>
      </div>
    </>
  );
};

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
    },
    {
      id: "2",
      image: vanilla,
      flavor: "Vanilla",
      background: "#fff8e1",
      rating: "4",
      previousPrize: "₹70",
      prize: "₹60",
    },
    {
      id: "3",
      image: chocolate,
      flavor: "Chocolate",
      background: "#f3e0d2",
      rating: "4",
      previousPrize: "₹90",
      prize: "₹80",
    },
    {
      id: "4",
      image: mango,
      flavor: "Mango",
      background: "#fff3cd",
      rating: "4",
      previousPrize: "₹80",
      prize: "₹75",
    },
    {
      id: "5",
      image: blueberry,
      flavor: "Blueberry",
      background: "#e8e6ff",
      rating: "4",
      previousPrize: "₹75",
      prize: "₹70",
    },
    {
      id: "6",
      image: butterScotch,
      flavor: "Butterscotch",
      background: "#fce8c3",
      rating: "4",
      previousPrize: "₹85",
      prize: "₹80",
    },
  ];

  return (
    <>
    <Seller/>
      <div className="flavor-box">
        {item.map((curr) => {
          return (
          
              <div className="card " key={curr.id}>
                <div
                  className="flavor-image"
                  style={{ backgroundColor: curr.background }}
                >
                  <img src={curr.image}  alt="icecream-image"/>
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
                        <p style={{ color: "rgb(219, 71, 120)" }}>
                          {curr.prize}
                        </p>
                      </b>
                    </div>
                  </div>
                </div>
                <Button value="Buy Now" />
              </div>
           
          );
        })}
      </div>
    </>
  );
};

export default Flavor;













 
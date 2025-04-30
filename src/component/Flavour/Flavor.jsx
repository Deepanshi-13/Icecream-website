import React from "react";
import strawberry from "../../assets/strawberry1.png";
import vanilla from "../../assets/vanilla.png";
import chocolate from "../../assets/chocolate.png";
import mango from "../../assets/mango.png";
import butterScotch from "../../assets/butterScotch.png";
import blueberry from "../../assets/blueberry.png";
import Button from "../Button/Button";
import rating from "../../assets/rating";
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
      image: butterScotch,
      flavor: "Butterscotch",
      background: "#fce8c3",
      rating: "4",
      previousPrize: "₹85",
      prize: "₹80",
    },
    {
      id: "6",
      image: blueberry,
      flavor: "Blueberry",
      background: "#e8e6ff",
      rating: "4",
      previousPrize: "₹75",
      prize: "₹70",
    },
  ];

  return (
    <>
      <div className="flavor-box">
        <div className="flavor-image">
          <img src={strawberry}/>
        </div>
        <div className="flavor-content">
          <div className="flavor-rating">
           <p> Rating:</p>
          </div>
          <div className="flavor-name">

          </div>
           <div className="flavor-prize">
           <div className="previous-prize">

           </div>
           <div className="prize">

           </div>

           </div>

        </div>
        <Button/>
      </div>
    </>
  );
};

export default Flavor;

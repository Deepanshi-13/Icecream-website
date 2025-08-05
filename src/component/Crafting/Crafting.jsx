import React from "react";
import "./Crafting.css";
import mulberry from "../../assets/mulberry.png";
import strawberry from "../../assets/strawberry.png";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.jsx";
const Crafting = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="craft-box">
        <div className="craft-image">
          <div className="left-image">
            <img src={mulberry} alt="mulberry" />
          </div>
          <div className="right-image">
            <img src={strawberry} alt="strawberry" />
          </div>
        </div>

        <div className="craft-text">
          <div className="craft-content">
            <h3>We're lebagol's , and we love Crafting</h3>
            <h3>Unbelievably delicious stripes tubs of joys.</h3>
          </div>
          <div className="craft-para">
            <p>
              Lebagol's is a certificated B Corp,as we believe in business as a
              force for good. We create both super indulgent and healthier
              products wishlist trending as lightly as we can on our planet,and
              have reduced our carbon intensity by 21% since 20
            </p>
          </div>
          <div className="arrow-box">
            <div className="arrow-div">
              <li><b>Scoop Shop Flavors</b></li>
            </div>
            <div className="arrow-div">
              <li><b>Ice Cream Pints</b></li>
            </div>
            <div className="arrow-div">
              <li><b>Chocolate Love</b></li>
            </div>
          </div>
          <Button value="Buy Now" onClick={()=>navigate("flavor")}/>
        </div>
      </div>
    </>
  );
};

export default Crafting;

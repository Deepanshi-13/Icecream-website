import React from "react";
import "./Crafting.css";
import mulberry from "../../assets/mulberry.png";
import strawberry from "../../assets/strawberry.png";
import arrow from "../../assets/arrow.png";
const Crafting = () => {
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
              <img src={arrow} alt="arrow-icon" />
              <h4>Scoop Shop Flavors</h4>
            </div>
            <div className="arrow-div">
              <img src={arrow} alt="arrow-icon" />
              <h4>Ice Cream Pints</h4>
            </div>
            <div className="arrow-div">
              <img src={arrow} alt="arrow-icon" />
              <h4>Chocolate Love</h4>
            </div>
          </div>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Crafting;

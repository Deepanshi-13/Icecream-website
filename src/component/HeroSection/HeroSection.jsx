import React from "react";
import "./HeroSection.css";
import creationIcecream from "../../assets/creation-IceCream.png";
import mainIceCream from "../../assets/mainIceCream.jpg";
import bg from "../../assets/bg.png";
import candy from "../../assets/candy.png";
import smallCake from "../../assets/smallCake.png";
import Button from "../Button/Button";
const Count = () => {
  const num = [
    {
      number: "2000",
      text: "Types Of Icecream",
    },
    {
      number: "22+",
      text: "Offline Shops",
    },
    {
      number: "100k",
      text: "Happy Customers",
    },
  ];
  return (
    <>
      <div className="number-container">
        {num.map((curr) => {
          return (
            <div className="numbers">
              <div className="num-div">
                <div className="number-box">
                  <h2>{curr.number}</h2>
                </div>
                <div className="text-box">
                  <p>{curr.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const MiddleSection = () => {
  return (
    <>
      <div className="middle-box">
        <div className="middle-image">
          <img src={bg} alt="bg-image" />
        </div>
        <div className="middle-content">
          <div className="sweet-text">
            <div className="line1">
              <h1>Satisfy Your</h1>
              <h1 className="sweet">Sweet</h1>
            </div>
            <div className="line2">
              <h1>Tooth.</h1>
              <h1 className="naturally">Naturally</h1>
            </div>
          </div>
          <div className="candy-box">
            <img src={candy} alt="candy" />
          </div>
          <div className="cake-box">
            <img src={smallCake} alt="cake" />
          </div>
        </div>
      </div>
    </>
  );
};

const HeroSection = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-box">
          <div className="content-box">
            <h1>Cool Down With</h1>
            <h1 className="creamy-text">Your Creamy</h1>
            <div className="creation-icecream">
              <h1>Creations</h1>
              <img src={creationIcecream} alt="icecream" />
            </div>
            <p>The perfect blend of creamy and dreamy</p>
            <p>Taste the magic in every scoop</p>
            <div className="shopnow-div">
              <Button value="Buy Now"/>
              <button className="more-flavor">More Flavor</button>
            </div>
          </div>
          <div className="image-box">
            <img src={mainIceCream} alt="icecream" />
          </div>
        </div>
        <Count />
        <MiddleSection />
      </div>
    </>
  );
};

export default HeroSection;

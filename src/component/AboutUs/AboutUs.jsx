import React from "react";
import "./AboutUs.css";
import aboutImage from "../../assets/about.png";
import Button from "../Button/Button";

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Our Story</h1>
        <h2>Our Traditonal & Modern Services </h2>
        <h2>Since 1970</h2>
      </div>
      <div className="story-text">
        <div className="story-text1">
          <h3>About us</h3>
          <p>
            At ScoopieDoo, we bring happiness in every scoop! Our passion is
            serving delicious, handcrafted ice creams to satisfy every sweet
            tooth. It all started with a dream: to create the creamiest, most
            flavorful ice cream using natural ingredients and love.
          </p>
        </div>
        <div className="story-image">
          <img src={aboutImage} alt="icecream" />
        </div>
        <div>
          <div className="story-text2">
            <h3>Bagery Overview</h3>
            <p>
              "At ScoopieDoo, we believe that happiness starts with a spoonful
              of joy. Founded with a passion for crafting delicious our mission
              is to deliver smiles one scoop at a time. Join us in celebrating
              the simple pleasure of great ice cream — delivered right to your
              door!"
            </p>
          </div>
          <div className="about-values">
            <h3>What We Believe</h3>
            <ul>
              <li>Quality comes first always fresh, always delightful.</li>
              <li>Community matters we support local and give back often.</li>
              <li>Smiles guaranteed happiness is our main ingredient.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="aboutUs-btn">
        <Button className="btn" value="Order Now" />
      </div>
    </div>
  );
};

export default AboutUs;

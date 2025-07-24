import React from 'react';
import "./About.css";
import aboutImage from "../assets/about.png";
import { FaIceCream, FaHeart, FaLeaf, FaSmile } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Sweet Journey</h1>
          <div className="hero-subtitles">
            <h2 className="hero-subtitle">Crafting Happiness Since 1970</h2>
            <p className="hero-tagline">Traditional recipes, modern delight</p>
          </div>
        </div>
      </section>

      <main className="about-content">
        <div className="story-image-row">
          <section className="story-section">
            <div className="story-card">
              <h2 className="section-title">
                <span className="title-icon">🍦</span>
                Our Bakery Story
              </h2>
              <p className="section-text">
                At ScoopieDoo, we believe that happiness starts with a spoonful
                of joy. Founded with a passion for crafting delicious treats, our mission
                is to deliver smiles one scoop at a time. Join us in celebrating
                the simple pleasure of great ice cream — made with love and served
                right to your door!
              </p>
            </div>
          </section>

          <section className="image-showcase">
            <img src={aboutImage} alt="Delicious ScoopieDoo ice cream" className="featured-image" />
          </section>
        </div>

        <section className="values-section">
          <h2 className="values-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaIceCream className="value-icon" />
              <h3>Quality First</h3>
              <p>Always fresh, always delightful</p>
            </div>
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>Community Love</h3>
              <p>Supporting local, giving back</p>
            </div>
            <div className="value-card">
              <FaLeaf className="value-icon" />
              <h3>Natural Goodness</h3>
              <p>Authentic ingredients only</p>
            </div>
            <div className="value-card">
              <FaSmile className="value-icon" />
              <h3>Joy Guaranteed</h3>
              <p>Happiness in every scoop</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About;
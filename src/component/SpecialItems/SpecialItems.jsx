import "./SpecialItems.css";
import falooda from "../../assets/falooda.png";
import matkaKulfi from "../../assets/matkaKulfi.png";
import icecreamRoll from "../../assets/icecreamRoll.png";
import scoop from "../../assets/scoop.png";
import tuttiFrutti from "../../assets/tuttiFruti.png";
import cone from "../../assets/cone.png";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { FaStar, FaRegStar } from "react-icons/fa";
import { ADD } from "../../Redux/actions/action";

const SpecialItems = () => {
  const dispatch = useDispatch();
  const send = (item) => {
    dispatch(ADD({ ...item, quantity: 1 }));
  };
 

  const specialIcecream = [
    {
      id: "1",
      image: falooda,
      flavor: "Falooda",
      background: "#FFD1DC",
      rating: 4,
      previousprice: "₹85",
      price: "80",
    },
    {
      id: "2",
      image: matkaKulfi,
      flavor: "Matka Kulfi",
      background: "#E0C097",
      rating: 4,
      previousprice: "₹85",
      price: "80",
    },
    {
      id: "3",
      image: icecreamRoll,
      flavor: "Icecream Roll",
      background: "#FFE4E1",
      rating: 4,
      previousprice: "₹85",
      price: "80",
    },
    {
      id: "4",
      image: scoop,
      flavor: "Scoop",
      background: "#D2B48C",
      rating: 4,
      previousprice: "₹85",
      price: "80",
    },
    {
      id: "5",
      image: tuttiFrutti,
      flavor: "Tutti Frutti",
      background: "#fce8c3",
      rating: 4,
      previousprice: "₹85",
      price: "80",
    },
    {
      id: "6",
      image: cone,
      flavor: "Cone",
      background: "#E6E6FA",
      rating: 4,
      previousprice: "₹85",
      price: "80",
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) =>
        i < rating ? (
          <FaStar key={i} className="star filled" />
        ) : (
          <FaRegStar key={i} className="star" />
        )
      );
  };

  return (
    <div className="special-container">
      <h1 className="special-title">Our Special</h1>
      <div className="special-grid">
        {specialIcecream.map((item) => (
          <div className="special-card" key={item.id}>
            <div
              className="special-card-image"
              style={{ backgroundColor: item.background }}
            >
              <img src={item.image} alt={item.flavor} />
            </div>
            <div className="special-card-content">
              <div className="rating">
                {renderStars(item.rating)}
                <span>({item.rating})</span>
              </div>
              <h3>{item.flavor} </h3>
              <div className="price-container">
                <span className="original-price">{item.previousprice}</span>
                <span className="current-price">{item.price}</span>
              </div>
              <Button
                className="buy-now-btn"
                onClick={() => send(item)}
                value="Add to Cart"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialItems;

import "./SpecialItems.css";
import falooda from "../../assets/falooda.png";
import matkaKulfi from "../../assets/matkaKulfi.png";
import icecreamRoll from "../../assets/icecreamRoll.png";
import scoop from "../../assets/scoop.png";
import tuttiFrutti from "../../assets/tuttiFruti.png";
import cone from "../../assets/cone.png";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/actions/action";

const SpecialItems = () => {
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };
  const specialIcecream = [
    {
      id: "1",
      image: falooda,
      flavor: "Falooda",
      background: "#FFD1DC",
      rating: "4",
      previousPrize: "₹85",
      prize: "₹80",
    },
    {
      id: "2",
      image: matkaKulfi,
      flavor: "Matka Kulfi",
      background: "#E0C097 ",
      rating: "4",
      previousPrize: "₹85",
      prize: "₹80",
    },

    {
      id: "3",
      image: icecreamRoll,
      flavor: "Icecream Roll",
      background: "#FFE4E1",
      rating: "4",
      previousPrize: "₹85",
      prize: "₹80",
    },
    {
      id: "4",
      image: scoop,
      flavor: "Scoop",
      background: "#D2B48C",
      rating: "4",
      previousPrize: "₹85",
      prize: "₹80",
    },

    {
      id: "5",
      image: tuttiFrutti,
      flavor: "Tutti Frutti",
      background: "#fce8c3",
      rating: "4",
      previousPrize: "₹85",
      prize: "₹80",
    },
    {
      id: "6",
      image: cone,
      flavor: "Cone",
      background: "#E6E6FA",
      rating: "4",
      previousPrize: "₹85",
      prize: "₹80",
    },
  ];
  return (
    <>
      <div className="special-box">
        <div>
          <h1>Our Special</h1>
        </div>

        <div className="special-item">
          {specialIcecream.map((currElem) => {
            return (
              <div className="cards " key={currElem.id}>
                <div
                  className="special-image"
                  style={{ backgroundColor: currElem.background }}
                >
                  <img src={currElem.image} alt="special-image" />
                </div>
                <div className="special-content">
                  <div className="special-rating">
                    <p> Rating:{currElem.rating}</p>
                  </div>
                  <div className="special-name">
                    <h4>{currElem.flavor} Icecream</h4>
                  </div>
                  <div className="special-prize">
                    <div className="previous-prize">
                      <p>{currElem.previousPrize}</p>
                    </div>
                    <div className="prize">
                      <b>
                        <p style={{ color: "rgb(219, 71, 120)" }}>
                          {currElem.prize}
                        </p>
                      </b>
                    </div>
                  </div>
                </div>
                <Button
                  value="Buy Now
           "
                  onClick={() => send(currElem)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SpecialItems;

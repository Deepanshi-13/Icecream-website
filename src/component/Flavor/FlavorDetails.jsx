import "./FlavorDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { REMOVE } from "../../Redux/actions/action";

const FlavorDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cart.carts);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };
  const remove = (e) => {
    dispatch(REMOVE(e));
    history("/shop");
  };

  useEffect(() => {
    compare();
  }, [id, getData]);

  return (
    <div className="flavor-details-container">
      <div className="flavor-hero">
        <div className="hero-content">
          <h1>{data[0]?.flavor || "Flavor"} Details</h1>
          <p className="hero-subtitle">Discover the magic in every scoop</p>
        </div>
      </div>

      <div className="flavor-content">
        {data.map((elem) => (
          <div key={elem.id} className="flavor-card">
            <div className="flavor-image-container">
              <img
                src={elem.image}
                alt={elem.flavor}
                className="flavor-image"
              />
              <div className="flavor-badge">Popular</div>
            </div>

            <div className="flavor-info">
              <div className="flavor-header">
                <h2>{elem.flavor}</h2>
                <div className="price-tag">₹{elem.price}</div>
              </div>

              <div className="flavor-meta">
                <div className="meta-item">
                  <span className="meta-label">Shop:</span>
                  <span className="meta-value">ScoopieDoo</span>
                </div>

                <div className="meta-item rating">
                  <span className="meta-label">Rating:</span>

                  <span className="rating-value">{elem.rating}</span>
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{
                      color: "hotpink",
                      fontSize: 20,
                      cursor: "pointer",
                      padding: "6px 12px",
                    }}
                    onClick={() => {
                      remove(elem);
                    }}
                  />
                </div>

                <div className="meta-item">
                  <span className="meta-label">Orders:</span>
                  <span className="meta-value">1,175+ recently</span>
                </div>
              </div>

              <div className="flavor-description">
                <h3>About this flavor</h3>
                <p>
                  Indulge in our creamy {elem.flavor} flavor, crafted with
                  premium ingredients for an unforgettable taste experience.
                  Each scoop is a perfect balance of rich flavor and smooth
                  texture.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorDetails;

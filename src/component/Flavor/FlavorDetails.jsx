import "./FlavorDetails.css";
import chocoChip from "../../assets/chocoChip.png";

const FlavorDetails = () => {
  return (
    <>
      <div className="falvorDetails-container">
        <h2>Items Details Page</h2>
        <section className="flavorDetails-section">
          <div className="itemsDetails">
            <div className="items_img">
              <img src={chocoChip} alt="icecream-image" />
            </div>
            <div className="details">
              <table>
                <tr>
                  <td>
                    <p>
                      <strong>Shop:</strong>ScoopieDoo
                    </p>
                    <p>
                      <strong>Price:</strong>80₹
                    </p>
                    <p>
                      <strong>Flavor:</strong>ChocoChip
                    </p>
                  </td>
                  <td>
                    <p className="rating">
                      <strong>Rating:</strong><span className="star">3.5★</span>
                    </p>
                    <p>
                      <strong>Order Review:</strong>1175 + Order placed from
                      here recently
                    </p>
                    <p className="trash">
                      <strong>Remove:</strong>
                      <i className="fas fa-trash"></i>
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FlavorDetails;

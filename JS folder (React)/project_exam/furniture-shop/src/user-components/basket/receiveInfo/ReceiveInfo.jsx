import "./ReceiveInfo.css";
import { useContext } from "react";
import { BasketContext } from "../../../context/BasketContext";
import { ReceiveInfoContext } from "../../../context/ReceiveInfoContext";

export default function ReceiveInfo() {
  const { basketItems } = useContext(BasketContext);
  const { receiveInfo, setInfo } = useContext(ReceiveInfoContext);

  return (
    <div className="receive-info">
      <h3>How will you receive the order?</h3>

      <div className="receive-choice">
        <button
          disabled={!basketItems.length > 0}
          onClick={() =>
            setInfo({
              name: "shop",
              option: 0,
              price: 0,
            })
          }
          type="button"
          className={
            receiveInfo.name === "shop" && basketItems.length > 0
              ? "container-receive flex-elements active"
              : "container-receive flex-elements"
          }
        >
          <div className="icon">
            <i className="bx bxs-store"></i>
          </div>

          <div className="receive-method">
            <p>Furniture-Shop</p>
            <p>Choice store</p>
          </div>
        </button>

        <button
          disabled={!basketItems.length > 0}
          onClick={() =>
            setInfo({
              name: "home",
              option: 0,
              price: 0,
            })
          }
          type="button"
          className={
            receiveInfo.name === "home" && basketItems.length > 0
              ? "container-receive flex-elements active"
              : "container-receive flex-elements"
          }
        >
          <div className="icon">
            <i className="bx bxs-home"></i>
          </div>

          <div className="receive-method">
            <p>To Home / To Office</p>
            <p>Shipping calculation</p>
          </div>
        </button>
      </div>

      {receiveInfo.name === "shop" && basketItems.length > 0 && (
        <div className="receive-shop">
          <h3>Place of Receipt</h3>

          <button
            onClick={() => setInfo({ name: "shop", option: 1, price: 0 })}
            type="button"
            className={
              receiveInfo.option === 1
                ? "container-receive active"
                : "container-receive"
            }
          >
            <div className="receive-method flex-elements">
              <p>Furniture-Shop Sofia</p>
              <p>$0,00</p>
            </div>

            <span>Delivery within 7 business days</span>
          </button>

          <button
            onClick={() => setInfo({ name: "shop", option: 2, price: 0 })}
            type="button"
            className={
              receiveInfo.option === 2
                ? "container-receive active"
                : "container-receive"
            }
          >
            <div className="receive-method flex-elements">
              <p>Furniture-Shop Plovdiv</p>
              <p>$0,00</p>
            </div>

            <span>Delivery within 7 business days</span>
          </button>

          <button
            onClick={() => setInfo({ name: "shop", option: 3, price: 0 })}
            type="button"
            className={
              receiveInfo.option === 3
                ? "container-receive active"
                : "container-receive"
            }
          >
            <div className="receive-method flex-elements">
              <p>Furniture-Shop Varna</p>
              <p>$0,00</p>
            </div>

            <span>Delivery within 7 business days</span>
          </button>
        </div>
      )}

      {receiveInfo.name === "home" && basketItems.length > 0 && (
        <div className="receive-home">
          <h3>Delivery</h3>

          <button
            onClick={() => setInfo({ name: "home", option: 4, price: 25 })}
            type="button"
            className={
              receiveInfo.option === 4 && basketItems.length > 0
                ? "container-receive active"
                : "container-receive"
            }
          >
            <div className="receive-method flex-elements">
              <p>Delivery with pickup from a car</p>
              <p>$25,00</p>
            </div>

            <p>Delivery within 7 business days</p>
          </button>

          <button
            onClick={() => setInfo({ name: "home", option: 5, price: 95 })}
            type="button"
            className={
              receiveInfo.option === 5
                ? "container-receive active"
                : "container-receive"
            }
          >
            <div className="receive-method flex-elements">
              <p>Door-to-door delivery</p>
              <p>$95,00</p>
            </div>

            <p>Delivery within 7 business days</p>
          </button>
        </div>
      )}
    </div>
  );
}

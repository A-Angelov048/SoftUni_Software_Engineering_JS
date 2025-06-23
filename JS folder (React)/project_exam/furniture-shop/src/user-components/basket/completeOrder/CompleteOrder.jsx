import "./CompleteOrder.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutItems from "../checkoutItems/CheckoutItems";
import SubmitButton from "../../../shared-components/submit-button/SubmitButton";

export default function CompleteOrder({
  state,
  paymentInfo,
  changeInfoDeliver,
}) {
  const [toggleArrow, setToggleArrow] = useState(false);

  return (
    <div className="order">
      <div className="order-header">
        <h3>Basket</h3>
        <Link className="link" to={"/basket"}>
          Back to basket
        </Link>
      </div>

      <div className="order-items">
        <div className="order-images">
          {state.furniture.map(
            (current, index) =>
              index <= 3 && (
                <img
                  key={current._id}
                  src={current.imageUrl[0]}
                  alt={`Product ${index + 1}`}
                />
              )
          )}
        </div>

        <div className="open-order">
          <i
            onClick={() => setToggleArrow(true)}
            className="bx bxs-right-arrow"
          ></i>
        </div>

        {toggleArrow && (
          <div onClick={() => setToggleArrow(false)} className="overlay">
            <div className="full-order" onClick={(e) => e.stopPropagation()}>
              <header className="header-full-order">
                <h3>{`My products (${state.furniture.length})`}</h3>
                <div className="close-order">
                  <i
                    onClick={() => setToggleArrow(false)}
                    className="bx bx-x"
                  ></i>
                </div>
              </header>

              {state.furniture.map((current, index) => (
                <CheckoutItems
                  currentItem={current}
                  index={index}
                  key={current._id}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="order-summary">
        <div className="summary-row">
          <span>Products:</span>
          <span>{"$" + state.furniturePrice.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span>
            {state.shippingPrice === 0
              ? "Gratis"
              : `$${state.shippingPrice.toFixed(2)}`}
          </span>
        </div>
        <div className="summary-row total">
          <span>Total amount:</span>
          <span>{`$${(state.furniturePrice * 1.2 + state.shippingPrice).toFixed(
            2
          )}`}</span>
        </div>
        <div className="low-font">
          <span>(including VAT)</span>
        </div>
      </div>

      <SubmitButton
        disabledButton={paymentInfo.option === 0 || !changeInfoDeliver}
        buttonName={"Complete your order"}
      />
    </div>
  );
}

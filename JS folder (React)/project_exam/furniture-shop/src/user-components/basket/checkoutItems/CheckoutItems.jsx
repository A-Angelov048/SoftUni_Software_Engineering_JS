import "./CheckoutItems.css";
import { Fragment, useContext } from "react";
import { BasketContext } from "../../../context/BasketContext";

export default function CheckoutItems({ currentItem, index }) {
  const { basketItems } = useContext(BasketContext);

  return (
    <div className="basket-products">
      <img
        className="image-product"
        src={currentItem.imageUrl[0]}
        alt={`Product ${index + 1}`}
      />
      <div className="info-product">
        <p className="name">{currentItem.name}</p>
        <p>
          {basketItems.map(
            (x) =>
              x.id === currentItem._id && (
                <Fragment key={x.id}>{`Quantity: ${x.quantity}`}</Fragment>
              )
          )}
        </p>
      </div>
      <span>
        {basketItems.map(
          (x) =>
            x.id === currentItem._id && (
              <Fragment key={x.id}>{`$${(x.quantity * x.price).toFixed(
                2
              )}`}</Fragment>
            )
        )}
      </span>
    </div>
  );
}

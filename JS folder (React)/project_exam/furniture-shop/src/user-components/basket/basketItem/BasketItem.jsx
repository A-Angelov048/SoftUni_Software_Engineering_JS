import "./BasketItem.css";
import { Fragment, useContext } from "react";
import { BasketContext } from "../../../context/BasketContext";
import { useUpdateWishlist } from "../../../hooks/useFurnitureResponse";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

export default function BasketItems({ currentItem, index }) {
  const { userId } = useContext(AuthContext);
  const { basketItems, quantityHandler, removeBasketState } =
    useContext(BasketContext);

  const [heartStatus, handleWishlist] = useUpdateWishlist();

  return (
    <>
      <div className="basket-item">
        <Link to={`/details-furniture/${currentItem._id}`}>
          <img src={currentItem.imageUrl[0]} />
        </Link>

        <div className="item-details">
          <h3>{currentItem.name}</h3>
          <div className="actions">
            <button className="delete-btn" type="button">
              <i
                onClick={() => {
                  removeBasketState(currentItem._id);
                }}
                className="bx bx-trash bx-tada-hover"
              ></i>
            </button>
            <button className="heart-btn" type="button">
              <i
                onClick={async () => {
                  handleWishlist(currentItem._id);
                }}
                className={
                  heartStatus === "add" ||
                  (currentItem.listUserLikes.includes(userId) &&
                    heartStatus === "")
                    ? "bx bxs-heart bx-tada-hover active"
                    : "bx bxs-heart bx-tada-hover"
                }
              ></i>
            </button>
          </div>
        </div>

        <div className="quantity-btn">
          <button
            onClick={() => {
              quantityHandler(currentItem._id, "decrement");
            }}
            name="minus"
            type="button"
          >
            <i className="bx bx-minus"></i>
          </button>

          <p>
            {basketItems.map(
              (x) =>
                x.id === currentItem._id && (
                  <Fragment key={x.id}>{x.quantity}</Fragment>
                )
            )}
          </p>

          <button
            onClick={() => {
              quantityHandler(currentItem._id, "increment");
            }}
            name="plus"
            type="button"
          >
            <i className="bx bx-plus"></i>
          </button>
        </div>

        <p className="price">
          {basketItems.map(
            (x) =>
              x.id === currentItem._id && (
                <Fragment key={x.id}>
                  {"$" + currentItem.price * x.quantity}
                </Fragment>
              )
          )}
        </p>
      </div>

      {basketItems.length - 1 !== index && <hr className="hr-class" />}
    </>
  );
}

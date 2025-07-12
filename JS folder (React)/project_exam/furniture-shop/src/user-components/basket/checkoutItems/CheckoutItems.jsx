import "./CheckoutItems.css";

export default function CheckoutItems({ currentItem, index }) {
  return (
    <div className="basket-products">
      <img
        className="image-product"
        src={currentItem.imageUrl[0]}
        alt={`Product ${index + 1}`}
      />
      <div className="info-product">
        <p className="name">{currentItem.name}</p>
        <p>{`Quantity: ${currentItem.quantity}`}</p>
      </div>
      <span>{`$${(currentItem.quantity * currentItem.price).toFixed(2)}`}</span>
    </div>
  );
}

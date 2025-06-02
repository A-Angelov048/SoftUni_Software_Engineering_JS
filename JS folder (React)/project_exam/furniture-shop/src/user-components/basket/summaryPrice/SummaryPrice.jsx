import "./SummaryPrice.css";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../../shared-components/submit-button/SubmitButton";
import { priceHandler } from "../../../utils/priceHandler";
import { useContext } from "react";
import { ReceiveInfoContext } from "../../../context/ReceiveInfoContext";
import { BasketContext } from "../../../context/BasketContext";

export default function SummaryPrice({ basket }) {
  const navigate = useNavigate();

  const { receiveInfo } = useContext(ReceiveInfoContext);
  const { basketItems } = useContext(BasketContext);

  const totalPrice = priceHandler(basketItems);

  return (
    <section className="summary-section">
      <div className="summary">
        <h3>Summary</h3>
        <p>
          Products: <span>{"$" + totalPrice.toFixed(2)}</span>
        </p>
        <p>
          Shipping:{" "}
          <span>
            {receiveInfo.price === 0
              ? "Gratis"
              : `$${receiveInfo.price.toFixed(2)}`}
          </span>
        </p>
        <p>
          Total amount (including VAT):{" "}
          <span>{"$" + (totalPrice * 1.2 + receiveInfo.price).toFixed(2)}</span>
        </p>
        <SubmitButton
          disabledButton={!basketItems.length > 0 || receiveInfo.option === 0}
          clickFunction={() =>
            navigate("/checkout", {
              state: {
                furniture: basket,
                furniturePrice: totalPrice,
                shippingPrice: receiveInfo.price,
              },
            })
          }
          buttonName={"GO TO CHECKOUT"}
        />
      </div>
    </section>
  );
}

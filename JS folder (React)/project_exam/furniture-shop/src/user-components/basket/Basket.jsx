import "./Basket.css";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import { useGetBasketItems } from "../../hooks/useFurnitureResponse";
import { Link } from "react-router-dom";
import { ErrorContext } from "../../context/ErrorContext";
import BasketItems from "./basketItem/BasketItem";
import ReceiveInfo from "./receiveInfo/ReceiveInfo";
import { ReceiveInfoProvider } from "../../context/ReceiveInfoContext";
import SummaryPrice from "./summaryPrice/SummaryPrice";

export default function Basket() {
  const { basketItems } = useContext(BasketContext);
  const { errors } = useContext(ErrorContext);

  const getBasketItems = useGetBasketItems(basketItems);

  return (
    <ReceiveInfoProvider>
      <section className="basket-page layout-padding">
        <div className="container">
          <div className="heading-container">
            <h2>Basket</h2>
          </div>

          {(errors.hasOwnProperty("successMessage") ||
            errors.hasOwnProperty("errorMessage")) && (
            <div
              className={
                errors.successMessage
                  ? "error-container success position disappear-text"
                  : "error-container position disappear-text"
              }
            >
              {errors.successMessage ? (
                <i className="bx bx-check bx-tada" />
              ) : (
                <i className="bx bxs-error-circle bx-tada" />
              )}
              <p
                className={
                  errors.successMessage
                    ? "success bigger-font"
                    : "error bigger-font"
                }
              >
                {errors.successMessage || errors.errorMessage}
              </p>
            </div>
          )}

          <div className="layout-padding2 divide">
            <section className="basket-section">
              <div className="basket-info">
                <header className="basket-heading">
                  <i className="bx bx-basket"></i>
                  <h2>{`- ${basketItems.length} items`}</h2>
                </header>

                <div className="basket-body">
                  {basketItems.length > 0 ? (
                    getBasketItems.map((item, index) => (
                      <BasketItems
                        key={item._id}
                        currentItem={item}
                        index={index}
                      />
                    ))
                  ) : (
                    <header className="empty-basket">
                      <h2>Whoops, it seems basket is empty.</h2>
                      <Link className="underline" to="/shop">
                        Start shopping
                      </Link>
                    </header>
                  )}
                </div>
              </div>

              <ReceiveInfo />

              <div className="payment-info">
                <h3>We accept</h3>
                <div className="payment-icons">
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal"
                  />
                </div>
              </div>
            </section>

            <SummaryPrice basket={getBasketItems} />
          </div>
        </div>
      </section>
    </ReceiveInfoProvider>
  );
}

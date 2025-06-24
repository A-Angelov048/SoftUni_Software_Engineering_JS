import "./Checkout.css";
import { useGetDeliveryInfo } from "../../../hooks/useUserResponse";
import DeliveryForm from "../../delivery-form/DeliveryForm";
import { useContext, useEffect, useState } from "react";
import { ErrorContext } from "../../../context/ErrorContext";
import { useLocation } from "react-router-dom";
import CompleteOrder from "../completeOrder/CompleteOrder";
import ErrorMessage from "../../../shared-components/error-message/ErrorMessage";

export default function Checkout() {
  const { state } = useLocation();

  const { message } = useContext(ErrorContext);

  const [deliveryInfo, loading] = useGetDeliveryInfo();

  const [changeInfoDeliver, setChangeInfoDeliver] = useState(true);
  const [paymentInfo, setPaymentInfo] = useState({ option: 0 });

  useEffect(() => {
    if (message.text !== "" && message.status) {
      setChangeInfoDeliver((oldState) => !oldState);
    }
  }, [message]);

  return (
    <section className="checkout-page layout-padding">
      <div className="container">
        <div className="heading-container">
          <h2>Checkout summary</h2>
        </div>

        {message.text !== "" && <ErrorMessage newMessage={message} />}

        <div className="layout-padding2 checkout">
          <div className="wrapper-checkout">
            <div className="address">
              <div className="header">
                <header>
                  <p className="step">1</p>
                  <h2>Delivery address</h2>
                </header>
                {deliveryInfo.hasOwnProperty("_id") && changeInfoDeliver && (
                  <button
                    onClick={() =>
                      setChangeInfoDeliver((oldState) => !oldState)
                    }
                    className="change-info"
                    type="button"
                  >
                    Change
                  </button>
                )}
              </div>

              {deliveryInfo.hasOwnProperty("_id") && changeInfoDeliver ? (
                <div className="delivery-info">
                  <p>{`${deliveryInfo["first-name"]} ${deliveryInfo["last-name"]}`}</p>
                  <p>{`${deliveryInfo.address}, ${deliveryInfo["zip-code"]}`}</p>
                  <p>{deliveryInfo.neighborhood}</p>
                  <p>{`${deliveryInfo.city}, ${deliveryInfo.region}`}</p>
                  <p>{deliveryInfo.email}</p>
                  <p>{deliveryInfo.phone}</p>
                </div>
              ) : (
                <DeliveryForm deliveryInfo={deliveryInfo} />
              )}
            </div>

            <hr />

            <div className="payment">
              <div className="header">
                <header>
                  <p className="step">2</p>
                  <h2>Payment method</h2>
                </header>
              </div>

              {deliveryInfo.hasOwnProperty("_id") && changeInfoDeliver ? (
                <div className="payment-info">
                  <h3>Chose payment method</h3>

                  <div className="payment-container">
                    <button
                      onClick={() => setPaymentInfo({ option: 1 })}
                      className={
                        paymentInfo.option === 1 ? "card active" : "card"
                      }
                    >
                      <i className="bx bxs-credit-card-alt"></i>
                      <p>Credit/Debit card</p>
                    </button>
                    <button
                      onClick={() => setPaymentInfo({ option: 2 })}
                      className={
                        paymentInfo.option === 2 ? "card active" : "card"
                      }
                    >
                      <i className="bx bxs-wallet"></i>
                      <p>Cash on delivery</p>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p>Please write first your delivery address. Thank you!</p>
                </div>
              )}
            </div>
          </div>

          <CompleteOrder
            state={state}
            paymentInfo={paymentInfo}
            changeInfoDeliver={changeInfoDeliver}
          />
        </div>
      </div>
    </section>
  );
}

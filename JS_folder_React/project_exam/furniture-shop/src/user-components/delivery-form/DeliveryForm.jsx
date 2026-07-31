import "./DeliveryForm.css";
import { memo, useContext } from "react";
import { useForm } from "../../hooks/useForms";
import { ErrorContext } from "../../context/ErrorContext";
import { usePostDeliveryInfo } from "../../hooks/useUserResponse";
import ErrorMessage from "../../shared-components/error-message/ErrorMessage";

export default memo(function DeliveryForm({ deliveryInfo }) {
  const { errors } = useContext(ErrorContext);

  const submitDeliveryInfo = usePostDeliveryInfo();

  const initialValues = {
    "last-name": deliveryInfo["last-name"] || "",
    "first-name": deliveryInfo["first-name"] || "",
    address: deliveryInfo.address || "",
    "zip-code": deliveryInfo["zip-code"] || "",
    region: deliveryInfo.region || "",
    city: deliveryInfo.city || "",
    neighborhood: deliveryInfo.neighborhood || "",
    email: deliveryInfo.email || "",
    phone: deliveryInfo.phone || "",
  };

  const { values, changeHandler, submitCurForm } = useForm(
    initialValues,
    submitDeliveryInfo
  );

  return (
    <form onSubmit={submitCurForm} className="delivery-form">
      <div className="row-input">
        <div className="form-group">
          <input
            type="text"
            name="last-name"
            placeholder="Last name*"
            value={values["last-name"]}
            onChange={changeHandler}
          />
          {errors.hasOwnProperty("last-name") && (
            <ErrorMessage newMessage={{ read: errors["last-name"] }} />
          )}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="first-name"
            placeholder="Name*"
            value={values["first-name"]}
            onChange={changeHandler}
          />
          {errors.hasOwnProperty("first-name") && (
            <ErrorMessage newMessage={{ read: errors["first-name"] }} />
          )}
        </div>
      </div>

      <div className="row-input">
        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Address*"
            value={values.address}
            onChange={changeHandler}
          />
          {errors.hasOwnProperty("address") && (
            <ErrorMessage newMessage={{ read: errors.address }} />
          )}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="zip-code"
            placeholder="Zip code*"
            value={values["zip-code"]}
            onChange={changeHandler}
          />
          {errors.hasOwnProperty("zip-code") && (
            <ErrorMessage newMessage={{ read: errors["zip-code"] }} />
          )}
        </div>
      </div>

      <div className="row-input">
        <div className="form-group">
          <input
            type="text"
            name="region"
            placeholder="Region*"
            value={values.region}
            onChange={changeHandler}
          />
          {errors.hasOwnProperty("region") && (
            <ErrorMessage newMessage={{ read: errors.region }} />
          )}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="City / District*"
            value={values.city}
            onChange={changeHandler}
          />
          {errors.hasOwnProperty("city") && (
            <ErrorMessage newMessage={{ read: errors.city }} />
          )}
        </div>
      </div>

      <div className="row-input">
        <div className="form-group">
          <input
            type="text"
            name="neighborhood"
            placeholder="Neighborhood*"
            value={values.neighborhood}
            onChange={changeHandler}
          />
          {errors.hasOwnProperty("neighborhood") && (
            <ErrorMessage newMessage={{ read: errors.neighborhood }} />
          )}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email*"
            value={values.email}
            onChange={changeHandler}
          />
          {errors.hasOwnProperty("email") && (
            <ErrorMessage newMessage={{ read: errors.email }} />
          )}
        </div>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="phone"
          placeholder="Phone number*"
          value={values.phone}
          onChange={changeHandler}
        />
        {errors.hasOwnProperty("phone") && (
          <ErrorMessage newMessage={{ read: errors.phone }} />
        )}
      </div>

      <button type="submit" className="save-btn">
        Save
      </button>
    </form>
  );
});

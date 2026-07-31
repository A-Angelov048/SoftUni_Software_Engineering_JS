import { memo, useContext, useEffect, useRef, useState } from "react";
import ProfileEditing from "../profileEditing/ProfileEditing";
import PasswordChange from "../passwordChange/PasswordChange";
import DeliveryForm from "../../delivery-form/DeliveryForm";
import { useGetDeliveryInfo } from "../../../hooks/useUserResponse";
import { ErrorContext } from "../../../context/ErrorContext";
import ErrorMessage from "../../../shared-components/error-message/ErrorMessage";
import { AuthContext } from "../../../context/AuthContext";

export default memo(function Settings() {
  const flag = useRef(true);
  const { message, clearMessage } = useContext(ErrorContext);
  const { role } = useContext(AuthContext);
  const [detailsClose, setDetailsClose] = useState(false);
  const [deliveryInfo, loading] = useGetDeliveryInfo();

  useEffect(() => {
    if (flag.current) {
      flag.current = false;
      clearMessage();
    }
    if (message.text !== "" && message.status) {
      setDetailsClose((oldState) => !oldState);
    }
  }, [message]);

  return (
    <div className="settings layout-padding2">
      {message.text !== "" && <ErrorMessage newMessage={message} />}

      <details open={detailsClose ? false : null}>
        <summary>Profile info change</summary>
        <ProfileEditing />
      </details>

      <details open={detailsClose ? false : null}>
        <summary>Password change</summary>
        <PasswordChange />
      </details>

      {role !== "Admin" && (
        <details open={detailsClose ? false : null}>
          <summary>Delivery address change</summary>
          {loading && <DeliveryForm deliveryInfo={deliveryInfo} />}
        </details>
      )}
    </div>
  );
});

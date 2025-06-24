import "../Profile.css";

import { memo, useContext, useState } from "react";
import { useForm } from "../../../hooks/useForms";
import { ErrorContext } from "../../../context/ErrorContext";
import { useChangeUserInfo } from "../../../hooks/useUserResponse";
import ErrorMessage from "../../../shared-components/error-message/ErrorMessage";

export default memo(function PasswordChange() {
  const { errors } = useContext(ErrorContext);

  const [showHideCurPassword, setShowHide] = useState(true);
  const [showHideNewPassword, setShowHideNew] = useState(true);

  const changeUserInfo = useChangeUserInfo("passwordSchema");

  const initialValues = {
    password: "",
    newPassword: "",
    reNewPassword: "",
  };

  const { values, changeHandler, submitCurForm } = useForm(
    initialValues,
    changeUserInfo
  );

  return (
    <form onSubmit={submitCurForm}>
      <div className="input-box">
        <input
          type={showHideCurPassword ? "password" : "text"}
          name="password"
          placeholder="Current password*"
          value={values.password}
          onChange={changeHandler}
        />
        {showHideCurPassword ? (
          <i
            onClick={() => {
              setShowHide(!showHideCurPassword);
            }}
            className="bx bxs-show"
          ></i>
        ) : (
          <i
            onClick={() => {
              setShowHide(!showHideCurPassword);
            }}
            className="bx bxs-hide"
          ></i>
        )}
      </div>

      {errors.hasOwnProperty("password") && (
        <ErrorMessage newMessage={{ read: errors.password }} />
      )}

      <div className="input-box">
        <input
          type={showHideNewPassword ? "password" : "text"}
          name="newPassword"
          placeholder="New Password*"
          value={values.newPassword}
          onChange={changeHandler}
        />
        {showHideNewPassword ? (
          <i
            onClick={() => {
              setShowHideNew(!showHideNewPassword);
            }}
            className="bx bxs-show"
          ></i>
        ) : (
          <i
            onClick={() => {
              setShowHideNew(!showHideNewPassword);
            }}
            className="bx bxs-hide"
          ></i>
        )}
      </div>

      {errors.hasOwnProperty("newPassword") && (
        <ErrorMessage newMessage={{ read: errors.newPassword }} />
      )}

      <div className="input-box">
        <input
          type={showHideNewPassword ? "password" : "text"}
          name="reNewPassword"
          placeholder="Confirm new password*"
          value={values.reNewPassword}
          onChange={changeHandler}
        />
        {showHideNewPassword ? (
          <i
            onClick={() => {
              setShowHideNew(!showHideNewPassword);
            }}
            className="bx bxs-show"
          ></i>
        ) : (
          <i
            onClick={() => {
              setShowHideNew(!showHideNewPassword);
            }}
            className="bx bxs-hide"
          ></i>
        )}
      </div>

      {errors.hasOwnProperty("reNewPassword") && (
        <ErrorMessage newMessage={{ read: errors.reNewPassword }} />
      )}

      <button type="submit" className="btn">
        Save password
      </button>
    </form>
  );
});

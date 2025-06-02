import "../Profile.css";

import { useContext, useState } from "react";
import { useForm } from "../../../hooks/useForms";
import { ErrorContext } from "../../../context/ErrorContext";
import { useChangeUserInfo } from "../../../hooks/useUserResponse";

export default function PasswordChange() {
  const { errors } = useContext(ErrorContext);

  const [showHideCurPassword, setShowHide] = useState(true);
  const [showHideNewPassword, setShowHideNew] = useState(true);

  const [handleTag, changeUserInfo] = useChangeUserInfo("passwordSchema");

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
    <details open={handleTag ? false : null}>
      <summary>Password change</summary>
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
          <div className="error-container">
            <i className="bx bxs-error-circle bx-tada"></i>
            <p className="error">{errors.password}</p>
          </div>
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
          <div className="error-container">
            <i className="bx bxs-error-circle bx-tada"></i>
            <p className="error">{errors.newPassword}</p>
          </div>
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
          <div className="error-container">
            <i className="bx bxs-error-circle bx-tada"></i>
            <p className="error">{errors.reNewPassword}</p>
          </div>
        )}

        <button type="submit" className="btn">
          Save password
        </button>
      </form>
    </details>
  );
}

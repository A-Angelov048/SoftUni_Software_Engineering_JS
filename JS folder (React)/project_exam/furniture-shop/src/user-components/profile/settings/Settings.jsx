import { useContext } from "react";
import { ErrorContext } from "../../../context/ErrorContext";

import ProfileEditing from "../profileEditing/ProfileEditing";
import PasswordChange from "../passwordChange/PasswordChange";

export default function Settings() {
  const { errors } = useContext(ErrorContext);

  return (
    <div className="settings layout-padding2">
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

      <ProfileEditing />

      <PasswordChange />
    </div>
  );
}

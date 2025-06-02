import "../Profile.css";

import { useContext } from "react";
import { useForm } from "../../../hooks/useForms";
import { AuthContext } from "../../../context/AuthContext";
import { ErrorContext } from "../../../context/ErrorContext";
import { useChangeUserInfo } from "../../../hooks/useUserResponse";

export default function ProfileEditing() {
  const { username, imageProfile, location } = useContext(AuthContext);
  const { errors } = useContext(ErrorContext);

  const [handleTag, changeUserInfo] = useChangeUserInfo("profileSchema");

  const initialValues = {
    imageProfile: imageProfile || "",
    username: username || "",
    location: location || "",
  };

  const { values, changeHandler, submitCurForm } = useForm(
    initialValues,
    changeUserInfo
  );

  return (
    <details open={handleTag ? false : null}>
      <summary>Profile editing</summary>
      <form onSubmit={submitCurForm}>
        <div className="input-box">
          <input
            type="text"
            name="username"
            placeholder="Username*"
            value={values.username}
            onChange={changeHandler}
          />
        </div>

        {errors.hasOwnProperty("username") && (
          <div className="error-container">
            <i className="bx bxs-error-circle bx-tada"></i>
            <p className="error">{errors.username}</p>
          </div>
        )}

        <div className="input-box">
          <input
            type="text"
            name="location"
            placeholder="City or post code"
            value={values.location}
            onChange={changeHandler}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            name="imageProfile"
            placeholder="Profile image"
            value={values.imageProfile}
            onChange={changeHandler}
          />
        </div>

        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </details>
  );
}

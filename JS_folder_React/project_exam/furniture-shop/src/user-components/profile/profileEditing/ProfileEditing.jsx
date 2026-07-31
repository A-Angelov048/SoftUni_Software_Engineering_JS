import "../Profile.css";

import { memo, useContext } from "react";
import { useForm } from "../../../hooks/useForms";
import { AuthContext } from "../../../context/AuthContext";
import { ErrorContext } from "../../../context/ErrorContext";
import { useChangeUserInfo } from "../../../hooks/useUserResponse";
import ErrorMessage from "../../../shared-components/error-message/ErrorMessage";

export default memo(function ProfileEditing() {
  const { username, imageProfile, location } = useContext(AuthContext);
  const { errors } = useContext(ErrorContext);

  const changeUserInfo = useChangeUserInfo("profileSchema");

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
        <ErrorMessage newMessage={{ read: errors.username }} />
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
  );
});

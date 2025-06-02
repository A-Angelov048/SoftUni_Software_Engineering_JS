import "../UserForms.css";

import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForms";
import { useContext } from "react";
import { ErrorContext } from "../../context/ErrorContext";
import { useRegisterUser } from "../../hooks/useUserResponse";

const initialValues = {
  username: "",
  email: "",
  password: "",
  rePassword: "",
};

export default function Register() {
  const { errors } = useContext(ErrorContext);
  const createUser = useRegisterUser();

  const { values, changeHandler, submitCurForm } = useForm(
    initialValues,
    createUser
  );

  return (
    <section className="register layout-padding">
      <div className="container">
        <div className="heading-container">
          <h2>Register</h2>
        </div>
        {errors.hasOwnProperty("message") && (
          <div className="error-container position disappear-text">
            <i className="bx bxs-error-circle bx-tada"></i>
            <p className="error bigger-font">{errors.message}</p>
          </div>
        )}
        <div className="layout-padding2">
          <div className="wrapper-user">
            <form onSubmit={submitCurForm}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Type your username*"
                  name="username"
                  value={values.username}
                  onChange={changeHandler}
                />

                <i className="bx bxs-user"></i>
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
                  placeholder="Type your email*"
                  name="email"
                  value={values.email}
                  onChange={changeHandler}
                />

                <i className="bx bxs-envelope"></i>
              </div>

              {errors.hasOwnProperty("email") && (
                <div className="error-container">
                  <i className="bx bxs-error-circle bx-tada"></i>
                  <p className="error">{errors.email}</p>
                </div>
              )}

              <div className="input-box">
                <input
                  type="password"
                  placeholder="Type your password*"
                  name="password"
                  value={values.password}
                  onChange={changeHandler}
                />

                <i className="bx bxs-lock-alt"></i>
              </div>

              {errors.hasOwnProperty("password") && (
                <div className="error-container">
                  <i className="bx bxs-error-circle bx-tada"></i>
                  <p className="error">{errors.password}</p>
                </div>
              )}

              <div className="input-box">
                <input
                  type="password"
                  placeholder="Confirm your password*"
                  name="rePassword"
                  value={values.rePassword}
                  onChange={changeHandler}
                />

                <i className="bx bxs-lock-alt"></i>
              </div>

              {errors.hasOwnProperty("rePassword") && (
                <div className="error-container">
                  <i className="bx bxs-error-circle bx-tada"></i>
                  <p className="error">{errors.rePassword}</p>
                </div>
              )}

              <button type="submit" className="btn">
                Register
              </button>

              <div className="link">
                <p>
                  Already have an account?
                  <Link to="/login">Login here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import "../UserForms.css";

import { useContext } from "react";
import { useForm } from "../../hooks/useForms";
import { Link } from "react-router-dom";
import { ErrorContext } from "../../context/ErrorContext";
import { useLoginUser } from "../../hooks/useUserResponse";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const { errors } = useContext(ErrorContext);
  const getUser = useLoginUser();

  const { values, changeHandler, submitCurForm } = useForm(
    initialValues,
    getUser
  );

  return (
    <section className="login-section layout-padding">
      <div className="container">
        <div className="heading-container">
          <h2>Login</h2>
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

              <button type="submit" className="btn">
                Login
              </button>

              <div className="link">
                <p>
                  Don't have and account?
                  <Link to="/register">Register here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

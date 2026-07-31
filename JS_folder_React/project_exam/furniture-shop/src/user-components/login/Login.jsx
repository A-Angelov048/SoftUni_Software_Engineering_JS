import "../UserForms.css";

import { useContext } from "react";
import { useForm } from "../../hooks/useForms";
import { Link } from "react-router-dom";
import { ErrorContext } from "../../context/ErrorContext";
import { useLoginUser } from "../../hooks/useUserResponse";
import ErrorMessage from "../../shared-components/error-message/ErrorMessage";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const { errors, message } = useContext(ErrorContext);
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

        {message.text !== "" && <ErrorMessage newMessage={message} />}

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
                <ErrorMessage newMessage={{ read: errors.email }} />
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
                <ErrorMessage newMessage={{ read: errors.password }} />
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

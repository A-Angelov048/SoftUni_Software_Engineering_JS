import "../UserForms.css";

import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForms";
import { useContext } from "react";
import { ErrorContext } from "../../context/ErrorContext";
import { useRegisterUser } from "../../hooks/useUserResponse";
import ErrorMessage from "../../shared-components/error-message/ErrorMessage";

const initialValues = {
  username: "",
  email: "",
  password: "",
  rePassword: "",
};

export default function Register() {
  const { errors, message } = useContext(ErrorContext);
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

        {message.text !== "" && <ErrorMessage newMessage={message} />}

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
                <ErrorMessage newMessage={{ read: errors.username }} />
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
                <ErrorMessage newMessage={{ read: errors.rePassword }} />
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

import '../UserForms.css'
import { Link, useNavigate } from 'react-router-dom'

import { useForm } from '../../hooks/useForms';
import { register } from '../../service/userService';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const initialValues = {
    username: '',
    email: '',
    password: '',
    rePassword: ''
};

export default function Register() {

    const navigate = useNavigate();
    const { changeAuthState } = useContext(AuthContext);

    const createUser = async (values) => {

        try {
            const result = await register(values);
            changeAuthState(result);
            navigate('/');
        } catch (error) {
            console.error(error.message);
        }

    }

    const { values, changeHandler, submitCurForm } = useForm(initialValues, createUser);

    return (
        <section className="register layout-padding">
            <div className="container">
                <div className="heading-container">
                    <h2>
                        Register
                    </h2>
                </div>
                <div className="layout-padding2">
                    <div className="wrapper-user">
                        <form onSubmit={submitCurForm}>
                            <div className="input-box">
                                <input

                                    type="text"
                                    placeholder="Type your username*"
                                    name="username"
                                    value={values.username}
                                    onChange={changeHandler} />

                                <i className='bx bxs-user'></i>
                            </div>

                            <div className="input-box">
                                <input

                                    type="email"
                                    placeholder="Type your email*"
                                    name="email"
                                    value={values.email}
                                    onChange={changeHandler} />

                                <i className='bx bxs-envelope'></i>
                            </div>
                            <div className="input-box">
                                <input

                                    type="password"
                                    placeholder="Type your password*"
                                    name="password"
                                    value={values.password}
                                    onChange={changeHandler} />

                                <i className='bx bxs-lock-alt'></i>
                            </div>
                            <div className="input-box">
                                <input

                                    type="password"
                                    placeholder="Confirm your password*"
                                    name="rePassword"
                                    value={values.rePassword}
                                    onChange={changeHandler} />

                                <i className='bx bxs-lock-alt'></i>
                            </div>

                            <button type="submit" className="btn">Register</button>

                            <div className="link">
                                <p>Already have an account?
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
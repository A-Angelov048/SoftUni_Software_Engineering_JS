import '../UserForms.css';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForms';
import { register } from '../../api-service/userService';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { registerSchema } from '../../utils/schemaForm';
import { trimValue } from '../../utils/trimValue';


const initialValues = {
    username: '',
    email: '',
    password: '',
    rePassword: ''
};

export default function Register() {

    const navigate = useNavigate();
    const { changeAuthState } = useContext(AuthContext);
    const [errors, setErrors] = useState({});
    const [showTextState, setShowText] = useState(false);


    const createUser = async (values) => {

        const trimValues = trimValue(values);

        try {
            await registerSchema.validate(trimValues, { abortEarly: false });
        } catch (error) {

            const newError = {};

            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            })

            setErrors(newError);

            return;
        }

        try {
            const result = await register(trimValues);
            changeAuthState(result);
            navigate('/');
        } catch (error) {

            setShowText(true);
            setErrors({ message: error.message });

            setTimeout(() => {

                setShowText(false);
                setErrors({});

            }, 4000);

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
                {errors.hasOwnProperty('message') && showTextState &&
                    <div className='error-container position disappear-text'>
                        <i className='bx bxs-error-circle bx-tada' ></i>
                        <p className='error bigger-font'>{errors.message}</p>
                    </div>
                }
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

                            {errors.hasOwnProperty('username') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.username}</p>
                                </div>
                            }

                            <div className="input-box">
                                <input

                                    type="text"
                                    placeholder="Type your email*"
                                    name="email"
                                    value={values.email}
                                    onChange={changeHandler} />

                                <i className='bx bxs-envelope'></i>
                            </div>

                            {errors.hasOwnProperty('email') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.email}</p>
                                </div>
                            }

                            <div className="input-box">
                                <input

                                    type="password"
                                    placeholder="Type your password*"
                                    name="password"
                                    value={values.password}
                                    onChange={changeHandler} />

                                <i className='bx bxs-lock-alt'></i>
                            </div>

                            {errors.hasOwnProperty('password') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.password}</p>
                                </div>
                            }

                            <div className="input-box">
                                <input

                                    type="password"
                                    placeholder="Confirm your password*"
                                    name="rePassword"
                                    value={values.rePassword}
                                    onChange={changeHandler} />

                                <i className='bx bxs-lock-alt'></i>
                            </div>

                            {errors.hasOwnProperty('rePassword') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.rePassword}</p>
                                </div>
                            }

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
import { useContext } from 'react';
import { useForm } from '../../hooks/useForms';
import { login } from '../../service/userService';
import '../UserForms.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const initialValues = {
    email: '',
    password: '',
};


export default function Login() {

    const navigate = useNavigate();
    const { changeAuthState } = useContext(AuthContext)

    const getUser = async (values) => {

        try {
            const result = await login(values);
            changeAuthState(result);
            navigate('/');
        } catch (error) {
            console.error(error.message);
        }
    }


    const { values, changeHandler, submitCurForm } = useForm(initialValues, getUser)

    return (
        <section className="login-section layout-padding">
            <div className="container">
                <div className="heading-container">
                    <h2>
                        Login
                    </h2>
                </div>
                <div className="layout-padding2">
                    <div className="wrapper-user">
                        <form onSubmit={submitCurForm}>
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

                            <button type="submit" className="btn">Login</button>

                            <div className="link">
                                <p>Don't have and account?
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
import '../UserForms.css'
import { Link } from 'react-router-dom'

export default function Register() {
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
                        <form>
                            <div className="input-box">
                                <input type="text" placeholder="Type your username*" name="username" />
                                <i className='bx bxs-user'></i>
                            </div>

                            <div className="input-box">
                                <input type="email" placeholder="Type your email*" name="email" />
                                <i className='bx bxs-envelope'></i>
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder="Type your password*" name="password" />
                                <i className='bx bxs-lock-alt'></i>
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder="Confirm your password*" name="rePassword" />
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
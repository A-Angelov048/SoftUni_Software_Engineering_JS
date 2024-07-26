import '../UserForms.css'


export default function Login() {
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
                        <form>
                            <div className="input-box">
                                <input type="email" placeholder="Type your email*" name="email" />
                                <i className='bx bxs-envelope'></i>
                            </div>

                            <div className="input-box">
                                <input type="password" placeholder="Type your password*" name="password" />
                                <i className='bx bxs-lock-alt'></i>
                            </div>

                            <button type="submit" className="btn">Login</button>

                            <div className="link">
                                <p>Don't have and account?
                                    <a href="#">Register here</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
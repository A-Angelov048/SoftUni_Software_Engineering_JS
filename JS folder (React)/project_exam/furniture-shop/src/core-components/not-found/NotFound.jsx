import './NotFound.css'

import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="error-section layout-padding">
            <div className="container">
                <div className="heading-container">
                    <h2>
                        Error: Page Not Found!
                    </h2>
                </div>
                <div className="layout-padding2">
                    <div className="wrapper">

                        <div className="details">
                            <h2>404</h2>
                            <h4>Whoops! Page not found...</h4>
                            <p>The page you were looking for doesn't exist. You may have mistyped the address or the page
                                may have moved.</p>
                        </div>

                        <div className="a-box">
                            <Link to="/">Back To Home</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <section className="introduction">

            <header className="header-section">

                <div>
                    <ul className="menu-container">
                        <li><Link className="logo" to="/">Furniture-Shop</Link></li>
                        <li><Link className="menu" to="/">Home</Link></li>
                        <li><Link className="menu" to="/shop">Shop</Link></li>
                        <li><Link className="menu" to="/search">Search</Link></li>
                    </ul>
                </div>

                <nav className="navbar-section">
                    {/* <!--For logging users--> */}
                    <div>
                        <Link className="user" to="/createOffer">Create Offer </Link>
                    </div>

                    <div>
                        <Link className="user" to="#">Logout</Link>
                    </div>

                    <div>
                        <Link className="user" to="/profile">
                            <i className='bx bxs-user'></i>
                        </Link>
                    </div>
                    {/* <!--For guest user--> */}

                    <div>
                        <Link className="user" to="/login">Login</Link>
                    </div>

                    <div>
                        <Link className="user" to="/register">Register</Link>
                    </div>
                </nav>

            </header>

            <section className="introduction-info">
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <div className="detail-box">
                                <h1>
                                    The Latest
                                    <p>
                                        Furniture
                                    </p>
                                </h1>
                                <p>
                                    That brighten every room. All thoughtfully designed and meticulously crafted furniture,
                                    for your home sweet home.
                                </p>
                            </div>
                        </div>
                        <div className="column img-container">
                            <div className="img-box">
                                <img src="images/slider-img.png" alt="chair" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
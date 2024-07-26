import './Header.css'


export default function Header() {
    return (
        <section className="introduction">

            <header className="header-section">

                <div>
                    <ul className="menu-container">
                        <li><a className="logo" href="/home.html">Furniture-Shop</a></li>
                        <li><a className="menu" href="/home.html">Home</a></li>
                        <li><a className="menu" href="/shop.html">Shop</a></li>
                        <li><a className="menu" href="/search.html">Search</a></li>
                    </ul>
                </div>

                <nav className="navbar-section">
                    {/* <!--For logging users--> */}
                    <div>
                        <a className="user" href="/createOffer.html">Create Offer </a>
                    </div>

                    <div>
                        <a className="user" href="#">Logout</a>
                    </div>

                    <div>
                        <a className="user" href="#">
                            <i className='bx bxs-user'></i>
                        </a>
                    </div>
                    {/* <!--For guest user--> */}

                    <div>
                        <a className="user" href="/login.html">Login</a>
                    </div>

                    <div>
                        <a className="user" href="/register.html">Register</a>
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
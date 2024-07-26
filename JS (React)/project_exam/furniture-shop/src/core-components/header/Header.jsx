import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (

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
                    <Link className="user" to="/create-offer">Create Offer </Link>
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

    )
}
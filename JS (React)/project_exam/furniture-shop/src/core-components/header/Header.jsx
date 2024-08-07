import { Link } from 'react-router-dom'

import './Header.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { logout } from '../../service/userService';

export default function Header() {

    const { userId, changeAuthState } = useContext(AuthContext);

    const logoutUser = async () => {

        try {
            await logout();
            changeAuthState({});
        } catch (error) {
            console.error(error.message);
        }
    }

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

                {!!userId ?
                    <>
                        <div>
                            <Link className="user" to="/create-offer">Create Offer </Link>
                        </div>

                        <div>
                            <Link className="user" onClick={logoutUser} to="/">Logout</Link>
                        </div>

                        <div>
                            <Link className="user" to={`/profile/${userId}`}>
                                <i className='bx bxs-user'></i>
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <Link className="user" to="/login">Login</Link>
                        </div>

                        <div>
                            <Link className="user" to="/register">Register</Link>
                        </div>
                    </>}

            </nav>

        </header>

    )
}
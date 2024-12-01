import './Header.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { logout } from '../../api-service/userService';

export default function Header() {

    const { userId, changeAuthState, updateAuthError } = useContext(AuthContext);

    const logoutUser = async () => {

        try {
            await logout();
            changeAuthState({});
        } catch (error) {
            if (error.message === '403') return updateAuthError(true);

            console.error(error.message);
        }
    }

    return (

        <header className="header-section">

            <div className='logo'>
                <Link to="/">Furniture-Shop</Link>
            </div>

            <input type="checkbox" id='sidebar-toggle' />
            <label htmlFor="sidebar-toggle" id='overlay'></label>
            <label htmlFor="sidebar-toggle" className='open-sidebar'>
                <i className='bx bx-menu bx-flip-vertical' ></i>
            </label>

            <div className='navigation-container'>

                <ul className="main-nav">
                    <label htmlFor="sidebar-toggle" className='close-sidebar'>
                        <i className='bx bx-x'></i>
                    </label>
                    <li><Link className="main" to="/">Home</Link></li>
                    <li><Link className="main" to="/shop">Shop</Link></li>
                    <li><Link className="main" to="/search">Search</Link></li>
                </ul>

                <nav className="user-nav">

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

            </div>

        </header>

    )
}
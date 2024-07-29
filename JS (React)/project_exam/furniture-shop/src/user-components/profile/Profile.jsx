import { useContext } from 'react';
import './Profile.css'

import { convertDate } from '../../utils/convertDate'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {

    const location = useLocation();
    const user = useContext(AuthContext);


    return (
        <section className="profile-section layout-padding">

            <div className="container">

                <div className="heading-container">
                    <h2>
                        User Profile
                    </h2>
                </div>

                <div className="layout-padding2">

                    <div className='wrapper-profile'>

                        <div className="profile-info">

                            <div className="image">
                                <img src={user.imageProfile ? user.imageProfile : '/images/profile-circle-svgrepo-com.svg'} />
                            </div>

                            <div className="info">

                                <div className="info-user">
                                    <p>{user.username}</p>
                                    <div>
                                        <i className='bx bxs-map'></i>
                                        <p>{user.location ? user.location : 'City or post code'}</p>
                                    </div>
                                </div>

                                <div>
                                    <p>Date of registration {convertDate(user.createdAt)}</p>
                                    <p>Last online {convertDate(user.lastLogin)}</p>
                                </div>

                            </div>

                        </div>

                        <div className="nav-profile">
                            <ul>
                                <li className={location.pathname == '/profile/my-furniture' ? 'link active' : 'link'}>
                                    <Link to="my-furniture">My furniture for sells</Link>
                                </li>
                                <li className={location.pathname == '/profile/whish-list' ? 'link active' : 'link'}>
                                    <Link to="whish-list">Whish list</Link>
                                </li>
                                <li className={location.pathname == '/profile/settings' ? 'link active' : 'link'}>
                                    <Link to="settings">Settings</Link>
                                </li>
                                {/* <!-- guest user and non owner --> */}
                                <li className={location.pathname == '/profile/sales' ? 'link active' : 'link'}>
                                    <Link to="sales">Furniture for sell</Link>
                                </li>
                            </ul>
                        </div>

                        <Outlet />

                    </div>

                </div>

            </div>

        </section>
    );
}
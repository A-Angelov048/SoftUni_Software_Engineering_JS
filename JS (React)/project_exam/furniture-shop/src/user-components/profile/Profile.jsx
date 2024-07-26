import './Profile.css'

import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Profile() {

    const location = useLocation();


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
                                <img src="images/profile-circle-svgrepo-com.svg" />
                            </div>

                            <div className="info">

                                <div className="info-user">
                                    <p>Pesho</p>
                                    <div>
                                        <i className='bx bxs-map'></i>
                                        <p>Sofia, District Sofia-city</p>
                                    </div>
                                </div>

                                <div>
                                    <p>Date of registration 23.02.2020</p>
                                    <p>Last online 20.07.2024</p>
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
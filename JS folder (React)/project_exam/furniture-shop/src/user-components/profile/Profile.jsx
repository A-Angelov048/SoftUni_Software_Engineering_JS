import './Profile.css'

import { convertDate } from '../../utils/convertDate';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useGetProfile } from '../../hooks/useUserResponse';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {

    const { userId } = useContext(AuthContext);
    const { profileId } = useParams();
    const location = useLocation();
    const user = useGetProfile(profileId);

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
                                {userId === user._id ?
                                    <>
                                        <li className={location.pathname == `/profile/${user._id}/my-furniture` ? 'link active' : 'link'}>
                                            <Link to="my-furniture" state={user.furniture}>My furniture for sells</Link>
                                        </li>
                                        <li className={location.pathname == `/profile/${user._id}/wishlist` ? 'link active' : 'link'}>
                                            <Link to="wishlist" state={user.wishlist}>Wishlist</Link>
                                        </li>
                                        <li className={location.pathname == `/profile/${user._id}/settings` ? 'link active' : 'link'}>
                                            <Link state={user} to="settings">Settings</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className={location.pathname == `/profile/${user._id}/sales` ? 'link active' : 'link'}>
                                            <Link to="sales" state={user.furniture}>Furniture for sell</Link>
                                        </li>
                                    </>}
                            </ul>
                        </div>

                        <Outlet />

                    </div>

                </div>

            </div>

        </section>
    );
}
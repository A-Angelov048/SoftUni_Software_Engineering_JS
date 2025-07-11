import "./Profile.css";

import { convertDate } from "../../utils/convertDate";
import { useParams } from "react-router-dom";
import { useGetProfile } from "../../hooks/useUserResponse";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import BrandContainer from "../../shared-components/brand-container/BrandContainer";
import Settings from "./settings/Settings";
import Orders from "./orders/Orders";

export default function Profile() {
  const { role } = useContext(AuthContext);
  const { profileId } = useParams();
  const [user, stateItems, handleClick] = useGetProfile(profileId);

  return (
    <section className="profile-section layout-padding">
      <div className="container">
        <div className="heading-container">
          <h2>{role} Profile</h2>
        </div>

        <div className="layout-padding2">
          <div className="wrapper-profile">
            <div className="profile-info">
              <div className="image">
                <img
                  src={
                    user.imageProfile
                      ? user.imageProfile
                      : "/images/profile-circle-svgrepo-com.svg"
                  }
                />
              </div>

              <div className="info">
                <div className="info-user">
                  <p>{user.username}</p>
                  <div>
                    <i className="bx bxs-map"></i>
                    <p>{user.location ? user.location : "City or post code"}</p>
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
                <li
                  onClick={() => handleClick(user.orders, "orders")}
                  className={
                    stateItems.currentClick === "orders"
                      ? "link active"
                      : "link"
                  }
                >
                  {role !== "Admin" ? "My orders" : "Orders"}
                </li>

                <li
                  onClick={() => handleClick(user.wishlist, "wishlist")}
                  className={
                    stateItems.currentClick === "wishlist"
                      ? "link active"
                      : "link"
                  }
                >
                  Wishlist
                </li>

                <li
                  onClick={() => handleClick([], "settings")}
                  className={
                    stateItems.currentClick === "settings"
                      ? "link active"
                      : "link"
                  }
                >
                  Settings
                </li>
              </ul>
            </div>

            {stateItems.currentClick === "wishlist" &&
              stateItems.items.length > 0 && (
                <div className="brand-container layout-padding2">
                  {stateItems.items.map((current, index) => (
                    <BrandContainer
                      furniture={current}
                      curIndex={index}
                      key={current._id}
                    />
                  ))}
                </div>
              )}

            {stateItems.currentClick === "orders" &&
              stateItems.items.length > 0 && <Orders />}

            {stateItems.currentClick === "settings" && <Settings />}
          </div>
        </div>
      </div>
    </section>
  );
}

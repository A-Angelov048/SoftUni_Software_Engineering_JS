import "./Details.css";
import Reviews from "./reviews/Reviews";

import { Link, useParams } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import {
  useDetailsFurniture,
  useUpdateWishlist,
} from "../../hooks/useFurnitureResponse";

import MessageDialog from "../../shared-components/message-dialog/MessageDialog";
import { averageNumReviews } from "../../utils/averageNumReviews";
import { AuthContext } from "../../context/AuthContext";
import { BasketContext } from "../../context/BasketContext";
import { ErrorContext } from "../../context/ErrorContext";
import ErrorMessage from "../../shared-components/error-message/ErrorMessage";

export default function Details() {
  const { furnitureId } = useParams();

  const furniture = useDetailsFurniture(furnitureId);
  const [heartStatus, handleWishlist] = useUpdateWishlist();

  const [lengthReviews, averageReviews] = averageNumReviews(furniture.reviews);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [changeContent, setChangeContent] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  const { userId, role } = useContext(AuthContext);
  const { addToBasket } = useContext(BasketContext);
  const { message } = useContext(ErrorContext);

  const ref = useRef(null);

  return (
    <>
      <section className="details-section layout-padding">
        <div className="container">
          <div className="heading-container">
            <h2>Details Furniture</h2>
          </div>

          {message.text !== "" && <ErrorMessage newMessage={message} />}

          <div className="layout-padding2">
            <div className="wrapper-details">
              <div className="left-box">
                <div className="container-image">
                  <div className="container-small">
                    {furniture.imageUrl?.map((curImage, index) => (
                      <div
                        onClick={() => setImageIndex(index)}
                        className="image-box-small"
                        key={index}
                      >
                        <img
                          src={curImage}
                          className={
                            imageIndex === index
                              ? "small-image active"
                              : "small-image"
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <div className="container-large">
                    <i
                      onClick={() =>
                        imageIndex - 1 >= 0
                          ? setImageIndex((oldIndex) => oldIndex - 1)
                          : setImageIndex(furniture.imageUrl.length - 1)
                      }
                      className="bx bxs-left-arrow"
                    ></i>

                    <div className="image-box-large">
                      <img
                        src={furniture.imageUrl?.[imageIndex]}
                        className="large-image"
                      />
                    </div>

                    <i
                      onClick={() =>
                        imageIndex + 1 <= furniture.imageUrl.length - 1
                          ? setImageIndex((oldIndex) => oldIndex + 1)
                          : setImageIndex(0)
                      }
                      className="bx bxs-right-arrow"
                    ></i>
                  </div>
                </div>
              </div>

              <div className="right-box">
                <header className="header-right">
                  <h1>{furniture.name}</h1>
                </header>

                <div className="box-reviews">
                  <div className="stars">
                    <i
                      className={
                        averageReviews === 5
                          ? "bx bxs-star active"
                          : "bx bxs-star"
                      }
                    ></i>
                    <i
                      className={
                        averageReviews === 4
                          ? "bx bxs-star active"
                          : "bx bxs-star"
                      }
                    ></i>
                    <i
                      className={
                        averageReviews === 3
                          ? "bx bxs-star active"
                          : "bx bxs-star"
                      }
                    ></i>
                    <i
                      className={
                        averageReviews === 2
                          ? "bx bxs-star active"
                          : "bx bxs-star"
                      }
                    ></i>
                    <i
                      className={
                        averageReviews === 1
                          ? "bx bxs-star active"
                          : "bx bxs-star"
                      }
                    ></i>
                  </div>

                  <p
                    onClick={() =>
                      ref.current.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {lengthReviews} Reviews
                  </p>
                </div>

                <div className="box-price-quantity">
                  <div className="price">
                    <h3>Price</h3>
                    <p className="current-price">
                      $
                      {role !== "Admin"
                        ? furniture.price * quantity
                        : furniture.price}
                    </p>
                  </div>

                  {role !== "Admin" && (
                    <div className="quantity">
                      <h3>Quantity</h3>
                      <div className="quantity-btn">
                        <button
                          name="minus"
                          type="button"
                          onClick={() => {
                            if (quantity <= 0) {
                              return;
                            }
                            setQuantity((quantity) => quantity - 1);
                          }}
                        >
                          <i className="bx bx-minus"></i>
                        </button>
                        <p>{quantity}</p>
                        <button
                          name="plus"
                          type="button"
                          onClick={() => {
                            if (quantity >= 10) {
                              return;
                            }
                            setQuantity((quantity) => quantity + 1);
                          }}
                        >
                          <i className="bx bx-plus"></i>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="box-description-details">
                  <section className="content-header">
                    <div>
                      <p onClick={() => setChangeContent(true)}>Description</p>
                      <hr className={changeContent ? "active" : null} />
                    </div>

                    <div>
                      <p onClick={() => setChangeContent(false)}>Details</p>
                      <hr className={changeContent ? null : "active"} />
                    </div>
                  </section>

                  {changeContent && (
                    <div className="content">
                      <div>
                        <p>Category</p>
                        <p>{furniture.category}</p>
                      </div>

                      <div>
                        <p>
                          Year of <abbr title="Manufacture">MFR</abbr>
                        </p>
                        <p>{furniture.year}</p>
                      </div>

                      <div>
                        <p>Condition</p>
                        <p>{furniture.condition}</p>
                      </div>

                      <div>
                        <p>Description</p>
                        <p>{furniture.description}</p>
                      </div>
                    </div>
                  )}

                  {!changeContent && (
                    <div className="content">
                      <div>
                        <p>Size</p>
                        <p>{furniture.size}</p>
                      </div>

                      <div>
                        <p>Materials</p>
                        <p>{furniture.materials}</p>
                      </div>

                      <div>
                        <p>Color</p>
                        <p>{furniture.color}</p>
                      </div>

                      <div>
                        <p>Weight</p>
                        <p>{furniture.weight}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="box-total-price">
                  <div className="button-box">
                    {role === "Admin" ? (
                      <>
                        <Link
                          state={furniture}
                          className="btn-hover"
                          to={`/edit-furniture/${furnitureId}/admin`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => setIsDialogOpen(true)}
                          className="btn-hover"
                          name="delete"
                          type="button"
                        >
                          Delete
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          disabled={quantity <= 0 ? true : false}
                          onClick={() =>
                            addToBasket(furnitureId, quantity, furniture.price)
                          }
                          className={
                            quantity > 0 ? "btn-hover" : "btn-hover blur"
                          }
                          name="add-to-cart"
                          type="button"
                        >
                          Add to Basket
                        </button>
                        <button
                          onClick={() => handleWishlist(furnitureId)}
                          name="heart"
                          type="button"
                        >
                          <i
                            className={
                              heartStatus === "add" ||
                              (furniture.listUserLikes?.includes(userId) &&
                                heartStatus === "")
                                ? "bx bxs-heart bx-tada-hover active"
                                : "bx bxs-heart bx-tada-hover"
                            }
                          ></i>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="info-price">
              <span>The price do NOT includes VAT tax.</span>
            </div>
          </div>
        </div>
      </section>

      {furniture.reviews && (
        <Reviews reviewsArr={furniture.reviews} ref={ref} />
      )}

      {isDialogOpen && <MessageDialog onClose={() => setIsDialogOpen(false)} />}
    </>
  );
}

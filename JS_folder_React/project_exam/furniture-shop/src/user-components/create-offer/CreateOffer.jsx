import "../UserForms.css";

import { useForm } from "../../hooks/useForms";
import { Fragment, useContext } from "react";
import { ErrorContext } from "../../context/ErrorContext";
import { useCreateFurniture } from "../../hooks/useFurnitureResponse";
import ErrorMessage from "../../shared-components/error-message/ErrorMessage";

const initialValues = {
  name: "",
  category: "",
  year: "",
  materials: "",
  color: "",
  size: "",
  weight: "",
  condition: "",
  imageUrl: [""],
  price: "",
  description: "",
};

export default function CreateOffer() {
  const { errors, clearError } = useContext(ErrorContext);
  const createFurniture = useCreateFurniture();

  const {
    values,
    changeHandler,
    changeHandlerArr,
    handleField,
    submitCurForm,
  } = useForm(initialValues, createFurniture);

  return (
    <section className="create-offer-section layout-padding">
      <div className="container">
        <div className="heading-container">
          <h2>Create Offer</h2>
        </div>
        <div className="layout-padding2">
          <div className="wrapper-user">
            <form onSubmit={submitCurForm}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  value={values.name}
                  onChange={changeHandler}
                />
              </div>

              {errors.hasOwnProperty("name") && (
                <ErrorMessage newMessage={{ read: errors.name }} />
              )}

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Category*"
                  name="category"
                  value={values.category}
                  onChange={changeHandler}
                />
              </div>

              {errors.hasOwnProperty("category") && (
                <ErrorMessage newMessage={{ read: errors.category }} />
              )}

              <div className="input-box">
                <input
                  type="number"
                  placeholder="Year Manufactured*"
                  name="year"
                  value={values.year}
                  onChange={changeHandler}
                />
              </div>

              {errors.hasOwnProperty("year") && (
                <ErrorMessage newMessage={{ read: errors.year }} />
              )}

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Materials*"
                  name="materials"
                  value={values.materials}
                  onChange={changeHandler}
                />
              </div>

              {errors.hasOwnProperty("materials") && (
                <ErrorMessage newMessage={{ read: errors.materials }} />
              )}

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Color*"
                  name="color"
                  value={values.color}
                  onChange={changeHandler}
                />
              </div>

              {errors.hasOwnProperty("color") && (
                <ErrorMessage newMessage={{ read: errors.color }} />
              )}

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Size*"
                  name="size"
                  value={values.size}
                  onChange={changeHandler}
                />
              </div>

              {errors.hasOwnProperty("size") && (
                <ErrorMessage newMessage={{ read: errors.size }} />
              )}

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Weight*"
                  name="weight"
                  value={values.weight}
                  onChange={changeHandler}
                />
              </div>

              {errors.hasOwnProperty("weight") && (
                <ErrorMessage newMessage={{ read: errors.weight }} />
              )}

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Condition*"
                  name="condition"
                  value={values.condition}
                  onChange={changeHandler}
                />
              </div>

              {errors.hasOwnProperty("condition") && (
                <ErrorMessage newMessage={{ read: errors.condition }} />
              )}

              {values.imageUrl.map((input, index) => (
                <Fragment key={index}>
                  <div className="input-box">
                    <div className="images">
                      <input
                        type="text"
                        placeholder="Image-Url*"
                        name="imageUrl"
                        value={input}
                        onChange={(e) => changeHandlerArr(e, index)}
                      />

                      {values.imageUrl.length - 1 >= 1 && (
                        <i
                          onClick={() => {
                            clearError();
                            handleField("delete", index);
                          }}
                          className="bx bxs-trash"
                        ></i>
                      )}
                    </div>

                    {values.imageUrl.length - 1 === index &&
                      values.imageUrl.length < 4 && (
                        <div className="btn-container">
                          <button
                            className="btn btn-add"
                            type="button"
                            onClick={() => {
                              clearError();
                              handleField("add", index);
                            }}
                          >
                            Add More
                          </button>
                        </div>
                      )}
                  </div>

                  {errors.hasOwnProperty(`imageUrl[${index}]`) && (
                    <ErrorMessage
                      newMessage={{ read: errors[`imageUrl[${index}]`] }}
                    />
                  )}
                </Fragment>
              ))}

              <div className="input-box">
                <input
                  type="number"
                  placeholder="Price*"
                  name="price"
                  value={values.price}
                  onChange={changeHandler}
                />
              </div>

              {errors.hasOwnProperty("price") && (
                <ErrorMessage newMessage={{ read: errors.price }} />
              )}

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Description*"
                  name="description"
                  value={values.description}
                  onChange={changeHandler}
                />
              </div>

              {errors.hasOwnProperty("description") && (
                <ErrorMessage newMessage={{ read: errors.description }} />
              )}

              <button type="submit" className="btn">
                Create Offer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

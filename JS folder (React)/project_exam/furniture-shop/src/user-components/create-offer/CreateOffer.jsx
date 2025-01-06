import '../UserForms.css';

import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForms';
import { createFurnitureRequester } from '../../api-service/furnitureService';
import { useContext, useState } from 'react';
import { createFurnitureSchema } from '../../utils/schemaForm';
import { AuthContext } from '../../context/AuthContext';
import { trimValue } from '../../utils/trimValue';
import { ErrorContext } from '../../context/ErrorContext';


const initialValues = {
    name: '',
    category: '',
    year: '',
    materials: '',
    color: '',
    size: '',
    weight: '',
    condition: '',
    imageUrl: [''],
    price: '',
    description: '',
};

export default function CreateOffer() {

    const navigate = useNavigate();
    const { updateAuthError } = useContext(AuthContext);
    const { errors, handleError, clearError } = useContext(ErrorContext);

    const createFurniture = async (values) => {

        const trimValues = trimValue(values);

        try {
            await createFurnitureSchema.validate(trimValues, { abortEarly: false });
        } catch (error) {

            const newError = {};

            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            })

            handleError(newError);

            return;
        }

        try {
            await createFurnitureRequester(trimValues);
            navigate('/shop');
        } catch (error) {
            if (error.message === '403') return updateAuthError(true);

            console.error(error.message);
        }

    }

    const { values, changeHandler, changeHandlerArr, handleField, submitCurForm } = useForm(initialValues, createFurniture);

    return (
        <section className="create-offer-section layout-padding">
            <div className="container">
                <div className="heading-container">
                    <h2>
                        Create Offer
                    </h2>
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

                            {errors.hasOwnProperty('name') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.name}</p>
                                </div>
                            }

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Category*"
                                    name="category"
                                    value={values.category}
                                    onChange={changeHandler}
                                />

                            </div>

                            {errors.hasOwnProperty('category') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.category}</p>
                                </div>
                            }

                            <div className="input-box">

                                <input type="number"
                                    placeholder="Year Manufactured*"
                                    name="year"
                                    value={values.year}
                                    onChange={changeHandler}
                                />
                            </div>

                            {errors.hasOwnProperty('year') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.year}</p>
                                </div>
                            }

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Materials*"
                                    name="materials"
                                    value={values.materials}
                                    onChange={changeHandler}
                                />

                            </div>

                            {errors.hasOwnProperty('materials') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.materials}</p>
                                </div>
                            }

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Color*"
                                    name="color"
                                    value={values.color}
                                    onChange={changeHandler}
                                />

                            </div>

                            {errors.hasOwnProperty('color') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.color}</p>
                                </div>
                            }

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Size*"
                                    name="size"
                                    value={values.size}
                                    onChange={changeHandler}
                                />

                            </div>

                            {errors.hasOwnProperty('size') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.size}</p>
                                </div>
                            }

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Weight*"
                                    name="weight"
                                    value={values.weight}
                                    onChange={changeHandler}
                                />

                            </div>

                            {errors.hasOwnProperty('weight') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.weight}</p>
                                </div>
                            }

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Condition*"
                                    name="condition"
                                    value={values.condition}
                                    onChange={changeHandler}
                                />

                            </div>

                            {errors.hasOwnProperty('condition') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.condition}</p>
                                </div>
                            }

                            {values.imageUrl.map((input, index) => (
                                <>
                                    <div className='input-box' key={index}>

                                        <div className="images">

                                            <input
                                                type="text"
                                                placeholder="Image-Url*"
                                                name="imageUrl"
                                                value={input}
                                                onChange={(e) => changeHandlerArr(e, index)}
                                            />

                                            {values.imageUrl.length - 1 >= 1 &&
                                                <i onClick={() => { clearError(); handleField('delete', index) }} className='bx bxs-trash'></i>
                                            }

                                        </div>

                                        {values.imageUrl.length - 1 === index && values.imageUrl.length < 4 &&

                                            <div className='btn-container'>
                                                <button className='btn btn-add' type='button' onClick={() => { clearError(); handleField('add', index) }}>Add More</button>
                                            </div>
                                        }

                                    </div>

                                    {errors.hasOwnProperty(`imageUrl[${index}]`) &&
                                        <div className='error-container'>
                                            <i className='bx bxs-error-circle bx-tada' ></i>
                                            <p className='error'>{errors[`imageUrl[${index}]`]}</p>
                                        </div>}

                                </>

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

                            {errors.hasOwnProperty('price') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.price}</p>
                                </div>
                            }

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Description*"
                                    name="description"
                                    value={values.description}
                                    onChange={changeHandler}
                                />

                            </div>

                            {errors.hasOwnProperty('description') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.description}</p>
                                </div>
                            }

                            <button type="submit" className="btn">Create Offer</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
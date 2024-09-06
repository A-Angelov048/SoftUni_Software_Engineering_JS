import '../UserForms.css'

import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForms';
import { createFurnitureRequester } from '../../service/furnitureService';
import { useState } from 'react';
import { createFurnitureSchema } from '../../utils/schemaForm';


const initialValues = {
    name: '',
    category: '',
    year: '',
    materials: '',
    color: '',
    size: '',
    weight: '',
    condition: '',
    imageUrl: '',
    price: '',
    description: '',
}

export default function CreateOffer() {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const createFurniture = async (values) => {

        try {
            await createFurnitureSchema.validate(values, { abortEarly: false });
        } catch (error) {

            const newError = {}

            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            })

            setErrors(newError);

            return;
        }

        try {
            await createFurnitureRequester(values);
            navigate('/shop');
        } catch (error) {
            console.error(error.message);
        }

    }

    const { values, changeHandler, submitCurForm } = useForm(initialValues, createFurniture);

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

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Image*"
                                    name="imageUrl"
                                    value={values.imageUrl}
                                    onChange={changeHandler}
                                />

                            </div>

                            {errors.hasOwnProperty('imageUrl') &&
                                <div className='error-container'>
                                    <i className='bx bxs-error-circle bx-tada' ></i>
                                    <p className='error'>{errors.imageUrl}</p>
                                </div>
                            }

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
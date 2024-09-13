
import '../UserForms.css'

import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForms';
import { editFurnitureRequester } from '../../api-service/furnitureService';
import { useContext } from 'react';
import { FurnitureContext } from '../../context/FurnitureContext';
import { AuthContext } from '../../context/AuthContext';



export default function Edit() {

    const navigate = useNavigate();
    const { furnitureId } = useParams();
    const furniture = useContext(FurnitureContext);
    const { updateError } = useContext(AuthContext);

    const initialValues = {
        name: furniture.name,
        category: furniture.category,
        year: furniture.year,
        materials: furniture.materials,
        color: furniture.color,
        size: furniture.size,
        weight: furniture.weight,
        condition: furniture.condition,
        imageUrl: furniture.imageUrl,
        price: furniture.price,
        description: furniture.description,
    };

    const editFurniture = async (values) => {

        try {
            await editFurnitureRequester(furnitureId, values);
            navigate(`/details-furniture/${furnitureId}`);
        } catch (error) {
            if (error.message === '403') return updateError(true);

            console.error(error.message);
        }

    }


    const { values, changeHandler, submitCurForm } = useForm(initialValues, editFurniture);

    return (
        <section className="create-offer-section layout-padding">
            <div className="container">
                <div className="heading-container">
                    <h2>
                        Edit Furniture
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

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Category*"
                                    name="category"
                                    value={values.category}
                                    onChange={changeHandler}
                                />

                            </div>

                            <div className="input-box">

                                <input type="number"
                                    placeholder="Year Manufactured*"
                                    name="year"
                                    value={values.year}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Materials*"
                                    name="materials"
                                    value={values.materials}
                                    onChange={changeHandler}
                                />

                            </div>

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Color*"
                                    name="color"
                                    value={values.color}
                                    onChange={changeHandler}
                                />

                            </div>

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Size*"
                                    name="size"
                                    value={values.size}
                                    onChange={changeHandler}
                                />

                            </div>

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Weight*"
                                    name="weight"
                                    value={values.weight}
                                    onChange={changeHandler}
                                />

                            </div>

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Condition*"
                                    name="condition"
                                    value={values.condition}
                                    onChange={changeHandler}
                                />

                            </div>

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Image*"
                                    name="imageUrl"
                                    value={values.imageUrl}
                                    onChange={changeHandler}
                                />

                            </div>

                            <div className="input-box">

                                <input
                                    type="number"
                                    placeholder="Price*"
                                    name="price"
                                    value={values.price}
                                    onChange={changeHandler}
                                />

                            </div>

                            <div className="input-box">

                                <input
                                    type="text"
                                    placeholder="Description*"
                                    name="description"
                                    value={values.description}
                                    onChange={changeHandler}
                                />

                            </div>

                            <button type="submit" className="btn">Edit</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
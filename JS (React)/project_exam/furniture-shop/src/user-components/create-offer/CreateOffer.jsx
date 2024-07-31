import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForms';
import { createFurnitureRequester } from '../../service/furnitureService';
import '../UserForms.css'

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

    const createFurniture = async (values) => {

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

                            <button type="submit" className="btn">Create Offer</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
import './Search.css';

import BrandContainer from "../../shared-components/brand-container/BrandContainer";
import { useForm } from '../../hooks/useForms';
import { getSearchFurniture } from '../../api-service/furnitureService';
import { useSetFurniture } from '../../hooks/useFurnitureReducer';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { trimValue } from '../../utils/trimValue';


const initialValues = {
    name: '',
};

export default function Search() {

    const [furniture, dispatch] = useSetFurniture();
    const [flagState, setFlagState] = useState(false);
    const { updateAuthError } = useContext(AuthContext);

    const search = async (values) => {

        if (!values.name) return setFlagState(true);

        const trimValues = trimValue(values);

        try {
            const response = await getSearchFurniture(trimValues);

            if (response.length === 0) {
                setFlagState(true);
            } else {
                setFlagState(false);
            }

            dispatch({ type: 'GET_FURNITURE', payload: response });
        } catch (error) {
            if (error.message === '403') return updateAuthError(true);

            console.error(error.message);
        }

    }

    const { values, changeHandler, submitCurForm } = useForm(initialValues, search);

    return (
        <section className="search-section layout-padding">

            <div className="container">

                <div className="heading-container">
                    <h2>
                        Search
                    </h2>
                </div>

                <div className="search-form layout-padding2">
                    <div className="wrapper-search">
                        <form onSubmit={submitCurForm}>
                            <div className="input-box">

                                <input
                                    type="text"
                                    name="name"
                                    className="search-input"
                                    placeholder="Search by name"
                                    value={values.name}
                                    onChange={changeHandler}
                                />

                                <i className='bx bxs-search-alt-2'></i>

                            </div>
                            <button type="submit" className="search-button">Search</button>
                        </form>
                    </div>
                </div>

                {
                    flagState ?

                        <div className="no-match">
                            <h2 className=".h2">Whoops sorry no match was found!</h2>
                        </div>

                        :

                        <BrandContainer furniture={furniture} />

                }

            </div>
        </section>
    );
}
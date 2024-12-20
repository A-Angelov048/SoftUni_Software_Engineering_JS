import { useState } from "react";


export function useForm(initialValues, submitCallBack) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        
        const name = !!e.target.name ? e.target.name : 'rating';
        const value = !!e.target.dataset.rating ? e.target.dataset.rating : e.target.value;

        setValues(oldValue => ({
            ...oldValue,
            [name]: value
        }));

    };

    const changeHandlerArr = (e, index) => {

        const imageUrl = [...values[e.target.name]];
        imageUrl[index] = e.target.value;

        setValues(oldValue => ({
            ...oldValue,
            imageUrl
        }));

    }

    const handleField = (operation, index) => {

        const imageUrl = [...values['imageUrl']];

        switch (operation) {

            case 'add': imageUrl.push(''); break;

            case 'delete': imageUrl.splice(index, 1); break;

        }

        setValues(oldValue => ({
            ...oldValue,
            imageUrl
        }));

    }

    const submitCurForm = (e) => {

        e.preventDefault();

        submitCallBack(values);
    };

    const resetCurForm = () => {
        setValues(initialValues);
    }

    return {
        values,
        changeHandler,
        changeHandlerArr,
        handleField,
        submitCurForm,
        resetCurForm,
    };
}
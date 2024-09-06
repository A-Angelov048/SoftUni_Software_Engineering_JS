import { useState } from "react";


export function useForm(initialValues, submitCallBack) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        
        const name = !!e.target.name ? e.target.name : 'rating';
        const value = !!e.target.dataset.rating ? e.target.dataset.rating : e.target.value;

        setValues(oldValue => ({
            ...oldValue,
            [name]: value.trim()
        }));

    };

    const submitCurForm = (e) => {

        e.preventDefault();

        submitCallBack(values);
    };

    return {
        values,
        changeHandler,
        submitCurForm,
    };
}
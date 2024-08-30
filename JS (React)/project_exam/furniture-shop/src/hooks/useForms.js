import { useState } from "react";


export function useForm(initialValues, submitCallBack) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {

        setValues(oldValue => ({
            ...oldValue,
            [e.target.name || 'rating']: e.target.value || e.target.dataset.rating,
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
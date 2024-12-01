import '../Profile.css';

import { useContext, useState } from 'react';
import { useForm } from '../../../hooks/useForms';
import { editProfile } from '../../../api-service/userService';
import { AuthContext } from '../../../context/AuthContext';
import { profileSchema } from '../../../utils/schemaForm';
import { trimValue } from '../../../utils/trimValue';
import { ErrorContext } from '../../../context/ErrorContext';


export default function ProfileEditing() {

    const { username, imageProfile, location, changeAuthState, updateAuthError } = useContext(AuthContext);
    const { errors, handleError, clearError } = useContext(ErrorContext);

    const [handleTag, setHandleTag] = useState(false);

    const initialValues = {
        imageProfile: imageProfile || '',
        username: username || '',
        location: location || '',
    };

    const changeUserInfo = async (values) => {

        const trimValues = trimValue(values);

        try {
            await profileSchema.validate(trimValues, { abortEarly: false });
        } catch (error) {

            const newError = {};

            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            })

            handleError(newError);

            return;
        }

        try {

            const result = await editProfile(trimValues);
            changeAuthState(result);
            setHandleTag(!handleTag);

            handleError({ successMessage: 'Form submit successfully' });

            setTimeout(() => {

                clearError();

            }, 2000);

        } catch (error) {

            if (error.message === '403') return updateAuthError(true);

            handleError({ errorMessage: error.message });

            setTimeout(() => {

                clearError();

            }, 2000);

        }

    }

    const { values, changeHandler, submitCurForm } = useForm(initialValues, changeUserInfo);

    return (
        <details open={handleTag ? false : null}>
            <summary>Profile editing</summary>
            <form onSubmit={submitCurForm}>

                <div className="input-box">

                    <input type="text"
                        name="username"
                        placeholder="Username*"
                        value={values.username}
                        onChange={changeHandler}
                    />

                </div>

                {errors.hasOwnProperty('username') &&
                    <div className='message-container error'>
                        <i className='bx bxs-error-circle bx-tada' ></i>
                        <p className='error'>{errors.username}</p>
                    </div>
                }

                <div className="input-box">

                    <input type="text"
                        name="location"
                        placeholder="City or post code"
                        value={values.location}
                        onChange={changeHandler}
                    />

                </div>

                <div className="input-box">

                    <input type="text"
                        name="imageProfile"
                        placeholder="Profile image"
                        value={values.imageProfile}
                        onChange={changeHandler}
                    />

                </div>

                <button type="submit" className="btn">Save</button>

            </form>
        </details>
    );
}
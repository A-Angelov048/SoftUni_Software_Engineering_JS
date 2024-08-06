import './Settings.css'

import { useContext, useState } from 'react';
import { useForm } from '../../../hooks/useForms';
import { editProfile } from '../../../service/userService';
import { AuthContext } from '../../../context/AuthContext';
import { profileSchema } from '../../../utils/schemaForm';


export default function Settings() {

    const { imageProfile, username, location, changeAuthState } = useContext(AuthContext);

    const initialValues = {
        imageProfile: imageProfile,
        username: username,
        location: location,
    }

    const [errorBoolean, setBoolean] = useState(false);
    const [errors, setErrors] = useState({});


    const changeUserInfo = async (values) => {

        try {
            await profileSchema.validate(values, { abortEarly: false });
        } catch (error) {

            const newError = {}

            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            })

            setBoolean(true);
            setErrors(newError);

            return;
        }

        try {
            const result = await editProfile(values);
            setBoolean(false);
            changeAuthState(result);
        } catch (error) {
            console.error(error.message);
        }

    }


    const { values, changeHandler, submitCurForm } = useForm(initialValues, changeUserInfo)

    return (
        <div className="settings layout-padding2">

            <details>
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

                    {errorBoolean && errors.hasOwnProperty('username') &&
                        <div className='error-container'>
                            <i class='bx bxs-error-circle bx-tada' ></i>
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

        </div>
    );
}
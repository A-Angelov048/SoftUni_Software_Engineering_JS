import './Settings.css'

import { useContext, useState } from 'react';
import { useForm } from '../../../hooks/useForms';
import { editProfile } from '../../../api-service/userService';
import { AuthContext } from '../../../context/AuthContext';
import { profileSchema } from '../../../utils/schemaForm';


export default function Settings() {

    const { imageProfile, username, location, changeAuthState } = useContext(AuthContext);
    const [showTextState, setShowText] = useState(false);

    const initialValues = {
        imageProfile: imageProfile,
        username: username,
        location: location,
    }

    const [errors, setErrors] = useState({});


    const changeUserInfo = async (values) => {

        try {
            await profileSchema.validate(values, { abortEarly: false });
        } catch (error) {

            const newError = {}

            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            })

            setErrors(newError);

            return;
        }

        try {
            const result = await editProfile(values);
            setErrors({});
            changeAuthState(result);
        } catch (error) {

            setShowText(true);
            setErrors({ message: error.message });

            setTimeout(() => {

                setShowText(false);
                setErrors({});

            }, 4000)

        }

    }


    const { values, changeHandler, submitCurForm } = useForm(initialValues, changeUserInfo)

    return (

        <div className="settings layout-padding2">
            {errors.hasOwnProperty('message') && showTextState &&
                <div className='error-container position disappear-text'>
                    <i className='bx bxs-error-circle bx-tada' ></i>
                    <p className='error bigger-font'>{errors.message}</p>
                </div>
            }
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

                    {errors.hasOwnProperty('username') &&
                        <div className='error-container'>
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

        </div>
    );
}
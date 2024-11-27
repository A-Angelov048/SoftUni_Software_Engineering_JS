import './Settings.css';

import { useContext, useState } from 'react';
import { useForm } from '../../../hooks/useForms';
import { editProfile } from '../../../api-service/userService';
import { AuthContext } from '../../../context/AuthContext';
import { profileSchema, passwordSchema } from '../../../utils/schemaForm';
import { useLocation } from 'react-router-dom';
import { trimValue } from '../../../utils/trimValue';


export default function Settings() {

    const location = useLocation();
    const user = location.state;

    const { changeAuthState, updateError } = useContext(AuthContext);
    const [showTextState, setShowText] = useState(false);
    const [showHideCurPassword, setShowHide] = useState(true);
    const [showHideNewPassword, setShowHideNew] = useState(true);

    const initialValues = {
        imageProfile: user.imageProfile || '',
        username: user.username || '',
        location: user.location || '',
        password: '',
        newPassword: '',
        reNewPassword: '',
    };

    const [errors, setErrors] = useState({});


    const changeUserInfo = async (values, eventTarget) => {

        let newValues;
        let validatorSchema;

        switch (eventTarget.parentNode.id) {
            case 'profile-editing': validatorSchema = profileSchema, newValues = { username: values.username, location: values.location, imageProfile: values.imageProfile }; break;
            case 'password-change': validatorSchema = passwordSchema, newValues = { password: values.password, newPassword: values.newPassword, reNewPassword: values.reNewPassword }; break;
        }

        const trimValues = trimValue(newValues);

        try {
            await validatorSchema.validate(trimValues, { abortEarly: false });
        } catch (error) {

            const newError = {};

            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            })

            setErrors(newError);

            return;
        }

        try {
            const result = await editProfile(trimValues);
            setErrors({});
            changeAuthState(result);
        } catch (error) {

            if (error.message === '403') return updateError(true);

            setShowText(true);
            setErrors({ message: error.message });

            setTimeout(() => {

                setShowText(false);
                setErrors({});

            }, 4000);

        }

    }


    const { values, changeHandler, submitCurForm } = useForm(initialValues, changeUserInfo);

    return (

        <div className="settings layout-padding2">
            {errors.hasOwnProperty('message') && showTextState &&
                <div className='error-container position disappear-text'>
                    <i className='bx bxs-error-circle bx-tada' ></i>
                    <p className='error bigger-font'>{errors.message}</p>
                </div>
            }
            <details id='profile-editing'>
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

            <details id='password-change'>
                <summary>Password change</summary>
                <form onSubmit={submitCurForm}>

                    <div className="input-box">

                        <input type={showHideCurPassword ? "password" : "text"}
                            name="password"
                            placeholder="Current password*"
                            value={values.password}
                            onChange={changeHandler}
                        />
                        {
                            showHideCurPassword ?
                                <i onClick={() => { setShowHide(!showHideCurPassword) }} className='bx bxs-show'></i>
                                :
                                <i onClick={() => { setShowHide(!showHideCurPassword) }} className='bx bxs-hide'></i>
                        }

                    </div>

                    {errors.hasOwnProperty('password') &&
                        <div className='error-container'>
                            <i className='bx bxs-error-circle bx-tada' ></i>
                            <p className='error'>{errors.password}</p>
                        </div>
                    }

                    <div className="input-box">

                        <input type={showHideNewPassword ? "password" : "text"}
                            name="newPassword"
                            placeholder="New Password*"
                            value={values.newPassword}
                            onChange={changeHandler}
                        />
                        {
                            showHideNewPassword ?
                                <i onClick={() => { setShowHideNew(!showHideNewPassword) }} className='bx bxs-show'></i>
                                :
                                <i onClick={() => { setShowHideNew(!showHideNewPassword) }} className='bx bxs-hide'></i>
                        }

                    </div>

                    {errors.hasOwnProperty('newPassword') &&
                        <div className='error-container'>
                            <i className='bx bxs-error-circle bx-tada' ></i>
                            <p className='error'>{errors.newPassword}</p>
                        </div>
                    }

                    <div className="input-box">

                        <input type={showHideNewPassword ? "password" : "text"}
                            name="reNewPassword"
                            placeholder="Confirm new password*"
                            value={values.reNewPassword}
                            onChange={changeHandler}
                        />
                        {
                            showHideNewPassword ?
                                <i onClick={() => { setShowHideNew(!showHideNewPassword) }} className='bx bxs-show'></i>
                                :
                                <i onClick={() => { setShowHideNew(!showHideNewPassword) }} className='bx bxs-hide'></i>
                        }

                    </div>

                    {errors.hasOwnProperty('reNewPassword') &&
                        <div className='error-container'>
                            <i className='bx bxs-error-circle bx-tada' ></i>
                            <p className='error'>{errors.reNewPassword}</p>
                        </div>
                    }

                    <button type="submit" className="btn">Save password</button>

                </form>
            </details>

        </div>
    );
}
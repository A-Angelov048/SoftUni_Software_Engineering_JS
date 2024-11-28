import '../Profile.css';

import { useContext, useState } from 'react';
import { useForm } from '../../../hooks/useForms';
import { editProfile } from '../../../api-service/userService';
import { AuthContext } from '../../../context/AuthContext';
import { passwordSchema } from '../../../utils/schemaForm';
import { trimValue } from '../../../utils/trimValue';


export default function PasswordChange() {

    const { changeAuthState, updateError } = useContext(AuthContext);
    const [showTextState, setShowText] = useState(false);
    const [showHideCurPassword, setShowHide] = useState(true);
    const [showHideNewPassword, setShowHideNew] = useState(true);
    const [errors, setErrors] = useState({});


    const initialValues = {
        password: '',
        newPassword: '',
        reNewPassword: '',
    };

    const changeUserInfo = async (values) => {

        const trimValues = trimValue(values);

        try {
            await passwordSchema.validate(trimValues, { abortEarly: false });
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
    );
}
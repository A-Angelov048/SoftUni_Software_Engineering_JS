import '../Profile.css';

import { useContext, useState } from 'react';
import { useForm } from '../../../hooks/useForms';
import { editProfile } from '../../../api-service/userService';
import { AuthContext } from '../../../context/AuthContext';
import { passwordSchema } from '../../../utils/schemaForm';
import { trimValue } from '../../../utils/trimValue';
import { ErrorContext } from '../../../context/ErrorContext';


export default function PasswordChange() {

    const { changeAuthState, updateAuthError } = useContext(AuthContext);
    const { errors, handleError, clearError } = useContext(ErrorContext);

    const [handleTag, setHandleTag] = useState(false);
    const [showHideCurPassword, setShowHide] = useState(true);
    const [showHideNewPassword, setShowHideNew] = useState(true);


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

            handleError(newError);

            return;
        }

        try {

            const result = await editProfile(trimValues);
            changeAuthState(result);
            setHandleTag(!handleTag);

            handleError({ successMessage: 'Form submit successfully' });

            resetCurForm();

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

    const { values, changeHandler, submitCurForm, resetCurForm } = useForm(initialValues, changeUserInfo);

    return (
        <details open={handleTag ? false : null}>
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
                    <div className='message-container error'>
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
                    <div className='message-container error'>
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
                    <div className='message-container error'>
                        <i className='bx bxs-error-circle bx-tada' ></i>
                        <p className='error'>{errors.reNewPassword}</p>
                    </div>
                }

                <button type="submit" className="btn">Save password</button>

            </form>
        </details>
    );
}
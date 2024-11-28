import './Settings.css';

import { useState } from 'react';
import ProfileEditing from '../profileEditing/ProfileEditing';
import PasswordChange from '../passwordChange/PasswordChange';


export default function Settings() {

    const [showTextState, setShowText] = useState(false);
    const [errors, setErrors] = useState({});

    return (

        <div className="settings layout-padding2">
            {errors.hasOwnProperty('message') && showTextState &&
                <div className='error-container position disappear-text'>
                    <i className='bx bxs-error-circle bx-tada' ></i>
                    <p className='error bigger-font'>{errors.message}</p>
                </div>
            }

            <ProfileEditing />

            <PasswordChange />

        </div>
    );
}
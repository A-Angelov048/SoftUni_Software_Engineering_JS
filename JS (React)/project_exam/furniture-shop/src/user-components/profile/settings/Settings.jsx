import './Settings.css'
import { useContext } from 'react';

import { useForm } from '../../../hooks/useForms';
import { editProfile } from '../../../service/userService';
import { AuthContext } from '../../../context/AuthContext';

export default function Settings() {

    const { imageProfile, username, location, changeAuthState } = useContext(AuthContext);

    const initialValues = {
        imageProfile: imageProfile,
        username: username,
        location: location,
    }

    const changeUserInfo = async (values) => {
        const result = await editProfile(values);
        changeAuthState(result);
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
                            placeholder="Username *"
                            value={values.username}
                            onChange={changeHandler}
                        />

                    </div>

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
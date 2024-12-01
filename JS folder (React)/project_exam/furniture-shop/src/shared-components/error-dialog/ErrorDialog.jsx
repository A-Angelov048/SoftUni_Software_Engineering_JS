import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function ErrorDialog() {

    const navigate = useNavigate();
    const { changeAuthState, updateAuthError } = useContext(AuthContext);

    function onClose() {
        changeAuthState({});
        updateAuthError(false);
        navigate('/login');
    }

    return (
        <div className="overlay">
            <div className="content">

                <header className="header-content" >
                    <h2>Error dialog</h2>
                </header>

                <p>Session expired. Please log in again.</p>

                <div className="button-box">
                    <button onClick={onClose} name="ok" type="button" className="btn-hover">Ok</button>
                </div>

            </div>
        </div>
    );
}
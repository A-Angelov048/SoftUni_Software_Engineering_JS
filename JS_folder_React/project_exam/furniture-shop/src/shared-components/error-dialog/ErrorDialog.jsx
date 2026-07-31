import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function ErrorDialog() {
  const navigate = useNavigate();
  const { changeAuthState, updateAuthError } = useContext(AuthContext);

  function onClose() {
    changeAuthState({});
    updateAuthError(false);
    navigate("/login");
  }

  setTimeout(() => {
    onClose();
  }, 3000);

  return (
    <div className="overlay">
      <div className="content">
        <header className="header-content">
          <h2>Information dialog</h2>
        </header>

        <p>Session expired. Please log in again.</p>
      </div>
    </div>
  );
}

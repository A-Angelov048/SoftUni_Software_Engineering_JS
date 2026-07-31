import "./MessageDialog.css";

import { useNavigate, useParams } from "react-router-dom";
import { removeFurniture } from "../../api-service/furnitureService";
import { useErrorHandler } from "../../hooks/useErrorHandler";

export default function MessageDialog({ onClose }) {
  const navigate = useNavigate();
  const { furnitureId } = useParams();
  const errorHandler = useErrorHandler();

  async function deleteFurniture() {
    try {
      await removeFurniture(furnitureId);
      navigate("/shop");
    } catch (error) {
      errorHandler(error);
    }
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <header className="header-content">
          <h2>Message dialog</h2>
          <i className="bx bx-x" onClick={onClose}></i>
        </header>

        <p>Are you sure you want to delete this furniture?</p>

        <div className="button-box">
          <button
            onClick={deleteFurniture}
            name="delete"
            type="button"
            className="btn-hover-delete"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            name="cancel"
            type="button"
            className="btn-hover-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

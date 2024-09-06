import "./MessageDialog.css";

export default function MessageDialog() {
    
    return (
        <div className="overlay">
            <div className="content">

                <header className="header-content" >
                    <h2>Message dialog</h2>
                    <i class='bx bx-x' ></i>
                </header>

                <p>Are you sure you want to delete this furniture?</p>

                <div className="button-box">
                    <button name="delete" type="button" className="btn-hover-delete">Delete</button>
                    <button name="cancel" type="button" className="btn-hover-cancel">Cancel</button>
                </div>

            </div>
        </div>
    );
}
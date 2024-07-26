import './Settings.css'

export default function Settings() {
    return (
        <div className="settings layout-padding2">

            <details>
                <summary>Profile editing</summary>
                <form>

                    <div className="input-box">
                        <input type="text" name="location" placeholder="City or post code *" />
                    </div>

                    <div className="input-box">
                        <input type="text" name="username" placeholder="Username *" />
                    </div>

                    <div className="input-box">
                        <input type="email" name="email" placeholder="Email *" />
                    </div>

                    <button type="submit" className="btn">Save</button>

                </form>
            </details>

        </div>
    );
}
import './DeliveryForm.css';



export default function DeliveryForm() {
    return (
        <form className='delivery-form'>

            <div className='row-input'>

                <div className="form-group">
                    <input type="text" id="last-name" placeholder="Last name*" />
                </div>

                <div className="form-group">
                    <input type="text" id="first-name" placeholder="Name*" />
                </div>

            </div>

            <div className='row-input'>

                <div className="form-group">
                    <input type="text" id="address" placeholder="Address*" />
                </div>

                <div className="form-group">
                    <input type="text" id="zip-code" placeholder="Zip code*" />
                </div>

            </div>

            <div className="row-input">

                <div className="form-group">
                    <input type="text" id="region" placeholder="Region*" />
                </div>

                <div className="form-group">
                    <input type="text" id="city" placeholder="City / District*" />
                </div>

            </div>

            <div className="row-input">

                <div className="form-group">
                    <input type="text" id="district" placeholder="Neighborhood*" />
                </div>

                <div className="form-group">
                    <input type="email" id="email" placeholder="Email*" />
                </div>

            </div>

            <div className="form-group">
                <input type="tel" id="phone" placeholder="Phone number*" />
            </div>

            <button type="submit" className="save-btn">Save</button>

        </form>
    );
}
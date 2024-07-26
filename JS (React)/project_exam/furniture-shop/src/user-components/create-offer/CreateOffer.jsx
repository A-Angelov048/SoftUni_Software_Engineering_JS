import '../UserForms.css'

export default function CreateOffer() {

    
    return (
        <section className="create-offer-section layout-padding">
            <div className="container">
                <div className="heading-container">
                    <h2>
                        Create Offer
                    </h2>
                </div>
                <div className="layout-padding2">
                    <div className="wrapper-user">
                        <form>

                            <div className="input-box">
                                <input type="text" placeholder="Name*" name="name" />
                            </div>

                            <div className="input-box">
                                <input type="text" placeholder="Category*" name="category" />
                            </div>

                            <div className="input-box">
                                <input type="number" placeholder="Year Manufactured*" name="category" />
                            </div>

                            <div className="input-box">
                                <input type="text" placeholder="Materials*" name="materials" />
                            </div>

                            <div className="input-box">
                                <input type="text" placeholder="Color*" name="color" />
                            </div>

                            <div className="input-box">
                                <input type="text" placeholder="Size*" name="size" />
                            </div>

                            <div className="input-box">
                                <input type="text" placeholder="Weight*" name="weight" />
                            </div>

                            <div className="input-box">
                                <input type="text" placeholder="Condition*" name="condition" />
                            </div>

                            <div className="input-box">
                                <input type="text" placeholder="Image*" name="imageUrl" />
                            </div>

                            <div className="input-box">
                                <input type="number" placeholder="Price*" name="price" />
                            </div>

                            <div className="input-box">
                                <input type="text" placeholder="Description*" name="description" />
                            </div>

                            <button type="submit" className="btn">Create Offer</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
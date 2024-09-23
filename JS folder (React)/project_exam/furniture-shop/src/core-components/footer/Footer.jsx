import './Footer.css'

export default function Footer() {


    return (
        <footer>

            <div className="footer-content">

                <div className="info-logo">
                    <h2>
                        Furniture-Shop
                    </h2>
                </div>

                <div className="row">

                    <div className="info-contact box">
                        <h5>
                            About Shop
                        </h5>
                        <div>
                            <div className="img-box">
                                <img src="/images/location-white.png" width="18px" alt="" />
                            </div>
                            <p>
                                Address
                            </p>
                        </div>
                        <div>
                            <div className="img-box">
                                <img src="/images/telephone-white.png" width="12px" alt="" />
                            </div>
                            <p>
                                +359 123 456 789
                            </p>
                        </div>
                        <div>
                            <div className="img-box">
                                <img src="/images/envelope-white.png" width="18px" alt="" />
                            </div>
                            <p>
                                demo@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="info-info box">
                        <h5>
                            Information
                        </h5>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut soluta perspiciatis rerum sunt
                            sit obcaecati asperiores fugit accusamus tempore quos veritatis, adipisci quod distinctio saepe
                            nihil neque consectetur! Corrupti.
                        </p>
                        <div className="social-box">
                            <div href="#">
                                <img src="/images/fb.png" alt="" />
                            </div>
                            <div href="#">
                                <img src="/images/twitter.png" alt="" />
                            </div>
                            <div href="#">
                                <img src="/images/linkedin.png" alt="" />
                            </div>
                            <div href="#">
                                <img src="/images/youtube.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="info-insta box">
                        <h5>
                            Instagram
                        </h5>
                        <div className="insta-container">

                            <div>
                                <div className="insta-image">
                                    <img src="/images/i-1.jpg" alt="" />
                                </div>

                                <div className="insta-image">
                                    <img src="/images/i-2.jpg" alt="" />
                                </div>

                                <div className="insta-image">
                                    <img src="/images/i-6.jpg" alt="" />
                                </div>
                            </div>

                            <div>

                                <div className="insta-image">
                                    <img src="/images/i-3.jpg" alt="" />
                                </div>


                                <div className="insta-image">
                                    <img src="/images/i-4.jpg" alt="" />
                                </div>


                                <div className="insta-image">
                                    <img src="/images/i-5.jpg" alt="" />
                                </div>

                            </div>

                            <div>

                                <div className="insta-image">
                                    <img src="/images/i-5.jpg" alt="" />
                                </div>


                                <div className="insta-image">
                                    <img src="/images/i-6.jpg" alt="" />
                                </div>


                                <div className="insta-image">
                                    <img src="/images/i-1.jpg" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="info-form box">
                        <h5>
                            Contact us
                        </h5>
                        <div className="container-form">

                            <form>

                                <div>
                                    <label htmlFor="name">Name *</label>
                                    <input type="text" name="name" placeholder="Write your name here." />
                                </div>

                                <div>
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" name="email" placeholder="Write your email here." />
                                </div>

                                <div>
                                    <label htmlFor="message">Message *</label>
                                    <textarea name="message" placeholder="Write something..."></textarea>
                                </div>

                                <input type="submit" value="Submit" />

                            </form>

                        </div>


                    </div>

                </div>
            </div>

        </footer>
    );
}
import './About.css'

export default function About() {
    return (
        <section className="about-section layout-padding">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <div className="detail-box">
                            <div className="heading-container">
                                <h2>
                                    About Us
                                </h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet saepe, labore
                                odit
                                laudantium, repellat voluptatum delectus nam illum cumque voluptatem commodi quos
                                beatae
                                eveniet ipsam consequuntur praesentium qui vitae! Lorem ipsum dolor sit, amet
                                consectetur adipisicing elit. Qui, quasi libero eveniet nulla laudantium eaque
                                exercitationem aperiam nihil distinctio illo necessitatibus nesciunt eius labore
                                assumenda et possimus, eum illum adipisci!
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="img-box">
                            <img src="/images/about-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
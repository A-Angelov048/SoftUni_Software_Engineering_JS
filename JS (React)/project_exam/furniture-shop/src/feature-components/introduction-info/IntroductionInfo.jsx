import './IntroductionInfo.css'


export default function IntroductionInfo() {
    return (
        <section className="introduction-info">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <div className="detail-box">
                            <h1>
                                The Latest
                                <p>
                                    Furniture
                                </p>
                            </h1>
                            <p>
                                That brighten every room. All thoughtfully designed and meticulously crafted furniture,
                                for your home sweet home.
                            </p>
                        </div>
                    </div>
                    <div className="column img-container">
                        <div className="img-box">
                            <img src="/images/slider-img.png" alt="chair" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
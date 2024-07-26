import './BrandContainer.css'

export default function BrandContainer() {

    

    return (
        <div className="brand-container layout-padding2">
        <div className="box">
            <a href="">
                <div className="new">
                    <h5>
                        New
                    </h5>
                </div>
                <div className="img-box">
                    <img src="images/slider-img.png" alt=""/>
                </div>
                <div className="detail-box">
                    <h6 className="price">
                        $100
                    </h6>
                    <h6>
                        Chair
                    </h6>
                </div>
            </a>
        </div>
        <div className="box">
            <a href="">
                <div className="img-box">
                    <img src="images/slider-img.png" alt=""/>
                </div>
                <div className="detail-box">
                    <h6 className="price">
                        $100
                    </h6>
                    <h6>
                        Chair
                    </h6>
                </div>
            </a>
        </div>
    </div>
   );
}
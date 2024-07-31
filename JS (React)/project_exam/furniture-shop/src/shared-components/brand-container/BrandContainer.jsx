import { Link, useLocation } from 'react-router-dom';
import './BrandContainer.css'

export default function BrandContainer({ furniture }) {

    const location = useLocation();

    return (
        <div className="brand-container layout-padding2">

            {furniture.map((x, index) => (

                <div className="box" key={x._id}>
                    <Link to={`/details/${x._id}`}>

                        {
                            location.pathname == '/' && index == '0' &&

                            <div className="new">
                                <h5>
                                    New
                                </h5>
                            </div>
                        }

                        <div className="img-box">
                            <img src={x.imageUrl} alt="" />
                        </div>
                        <div className="detail-box">
                            <h6 className="price">
                                ${x.price}
                            </h6>
                            <h6>
                                {x.name}
                            </h6>
                        </div>
                    </Link>
                </div>

            ))}

        </div>
    );
}
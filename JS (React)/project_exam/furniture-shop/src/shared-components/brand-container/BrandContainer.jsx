import { Link, useLocation } from 'react-router-dom';
import './BrandContainer.css'

export default function BrandContainer({ furniture }) {

    const location = useLocation();

    return (
        <div className="brand-container layout-padding2">

            {furniture.map((furniture, index) => (

                <div className="box" key={furniture._id}>
                    <Link to={`/details-furniture/${furniture._id}`} key={furniture._id}>

                        {
                            location.pathname == '/' && index == '0' &&

                            <div className="new">
                                <h5>
                                    New
                                </h5>
                            </div>
                        }

                        <div className="img-box">
                            <img src={furniture.imageUrl} alt="" />
                        </div>
                        <div className="detail-box">
                            <h6 className="price">
                                ${furniture.price}
                            </h6>
                            <h6>
                                {furniture.name}
                            </h6>
                        </div>
                    </Link>
                </div>

            ))}

        </div>
    );
}
import { Link, useLocation } from 'react-router-dom';
import './BrandContainer.css'

export default function BrandContainer({ furniture }) {

    let curFurniture;
    const location = useLocation();

    if (furniture === undefined) {
        curFurniture = location.state;
    } else {
        curFurniture = furniture;
    }

    return (
        <div className="brand-container layout-padding2">

            {curFurniture?.map((furniture, index) => (

                <Link className="box" to={`/details-furniture/${furniture._id}`} key={furniture._id}>

                    <div>
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
                    </div>

                </Link>

            ))
            }

        </div >
    );
}
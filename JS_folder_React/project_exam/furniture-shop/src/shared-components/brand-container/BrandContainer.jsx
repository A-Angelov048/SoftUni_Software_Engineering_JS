import { Link, useLocation } from "react-router-dom";
import "./BrandContainer.css";

export default function BrandContainer({ furniture, curIndex }) {
  const location = useLocation();

  return (
    <Link className="box-brand" to={`/details-furniture/${furniture._id}`}>
      <div>
        {location.pathname == "/" && curIndex == "0" && (
          <div className="new">
            <h5>New</h5>
          </div>
        )}

        <div className="img-box">
          <img src={furniture.imageUrl[0]} alt="" />
        </div>
        <div className="detail-box">
          <h6 className="price">${furniture.price}</h6>
          <h6>{furniture.name}</h6>
        </div>
      </div>
    </Link>
  );
}

import "./Search.css";

import { useSearchFurniture } from "../../hooks/useFurnitureResponse";
import { useForm } from "../../hooks/useForms";
import SearchItem from "./searchItem/SearchItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const initialValues = {
  furnitureName: "",
};

export default function Search({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { values, changeHandler } = useForm(initialValues, () => {});
  const [furniture, flag] = useSearchFurniture(values);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="overlay-search" onClick={onClose}>
      <div className="wrapper-search" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/shop", { state: { search: values.furnitureName } });
          }}
        >
          <div className="input-box">
            <input
              ref={inputRef}
              type="text"
              name="furnitureName"
              className="search-input"
              placeholder="Search by name"
              value={values.furnitureName}
              onChange={changeHandler}
            />

            <i className="bx bxs-search-alt-2"></i>
          </div>
        </form>
        <hr />
        {furniture.length > 0
          ? furniture.map((cur) => <SearchItem key={cur._id} item={cur} />)
          : flag && (
              <div className="no-match">
                <h2>Whoops sorry no match was found!</h2>
              </div>
            )}
      </div>
    </div>
  );
}

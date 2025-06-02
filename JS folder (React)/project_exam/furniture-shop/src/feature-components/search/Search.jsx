import "./Search.css";

import BrandContainer from "../../shared-components/brand-container/BrandContainer";
import { useForm } from "../../hooks/useForms";
import { useSearchFurniture } from "../../hooks/useFurnitureResponse";

const initialValues = {
  name: "",
};

export default function Search() {
  const [furniture, flagState, search] = useSearchFurniture();

  const { values, changeHandler, submitCurForm } = useForm(
    initialValues,
    search
  );

  return (
    <section className="search-section layout-padding">
      <div className="container">
        <div className="heading-container">
          <h2>Search</h2>
        </div>

        <div className="search-form layout-padding2">
          <div className="wrapper-search">
            <form onSubmit={submitCurForm}>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  className="search-input"
                  placeholder="Search by name"
                  value={values.name}
                  onChange={changeHandler}
                />

                <i className="bx bxs-search-alt-2"></i>
              </div>
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
          </div>
        </div>

        {flagState ? (
          <div className="no-match">
            <h2 className=".h2">Whoops sorry no match was found!</h2>
          </div>
        ) : (
          <div className="brand-container layout-padding2">
            {furniture.map((current, index) => (
              <BrandContainer
                furniture={current}
                curIndex={index}
                key={current._id}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

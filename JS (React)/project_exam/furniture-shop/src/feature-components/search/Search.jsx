import './Search.css'
import BrandContainer from "../../shared-components/brand-container/BrandContainer";

export default function Search() {
    return (
        <section className="search-section layout-padding">

            <div className="container">

                <div className="heading-container">
                    <h2>
                        Search
                    </h2>
                </div>

                <div className="search-form layout-padding2">
                    <div className="wrapper-search">
                        <form>
                            <div className="input-box">
                                <input type="text" name="name" className="search-input" placeholder="Enter your search name" />
                            </div>
                            <div className="input-box">
                                <input type="text" name="type" className="search-input" placeholder="Enter your search type" />
                            </div>
                            <button type="submit" className="search-button">Search</button>
                        </form>
                    </div>
                </div>

                <BrandContainer />

                <div className="no-match">
                    <h2 className=".h2">Whoops sorry no match was found!</h2>
                </div>

            </div>
        </section>
    );
}
import './Reviews.css'

export default function Reviews() {
    return (
        <section className="recent-reviews">

            <div className="container">

                <div className="heading-container">
                    <h2>Recent reviews</h2>
                </div>

                <div className="layout-padding2">
                    <div className="wrapper-reviews">

                        <div className="write-review">
                            <form action="">

                                <div className="header">
                                    <h3>How would you rate this furniture?</h3>
                                </div>

                                <div className="stars-review top">
                                    <div>
                                        <button type="button" className="btn-star">
                                            <i className='bx bxs-star'></i>
                                        </button>
                                        <button type="button" className="btn-star">
                                            <i className='bx bxs-star'></i>
                                        </button>
                                        <button type="button" className="btn-star active">
                                            <i className='bx bxs-star'></i>
                                        </button>
                                        <button type="button" className="btn-star">
                                            <i className='bx bxs-star'></i>
                                        </button>
                                        <button type="button" className="btn-star">
                                            <i className='bx bxs-star'></i>
                                        </button>
                                    </div>

                                    <input type="hidden" name="rating" value="1" />
                                </div>

                                <div className="center top">
                                    <div className="profile">
                                        <img alt=""
                                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" />
                                    </div>

                                    <h3>Emily Selman</h3>
                                </div>

                                <textarea name="review" rows="4" placeholder="Write a review about the furniture.">
                                </textarea>

                                <button className="btn" type="submit">Submit review</button>

                            </form>
                        </div>

                        <div className="content-review">

                            <div className="center">
                                <div className="profile">
                                    <img alt=""
                                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" />
                                </div>

                                <header>
                                    <h3>Emily Selman</h3>
                                    <p>July 16, 2021</p>
                                </header>
                            </div>

                            <div className="stars-review top">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                            </div>
                            <div className="top">
                                <p>This icon pack is just what I need for my latest project. There's an icon for just
                                    about anything I could
                                    ever need. Love the playful look!
                                </p>
                            </div>
                        </div>

                        <div className="content-review">

                            <div className="center">
                                <div className="profile">
                                    <img alt=""
                                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" />
                                </div>

                                <header>
                                    <h3>Emily Selman</h3>
                                    <p>July 16, 2021</p>
                                </header>
                            </div>

                            <div className="stars-review top">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                            </div>
                            <div className="top">
                                <p>This icon pack is just what I need for my latest project. There's an icon for just
                                    about anything I could
                                    ever need. Love the playful look!
                                </p>
                            </div>
                        </div>

                        <button className="btn" name="show-reviews" type="button">Show all reviews</button>

                    </div>
                </div>
            </div>
        </section>
    );
}
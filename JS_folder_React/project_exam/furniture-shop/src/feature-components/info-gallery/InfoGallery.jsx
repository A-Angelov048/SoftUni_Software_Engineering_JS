import "./InfoGallery.css";

export default function InfoGallery() {
  return (
    <section className="image-section layout-padding">
      <div className="container">
        <div className="image-gallery">
          <div className="image-container">
            <img src="/images/idea_971821.png" alt="Image 1" />
            <h2>Innovative designs</h2>
          </div>
          <div className="image-container">
            <img src="/images/truck_6485058.png" alt="Image 2" />
            <h2>Fast & Free shipping</h2>
          </div>
          <div className="image-container">
            <img src="/images/test_3645667.png" alt="Image 3" />
            <h2>Premium quality</h2>
          </div>
          <div className="image-container">
            <img src="/images/stars_5371585.png" alt="Image 4" />
            <h2>Rated 5 stars</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

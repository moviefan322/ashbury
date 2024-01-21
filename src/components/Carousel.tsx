/* eslint-disable react/no-unescaped-entities */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <section className={`${styles.carousel} text-white`}>
      <div className={`${styles.matte}`}></div>
      <div className="carousel slide">
        <div className="carousel-inner">
          {/* <!-- Slide 1 --> */}
          <div
            className={`${styles.carouselItem1} active d-flex flex-column justify-content-center align-items-center`}
          >
            <h1 className={styles.zindex}>Annual Town Hall</h1>
            <h1 className={styles.zindex}>Wed Feb 7</h1>
            <h1 className={styles.zindex}>6:30pm</h1>
            <button className={`noStyleButt ${styles.carouselButt}`}>RSVP Here</button>
          </div>
          {/* <!-- Slide 2 --> */}
          <div className="carousel-item">
            <h1 className={styles.zindex}>My</h1>
          </div>
          {/* <!-- Slide 3 --> */}
          <div className="carousel-item">
            <h1>Balls</h1>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <FaChevronLeft className={styles.zindex} />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <FaChevronRight className={styles.zindex} />
        </button>
      </div>
    </section>
  );
}

export default Carousel;

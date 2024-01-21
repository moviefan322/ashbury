/* eslint-disable react/no-unescaped-entities */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <section id="testimonials" className={`${styles.carousel} text-white`}>
      <div id="myCarousel" className="carousel slide">
        <div className={`${styles.matte}`}></div>
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div
              className={`${styles.carouselItem1} d-flex flex-column justify-content-center align-items-center`}
            >
              <h1 className={styles.zindex}>Annual Town Hall</h1>
              <h1 className={styles.zindex}>Wed Feb 7</h1>
              <h1 className={styles.zindex}>6:30pm</h1>
              <button className={`noStyleButt ${styles.carouselButt}`}>
                RSVP Here
              </button>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <div
              className={`${styles.carouselItem2} d-flex flex-column justify-content-center align-items-center`}
            >
              <h1 className={styles.zindex}>Annual Town Hall</h1>
              <h1 className={styles.zindex}>Wed Feb 7</h1>
              <h1 className={styles.zindex}>6:30pm</h1>
              <button className={`noStyleButt ${styles.carouselButt}`}>
                RSVP Here
              </button>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <div
              className={`${styles.carouselItem3} d-flex flex-column justify-content-center align-items-center`}
            >
              <h1 className={styles.zindex}>Annual Town Hall</h1>
              <h1 className={styles.zindex}>Wed Feb 7</h1>
              <h1 className={styles.zindex}>6:30pm</h1>
              <button className={`noStyleButt ${styles.carouselButt}`}>
                RSVP Here
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <FaChevronLeft className={styles.zindex} />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <FaChevronRight className={styles.zindex} />
        </button>
      </div>
    </section>
  );
}

export default Carousel;

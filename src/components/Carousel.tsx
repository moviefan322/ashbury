import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import styles from './Carousel.module.css';

function CustomCarousel() {
  return (
    <section id="testimonials" className="text-white">
      <Carousel id="myCarousel" slide>
        <Carousel.Item interval={5000}>
          <div className={`${styles.carouselItem1} d-flex flex-column justify-content-center align-items-center`}>
            <div className={`${styles.matte}`}></div>
            <h1>Annual Town Hall</h1>
            <h1>Wed Feb 7</h1>
            <h1>6:30pm</h1>
            <button className={`noStyleButt ${styles.carouselButt}`}>
              RSVP Here
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className={`${styles.carouselItem2} d-flex flex-column justify-content-center align-items-center`}>
            <div className={`${styles.matte}`}></div>
            <h1>BOARDWALK</h1>
            <h1>GIFT CERTIFICATES</h1>
            <button className={`noStyleButt ${styles.carouselButt}`}>
              Purchase Here
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className={`${styles.carouselItem3} d-flex flex-column justify-content-center align-items-center`}>
            <div className={`${styles.matte}`}></div>
            <h1>SHOP LOCAL</h1>
            <button className={`noStyleButt ${styles.carouselButt}`}>
              TOWN DIRECTORY
            </button>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default CustomCarousel;

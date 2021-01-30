import React from 'react';
import Flickity from 'react-flickity-component';
import '../styles/flickity.css';
import '../styles/Carousel.css';
import brand1 from '../images/brand1.png';
import brand2 from '../images/brand2.png';
import brand3 from '../images/brand3.png';
import brand4 from '../images/brand4.png';
import brand5 from '../images/brand5.png';

const images = [brand1, brand2, brand3, brand4, brand5];

const Carousel = () => {
  return (
    <div className='carousel'>
      <div className='carousel-container'>
        <h2 className='carousel-heading'>zaufali nam</h2>
        <Flickity
          options={{
            autoPlay: true,
            wrapAround: true,
            pageDots: false,
            pauseAutoPlayOnHover: true,
            lazyLoad: true,
            arrowShape: {
              x0: 25,
              x1: 55,
              y1: 30,
              x2: 65,
              y2: 20,
              x3: 45,
            },
          }}
        >
          {images.map((image, index) => (
            <img
              className='carousel-images'
              src={image}
              alt={image}
              key={index}
              data-flickity-lazyload={image}
              data-flickity-lazyload-srcset={image}
              data-flickity-lazyload-src={image}
            />
          ))}
        </Flickity>
      </div>
    </div>
  );
};

export default Carousel;

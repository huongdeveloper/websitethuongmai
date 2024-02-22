import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slider1 from '../../../Assets/images/slider1.webp';
import slider2 from '../../../Assets/images/slider2.webp';
import slider3 from '../../../Assets/images/slider3.webp';

const SliderHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className='app_slider grid'>
      <div className='left-slides'>
        <Slider {...settings}>
          <div className='Sliders-app-img'>
            <img src={slider1} alt='slider1' />
          </div>
          <div className='Sliders-app-img'>
            <img src={slider2} alt='slider2' />
          </div>
          <div className='Sliders-app-img'>
            <img src={slider3} alt='slider3' />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderHome;

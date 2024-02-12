import React from 'react';
import Slider from 'react-slick';
import "../assets/css/imageslider.css";

const ImageSlider = ({images,fade,lazyLoad,slidesToShow,slidesToScroll,txt}) => {
    const settings = {
        dots: false,
        infinite: true,
        fade:fade?fade:false,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        lazyLoad:lazyLoad?lazyLoad:false,
        slidesToShow: slidesToShow?slidesToShow:1,
        slidesToScroll: slidesToScroll?slidesToScroll:1,
        responsive:[
              {
                breakpoint: 768, // Medium screens
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
        ]
      };
    
      return (
        <Slider {...settings} className="background-slider">
          {images.map((image, index) => (
            <div key={index} className="background-slide">
              <img src={image} alt={`Slide ${index + 1}`}  style={{width:"100%",maxHeight:"100vh",objectFit:"cover"}}/>
              <div><p>{txt?txt[index]:""}</p></div>
            </div>
          ))}
        </Slider>
      );
    };


export default ImageSlider
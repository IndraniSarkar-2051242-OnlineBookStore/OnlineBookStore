import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';

function Freebook() {
    const filterData=list.filter((data)=>data.category==="Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  
    

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
      <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
      <p>
      Discover a world of knowledge and entertainment with our extensive collection of free books! Whether you're a fan of classic literature, eager to delve into the latest indie publications, or in need of educational textbooks, our website offers something for everyone. Enjoy access to thousands of titles across various genres and formats, all legally available and free to download. Dive into timeless works by renowned authors, explore new perspectives, and expand your horizons without spending a dime. Join our community of passionate readers today and unlock the boundless possibilities that our free book collection has to offer!
      </p>
      </div>
    
    <div>
    <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
}

export default Freebook

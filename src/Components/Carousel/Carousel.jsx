import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import React, { useState } from 'react';
import carousel1 from '../../images/imgCarousel/carousel1.webp';
import carousel2 from '../../images/imgCarousel/carousel2.webp';
import carousel3 from '../../images/imgCarousel/carousel3.webp';

const slides = [
    { url: carousel1 },
    { url: carousel2 },
    { url: carousel3 }
  ];

export const Carousel = () => { 
    const [currentIndex, setCurrentIndex] = useState(2)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return(      
        <div className='sm:w-full relative group p-0 m-0 '>
           <img 
             src={slides[currentIndex].url} 
             alt="carousel slide"
             className='w-full h-full md:h-[70vh] md:w-auto object-cover duration-500'
          />
            <div onClick = {prevSlide} className=' absolute top-[45%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
                      <BsChevronCompactLeft className='fill-blackish' size={30}/>
                    </div>
            <div onClick = {nextSlide} className=' absolute top-[45%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
                      <BsChevronCompactRight className='fill-blackish' size={30}/>
                    </div>                   
        </div>
    )
}

export default Carousel;
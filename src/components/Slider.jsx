"use client";
import React, { useState } from 'react';

// Slider bileşeni
const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-[80%] mx-auto overflow-hidden rounded-[20px]">
        <h2 className='text-3xl font-bold text-center pb-8 italic text-black'>Galeri</h2>
      {/* Slider İçeriği */}
      <div className="flex transition-transform duration-500 ease-in-out  " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full ">
            <img src={slide.img} alt={`slide-${index}`} className="w-full h-[500px] object-cover rounded-[20px]" />
          </div>
        ))}
      </div>

      {/* Kontrol Butonları */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 w-10 h-10 rounded-full transform -translate-y-1/2 bg-white bg-opacity-40 hover:bg-opacity-20 text-white border-none p-2 cursor-pointer z-10">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 w-10 h-10 rounded-full transform -translate-y-1/2 bg-white bg-opacity-40 hover:bg-opacity-20 text-white border-none p-2 cursor-pointer z-10">
        &#10095;
      </button>

      {/* Küçük Resim Önizlemeleri */}
      <div className="flex justify-center mt-2 overflow-x-auto pb-2 hidden lg:flex ">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-[80px] h-[60px] mx-1 cursor-pointer overflow-hidden border ${currentIndex === index ? 'border-gray-500 scale-100' : 'border-transparent scale-90'} flex items-center justify-center px-2 py-0 rounded-[10px]`}
          >
            <img src={slide.img} alt={`thumbnail-${index}`} className="w-full h-auto object-cover rounded-[10px]" />
          </div>
        ))}
      </div>
      
    </div>
    
  );
};

export default Slider;

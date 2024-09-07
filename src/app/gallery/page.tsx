import React from 'react';
import { Slider, Navbar } from '../../components'; 
import dataGallery from '../../../public/data/gallery.json';
import Banner from '../../../public/images/GalleriBanner.webp';

const Page = () => {
  // JSON'dan sadece img URL'lerini al
  const slides = dataGallery.slice(0, 15).map(item => ({ img: item.img }));

  return (
    <div className='w-full h-full bg-[#F7F7F7]'>
      <Navbar />
      <div className='max-w-[1550px] mx-auto'>
        {/* Banner Image */}
        <div className='relative h-[400px] overflow-hidden'>
            
            <img
                src={Banner.src}
                alt="Banner"
                className='absolute inset-0 w-full h-full object-cover animate-scale-up-down'
            />
          
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative flex items-center justify-center h-full">
            <h2 className='text-white text-xl md:text-3xl lg:text-4xl font-bold'>Köyümüze Hoş Geldin</h2>
          </div>
        </div>

        <section className='w-full h-full pt-10'>
            <h1>Gallery Slider</h1>
            <Slider slides={slides} />
        </section>
        <section className='w-full h-[200px] flex justify-center items-center border-t-2 border-gray-300 mt-12'>
          <img src='/images/Logo.png' alt="Logo" className='w-[300px] h-auto mx-auto' />
        </section>
      </div>
    </div>
  );
};

export default Page;

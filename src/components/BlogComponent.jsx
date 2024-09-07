"use client"
import React from 'react';
import data from '../../public/data/blog.json';
import dataPromotion from '../../public/data/promotion.json';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const BlogComponent = () => {
  const [displayCount, setDisplayCount] = useState(8); // Default 8 for smaller screens

  useEffect(() => {
    const updateDisplayCount = () => {
      if (window.innerWidth >= 1024) {
        setDisplayCount(10); // lg: 16 images
      } else {
        setDisplayCount(8);  // md and below: 8 images
      }
    };

    // Initial check
    updateDisplayCount();

    // Update on window resize
    window.addEventListener('resize', updateDisplayCount);

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', updateDisplayCount);
  }, []);

  return (
    <div className='p-10 flex flex-col items-center lg:flex-row lg:items-start '>
      {/* İlk kutu: Bloglar */}
      <div className='w-[100%] lg:w-[70%]'>
        <h1 className='text-xl font-bold uppercase pl-5 border-l-4 border-blue-500 text-black'>Güncel Bloglar</h1>
        <div className='mt-5 p-5'>
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className='w-full bg-white rounded-lg shadow-lg mb-5 overflow-hidden flex text-black md:flex-row flex flex-col '>
              <div className='w-[100%] md:w-[35%] h-auto aspect-w-16 aspect-h-9 overflow-hidden'>
                <img src={item.resim} alt={item.baslik} className='w-full h-full object-cover' />
              </div>
              <div className=' w-[100%] md:w-[65%] flex flex-col p-5'>
                <div className='p-4 flex flex-col h-full'>
                  <div className='flex flex-col mb-4'>
                    <span className={`text-xs font-bold px-2 py-1 rounded bg-gray-200 w-[80px] text-center text-black`}>{item.guncelDurum.toUpperCase()}</span>
                    <h2 className='text-base md:text-xl font-semibold mt-1 md:p-2 p-1'>{item.baslik}</h2>
                    <p className='text-sm mt-2 md:p-2 pb-0 p-1'>{item.aciklama}</p>
                  </div>
                  <div className='flex items-center mt-8 p-2'>
                    <img src={item.kullaniciResmi} alt={item.kullaniciIsmi} className='w-10 h-10 rounded-full mr-3' />
                    <div className='text-sm'>
                      <p className='font-semibold'>{item.kullaniciIsmi}</p>
                      <p className='text-gray-500'>{item.tarih}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='flex justify-center mt-5 p-5 md:p-0'>
            <Link href="/blog">
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-[30px] '>
                    Daha fazla
                </button>
            </Link></div>
        </div>
      </div>

      {/* İkinci kutu: Resimler ve sosyal medya */}
      <div className='w-[100%] lg:w-[30%] h-auto '>
        <h1 className='text-xl font-bold uppercase pl-5 border-l-4 border-blue-500 text-black'>Güncel Resimler</h1>
        <div className='mt-5 p-3 bg-white rounded-lg shadow-lg mt-[40px]'>
          {/* Resim Galerisi */}
          <div className='grid grid-cols-2 gap-0 p-5 '>
            {dataPromotion.slice(0, displayCount).map((item, index) => (
              <div key={index} className='w-full h-[160px] overflow-hidden'>
                <img src={item.img} alt={`promotion-image-${index}`} className='w-full h-full object-cover' />
              </div>
            ))}
          </div>
          {/* Sosyal Medya İkonları */}
          <div className='flex justify-center items-center mt-3'>
            <Link href="https://facebook.com" passHref>
              <div className='w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center mx-2 cursor-pointer'>
                <FaFacebook />
              </div>
            </Link>
            <Link href="https://twitter.com" passHref>
              <div className='w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center mx-2 cursor-pointer'>
                <FaTwitter />
              </div>
            </Link>
            <Link href="https://instagram.com" passHref>
              <div className='w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center mx-2 cursor-pointer'>
                <FaInstagram />
              </div>
            </Link>
            <Link href="https://linkedin.com" passHref>
              <div className='w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center mx-2 cursor-pointer'>
                <FaLinkedin />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;

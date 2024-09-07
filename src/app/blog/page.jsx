"use client";
import React, { useState } from 'react';
import { Navbar } from '../../components';
import Banner from '../../../public/images/imgGallery/6.jpg';
import blogData from '../../../public/data/blog.json';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Blogları filtreleme
  const filteredBlogs = blogData.filter((blog) => 
    blog.baslik.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.aciklama.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <h2 className='text-white text-xl md:text-3xl lg:text-4xl font-bold'>Köyümüz Hakkında Yazılar</h2>
          </div>
        </div>

        {/* Search Bar */}
        <section className='w-full p-10'>
          <input 
            type="text"
            placeholder="Arama yapın..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-6 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Blog List */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
                  <img
                    src={blog.resim}
                    alt={blog.baslik}
                    className='w-full h-[300px] object-cover rounded-t-lg'
                  />
                  <div className='pt-4 text-black'>
                    <div className='flex items-center mb-2 justify-between'>
                      <h3 className='text-xl font-semibold'>{blog.baslik}</h3>
                      <span className='bg-blue-500 text-white px-3 py-1 text-sm rounded-full mr-4'>
                        {blog.guncelDurum}
                      </span>
                    </div>
                    <p className='text-gray-600'>{blog.aciklama}</p>
                    <p className='mt-4 max-h-[6em] overflow-hidden text-ellipsis line-clamp-6 pt-6'>{blog.metin}</p>
                    <div className='flex items-center mt-4'>
                      <img
                        src={blog.kullaniciResmi}
                        alt={blog.kullaniciIsmi}
                        className='w-10 h-10 rounded-full mr-2'
                      />
                      <div>
                        <p className='font-semibold'>{blog.kullaniciIsmi}</p>
                        <p className='text-gray-500'>{blog.tarih}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className='text-center text-gray-500 w-full'>Böyle bir yazı bulunamadı</p>
            )}
          </div>
        </section>

        <section className='w-full h-[200px] flex justify-center items-center border-t-2 border-gray-300 mt-12'>
          <img src='/images/Logo.png' alt="Logo" className='w-[300px] h-auto mx-auto' />
        </section>
      </div>
    </div>
  );
};

export default Page;

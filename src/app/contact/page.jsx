"use client";
import React, { useState } from 'react';
import { Navbar , MapComponent} from '../../components';
import Banner from '../../../public/images/blogBanner.jpg';


const Page = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    surname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: `${formData.fullName} ${formData.surname}`,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Error sending email. Please try again later.');
    }
  };

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
            <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Bizimle İletişime Geçin</h2>
          </div>
        </div>

        {/* Harita ve İletişim Formu */}
        <section className='w-full pt-12 px-8 flex flex-col lg:flex-row gap-8'>
          {/* Sol taraf - İşletme konumu gösteren map */}
          <div className='flex-1 lg:w-[40%]'>
            <div className='bg-gray-200 h-full w-full'>
            <MapComponent /> 
            </div>
          </div>

          {/* Sağ taraf - İletişim Formu */}
          <div className='flex-1 lg:w-[60%] text-black'>
            <div className='bg-white p-8 shadow-md rounded-lg'>
              <h3 className='text-lg font-semibold mb-4'>Bizimle İletişime Geçin</h3>
              <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor='fullName' className='block text-sm font-medium text-gray-700'>Ad</label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleChange}
                      className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      placeholder='Lütfen adınızı giriniz...'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='surname' className='block text-sm font-medium text-gray-700'>Soyad</label>
                    <input
                      type='text'
                      id='surname'
                      name='surname'
                      value={formData.surname}
                      onChange={handleChange}
                      className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      placeholder='Lütfen soyadınızı giriniz...'
                      required
                    />
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      placeholder='Lütfen email adresinizi giriniz...'
                      required
                    />
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Mesaj</label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      rows='4'
                      className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      placeholder='Lütfen mesajınızı giriniz...'
                      required
                    ></textarea>
                  </div>
                  <div className='sm:col-span-2'>
                    <button type='submit' className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300'>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Logonun alt kismi  */}
        <section className='w-full h-[200px] flex justify-center items-center border-t-2 border-gray-300 mt-12'>
          <img src='/images/Logo.png' alt="Logo" className='w-[300px] h-auto mx-auto' />
        </section>

      </div>
    </div>
  );
};

export default Page;

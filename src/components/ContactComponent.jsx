"use client"
import React, { useState } from 'react';
import Image from 'next/image'; // If using Next.js Image component

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email.');
    }
  };

  return (
    <section className='p-10'>
      <div className='w-full bg-white rounded-[20px] p-8 shadow-lg flex flex-col lg:flex-row '>
        {/* Sağ tarafda: Resim */}
        <div className='lg:w-[50%] w-full h-auto lg:h-[400px] rounded-[20px] overflow-hidden mb-6 lg:mb-0 relative'>
          <Image 
            src='/images/imgGallery/5.jpg'
            alt="Contact" 
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Ensures the image covers the container
            className='rounded-[20px]'
          />
        </div>

        {/* Sol tarafda: Form */}
        <div className='lg:w-[50%] w-full text-gray-700 px-10'>
          <h2 className='text-2xl font-bold mb-4 text-black'>İletişim Formu</h2>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='flex flex-col mb-4'>
              <label htmlFor="fullName" className='text-sm font-semibold mb-2'>Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className='border rounded-[10px] p-2'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="email" className='text-sm font-semibold mb-2'>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className='border rounded-[10px] p-2'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="message" className='text-sm font-semibold mb-2'>Message</label>
              <textarea
                id="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className='border rounded-[10px] p-2'
              />
            </div>
            <button
              type="submit"
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px]'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;

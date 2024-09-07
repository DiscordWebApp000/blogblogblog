import React from 'react'
import Link from 'next/link'
import { Navbar, BlogComponent , ContactComponent } from '../components'
import  Banner from '../../public/images/Banner.jpg'
import dataGallery from '../../public/data/gallery.json'

const Page = () => {

  return (
    <div className='w-full h-full bg-[#F7F7F7]'>
      <Navbar />
      <div className='max-w-[1550px] mx-auto'>
        <section 
          className='relative h-screen bg-cover bg-center flex items-center justify-center' 
          style={{ backgroundImage: `url(${Banner.src})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          
          {/* Ortalanmış yazı (Tabakanın üstünde) */}
          <h2 className='relative text-white text-xl md:text-3xl lg:text-4xl font-bold'>Köyümüze Hoş Geldin</h2>
        </section>
        <section>
          <BlogComponent />
        </section>

        <section className='p-10'>
          <div className='w-full bg-white rounded-[20px] p-8 shadow-lg'>
            <div className='w-full h-[300px] rounded-[20px] overflow-hidden'>
              <img src="/images/imgGallery/6.jpg" alt="Banner" className='w-full h-full object-cover rounded-[20px]' />
            </div>
          </div>
        </section>

        <section className='p-10'>
          <div className='flex flex-col justify-between lg:flex-row w-full bg-white rounded-[20px] p-8 shadow-lg'>
            {dataGallery.slice(0, 3).map((item, index) => (
              <div key={index} className='w-[100%] lg:w-[30%] h-[300px] rounded-[20px] overflow-hidden pb-5 lg:pb-0'>
                <img src={item.img} alt={`Gallery Image ${index + 1}`} className='w-full h-full object-cover rounded-[20px]' />
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-5 p-5 md:p-0'>
            <Link href="/gallery">
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-[30px]'>
                Daha fazla
              </button>
            </Link>
          </div>
        </section>

        <section>
          <ContactComponent />
        </section>
        <section className='w-full h-[200px] flex justify-center items-center border-t-2 border-gray-300'>
          <img src='/images/Logo.png' alt="Logo" className='w-[300px] h-auto mx-auto' />
        </section>
      </div>
    </div>
  )
}

export default Page

import React from 'react';
import { Navbar } from '../../components';
import Banner from '../../../public/images/imgGallery/6.jpg';

const Page = () => {


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
            <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Biz Kimiz?</h2>
          </div>
        </div>

        {/* Biz Kimiz Section */}
        <section className='w-full pt-12 flex flex-col px-8'>
          <div className='max-w-[1200px] mx-auto px-4 space-y-12 py-4 flex flex-col bg-white'>
            {/* Birinci Kısım - Solda Metin, Sağda Resim */}
            <div className='grid grid-cols-1 gap-8 items-center'>
              {/* Metin Alanı (Sol Taraf) */}
              <div className='text-lg text-gray-600 space-y-4'>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#333]'>Benzersiz Tatil Deneyimi</h3>
                <p>
                  <strong>Şehrin kalabalığından uzak, doğayla iç içe bir tatil</strong> mi arıyorsunuz? Tatil köyümüz, 
                  modern konforu ve doğanın huzurunu bir araya getirerek sizlere eşsiz bir tatil deneyimi sunuyor. 
                  Türkiye'nin en gözde bölgelerinden birinde yer alan köyümüz, doğanın kalbinde, denize sadece birkaç 
                  adım mesafede.
                </p>
                <p>
                  Sizi rahatlatan atmosferi ve lüks olanaklarıyla öne çıkan tesisimiz, aynı zamanda her yaş grubuna hitap eden 
                  aktiviteler ve hizmetlerle tatilinizi unutulmaz kılmayı hedefliyor.
                </p>
                <p>
                  Müşteri memnuniyetini her zaman ön planda tutuyoruz. Kalite, konfor ve huzur üçlüsünü bir araya getiren 
                  tatil köyümüzde, aileniz ve sevdiklerinizle unutulmaz anılar biriktirmenizi sağlamak için buradayız.
                </p>
              </div>
              {/* Resim Alanı (Sağ Taraf) */}
              <div className='w-full h-full'>
                <img src="/images/imgGallery/7.jpeg" alt="Tatil Köyü" className='w-full h-full object-cover rounded-lg shadow-lg' />
              </div>
              <div className='text-lg text-gray-600 space-y-4'>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#333]'>Neden Bizi Tercih Etmelisiniz?</h3>
                <p>
                  Tatil köyümüzde, her detayı sizin rahatınız ve mutluluğunuz için düşünülmüş benzersiz bir deneyim yaşayacaksınız. 
                  Ferah odalar, harika manzaralar, spa hizmetleri ve özel plajımızla tatilin tadını çıkarabilirsiniz.
                </p>
                <p>
                  Çocuklar için özel aktiviteler, yetişkinler için sakinleştirici masajlar ve gurme restoranlarımızda 
                  unutulmaz lezzetler sizleri bekliyor. Bizimle geçireceğiniz her gün, huzur ve mutluluk dolu bir deneyim olacak.
                </p>
              </div>
            </div>
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

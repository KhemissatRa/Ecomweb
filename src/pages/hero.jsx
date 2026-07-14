import React from 'react';

export default function Hero() {
  return (
    <div dir="rtl" className='max-w-full min-h-full bg-gray-900 text-white flex items-center justify-center p-4'>
      <div className='flex flex-col  items-center justify-between w-full max-w-full'>
        <img src="/NIKE.jpg" alt="" />
        <div className='md:mr-8 w-full h-full md:text-right'>
          <h1 className='p-2 text-4xl bg-gray-900 rounded-xl font-bold mb-4'>
            خصم 5% على جميع منتجاتنا!
          </h1>

          <p className='text-white md:text-lg'>
            تسوق الآن واستمتع بتوفيرات حصرية على تشكيلتنا الكاملة من المنتجات.
            عروض محدودة لفترة قصيرة
            <span className='text-yellow-400 text-md'> ينتهي العرض 12:5:2025 / 2:25 صباحًا...</span>
          </p>
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useRef } from 'react';

function SlidingChips() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slide = () => {
      if (sliderRef.current) {
        const firstChip = sliderRef.current.firstChild as HTMLElement;
        const chipWidth = firstChip.clientWidth;
        sliderRef.current.appendChild(firstChip);
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = `translateX(-${chipWidth}px)`;
        sliderRef.current.offsetHeight;
        sliderRef.current.style.transition = 'transform 0.9s ease';
        sliderRef.current.style.transform = 'translateX(0)';
      }
    };

    const interval = setInterval(slide, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='overflow-hidden w-full mt-20 lg:block hidden'>
      <div ref={sliderRef} className='flex gap-6 transition-transform duration-500 ease-in-out'>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-[332px] h-[88px] p-[16px] bg-[#FFFFFF33] text-white rounded-[12px] flex justify-between items-center">
            <div className="flex flex-row gap-[24px]">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="8" fill="white" fillOpacity="0.4" />
                <path d="M39 16.1162H17C15.3457 16.1162 14 17.4619 14 19.1162V35.1162C14 36.7705 15.3457 38.1162 17 38.1162H21V38.8838C21 39.436 21.4478 39.8838 22 39.8838H34C34.5522 39.8838 35 39.436 35 38.8838V38.1162H39C40.6543 38.1162 42 36.7705 42 35.1162V19.1162C42 17.4619 40.6543 16.1162 39 16.1162ZM40 35.1162C40 35.6675 39.5513 36.1162 39 36.1162H35V35.3481C35 34.7959 34.5522 34.3481 34 34.3481H22C21.4478 34.3481 21 34.7959 21 35.3481V36.1162H17C16.4487 36.1162 16 35.6675 16 35.1162V19.1162C16 18.5649 16.4487 18.1162 17 18.1162H39C39.5513 18.1162 40 18.5649 40 19.1162V35.1162ZM23 37.8838V36.3481H33V37.8838H23Z" fill="white" />
                <path d="M27.3794 19.2925C26.8271 19.2925 26.3794 19.7402 26.3794 20.2925V20.6201C23.3364 21.1024 21 23.7365 21 26.9131C21 30.4307 23.8618 33.2925 27.3794 33.2925C30.556 33.2925 33.1901 30.9561 33.6724 27.9131H34C34.5522 27.9131 35 27.4653 35 26.9131C35 22.7109 31.5815 19.2925 27.3794 19.2925ZM27.3794 31.2925C24.9644 31.2925 23 29.3281 23 26.9131C23 24.8434 24.4468 23.1147 26.3794 22.6597V26.9131C26.3794 27.4653 26.8271 27.9131 27.3794 27.9131H31.6328C31.1778 29.8457 29.449 31.2925 27.3794 31.2925ZM28.3794 25.9131V21.3813C30.6787 21.7964 32.4961 23.6138 32.9111 25.9131H28.3794Z" fill="white" />
              </svg>
              <p className="font-bold text-3xl flex justify-center items-center">해외 마케팅</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlidingChips;

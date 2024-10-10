import React, { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import profile from '@/images/profile.png'
import flag from '@/images/flag.png'
import Image from 'next/image';
import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const cardsData = [
  {
    name: 'Rishi Gupta',
    position: '마케팅',
    experience: '· 2y+',
    button1: '마케팅 콘텐츠 제작',
    button2: '인스타그램 관리',
    button3: '트위터 관리',
    button4: '블로그 글 작성'
  },
  {
    name: 'Abhishek Gupta',
    position: '마케팅',
    experience: '· 2y+',
    button1: '마케팅 콘텐츠 제작',
    button2: '인스타그램 관리',
    button3: '트위터 관리',
    button4: '블로그 글 작성'
  },
  {
    name: 'Abhinaw Gupta',
    position: '마케팅',
    experience: '· 2y+',
    button1: '마케팅 콘텐츠 제작',
    button2: '인스타그램 관리',
    button3: '트위터 관리',
    button4: '블로그 글 작성'
  }
];

function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={prevCard}
        className="absolute lg:left-0 z-10 top-1/2 left-[-35px]  text-white "
      >
        <FaAngleLeft size={"40"} />
      </button>

      {/* Overlapping Cards */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="relative flex flex-col items-center">
              {/* Top Card */}
              <div className="w-auto h-[408px] rounded-[12px] bg-white shadow-lg flex flex-col items-center p-4 mb-[-390px] z-10">
                <div className="relative mb-4">
                  <Image
                    src={profile}
                    height={120}
                    width={120}
                    alt={cardsData[currentIndex].name}
                    className='rounded-full'
                  />
                  <Image
                    src={flag}
                    alt="Flag"
                    className="absolute bottom-0 right-0 w-8 h-6 rounded-sm"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-1">{cardsData[currentIndex].name}</h3>
                <p className="font-bold text-[#4A77FF] mb-2">{cardsData[currentIndex].position}<span className='font-bold text-[#4A77FF]'>{cardsData[currentIndex].experience}</span></p>
                <Button className='font-bold text-gray-500' variant={"outline"}>{cardsData[currentIndex].button1}</Button>
                <Button className='font-bold text-gray-500 mt-2' variant={"outline"}>{cardsData[currentIndex].button2}</Button>
                <div className='flex gap-1'>
                  <Button className='font-bold text-gray-500 mt-2' variant={"outline"}>{cardsData[currentIndex].button3}</Button>
                  <Button className='font-bold text-gray-500 mt-2' variant={"outline"}>{cardsData[currentIndex].button4}</Button>
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="flex justify-center lg:space-x-[-40px] space-x-[-220px]">
                {cardsData.map((card, index) => {
                  if (index !== currentIndex) {
                    return (
                      <div
                        key={index}
                        className="w-auto h-[368px] rounded-[12px] bg-[#EDFCFF] shadow-lg flex flex-col items-center p-4"
                      >
                        <div className="relative mb-4">
                          <Image
                            src={profile}
                            height={120}
                            width={120}
                            alt={cardsData[currentIndex].name}
                            className='rounded-full'
                          />
                          <Image
                            src={flag}
                            alt="Flag"
                            className="absolute bottom-0 right-0 w-8 h-6 rounded-sm"
                          />
                        </div>
                        <h3 className="text-2xl font-semibold mb-1">{cardsData[currentIndex].name}</h3>
                        <p className="font-bold text-[#4A77FF] mb-2">{cardsData[currentIndex].position}<span className='font-bold text-[#4A77FF]'>{cardsData[currentIndex].experience}</span></p>
                        <Button className='font-bold text-gray-500' variant={"outline"}>{cardsData[currentIndex].button1}</Button>
                        <Button className='font-bold text-gray-500 mt-2' variant={"outline"}>{cardsData[currentIndex].button2}</Button>
                        <div className='flex gap-1'>
                          <Button className='font-bold text-gray-500 mt-2' variant={"outline"}>{cardsData[currentIndex].button3}</Button>
                          <Button className='font-bold text-gray-500 mt-2' variant={"outline"}>{cardsData[currentIndex].button4}</Button>
                        </div>

                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent className='bg-[#E9F7EF]'>
            <p className='text-[#00C696] font-bold'>월 100만원</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <button
        onClick={nextCard}
        className="absolute lg:right-2 right-[-40px] z-10 top-1/2   text-white"
      >
        <FaAngleRight size={"40"} />
      </button>
    </div>
  );
}

export default Cards;
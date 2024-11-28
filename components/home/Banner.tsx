'use client'
import React, { useEffect, useState } from 'react';
import SlidingChips from './SlidingChips';
import Cards from './Cards';
import Checkboxes from './Checkboxes';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function Banner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="  items-start p-8  ">
            <div className='mt-40 flex lg:justify-between flex-col lg:flex-row  gap-20 '>
                <div className="flex-1 lg:w-1/2  text-white">

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger> <h1 className={`text-3xl font-bold  text-start w-5/6 transition-opacity transition-transform duration-300 
                    ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-5'}`}>
                                최고의 실력을 가진 외국인 인재를 찾고 계신가요?
                            </h1></TooltipTrigger>
                            <TooltipContent>
                                <p className='font-bold text-[#40E2E8]'>풀타임, 파트타임</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <h2 className={`lg:block none text-xl font-semibold mt-2 w-4/5 transition-opacity transition-transform duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-5'
                        }`}>법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</h2>
                    <p className={`lg:block hidden text-base mt-4 underline  w-4/5 transition-opacity transition-transform duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-5'
                        }`}>개발자가 필요하신가요?</p>

                    <div className='lg:flex hidden  gap-24 mt-10 '>
                        <div className={`transform transition-opacity duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} delay-0`}>
                            <div className="border-t-2 border-white pt-2">
                                <p className='font-bold mb-2'>평균 월 120만원</p>
                            </div>
                            <p className='font-light'>임금을 해당 국가를 기준으로 계산합니다.</p>
                        </div>
                        <div className={`transform transition-opacity duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} delay-100`}>
                            <div className="border-t-2 border-white pt-2">
                                <p className='font-bold mb-2'>평균 월 120만원</p>
                            </div>
                            <p className='font-light'>임금을 해당 국가를 기준으로 계산합니다.</p>
                        </div>
                        <div className={`transform transition-opacity duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} delay-200`}>
                            <div className="border-t-2 border-white pt-2">
                                <p className='font-bold mb-2'>평균 월 120만원</p>
                            </div>
                            <p className='font-light'>임금을 해당 국가를 기준으로 계산합니다.</p>
                        </div>
                    </div>

                </div>

                <div className="flex-none lg:w-1/2 ">
                    <Cards />
                </div>
                <Checkboxes />
            </div>
            <SlidingChips />
        </div>
    );
}

export default Banner;

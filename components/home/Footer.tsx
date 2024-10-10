import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <div className='px-8 py-20'>
            <div className=' gap-20 flex flex-col'>
                <div className='flex lg:flex-row flex-col lg:gap-40 gap-10'>
                    <div>
                        <div className='flex gap-2'>
                            <svg width="52" height="34" viewBox="0 0 52 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6327 27.8235C24.0007 29.4824 22.3989 31.1783 20.6539 32.7224C18.5885 34.548 15.2982 34.3924 13.3044 32.4336C9.39604 28.5937 5.49895 24.739 1.62448 20.8658C-0.587894 18.6551 -0.516284 15.2448 1.70362 13.0526C5.57433 9.23496 9.42619 5.39876 13.2931 1.58107C15.3736 -0.470336 18.7581 -0.540691 20.8762 1.45887C22.4931 2.98817 24.0422 4.58412 25.6214 6.15044C25.2445 6.70218 24.7281 7.12801 24.2608 7.59087C22.4856 9.36456 20.6916 11.1197 18.8938 12.8712C18.2455 13.5044 17.6953 14.1968 17.3824 15.0448C16.7229 16.8296 16.8962 18.5551 18.0156 20.0993C18.841 21.2397 19.9491 22.1507 20.9366 23.1579C22.4781 24.7353 24.0648 26.2683 25.6327 27.8198V27.8235Z" fill="#2C599B" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6855 6.15412C26.6919 5.33578 27.5549 4.37302 28.4746 3.46952C29.2246 2.72894 29.9595 1.97355 30.7548 1.2811C31.9759 0.21467 33.4646 -0.118591 35.0325 0.129503C36.1708 0.307242 37.2072 0.788619 38.059 1.64399C40.8857 4.48041 43.7539 7.27239 46.5919 10.094C47.8017 11.2974 49.1095 12.4194 50.1686 13.7562C51.6611 15.6372 51.6988 18.233 50.2251 20.1622C49.2528 21.4397 48.0165 22.4913 46.8783 23.6207C44.47 26.0091 42.0578 28.3937 39.6306 30.7636C38.8015 31.5708 38.0628 32.4817 37.0715 33.1186C36.02 33.7962 34.8479 34.0369 33.6003 33.911C32.5149 33.8036 31.5576 33.363 30.702 32.7335C30.2648 32.4114 29.9256 31.967 29.5374 31.5782C28.3012 30.3377 27.065 29.0973 25.8288 27.8605C25.7986 27.8309 25.7458 27.8272 25.7044 27.8124C25.7496 27.7568 25.7948 27.6939 25.8438 27.642C28.1467 25.3499 30.457 23.0615 32.7599 20.7695C34.8177 18.7217 34.8102 15.2336 32.7448 13.1933C30.898 11.3678 29.0474 9.54967 27.2044 7.72414C26.6881 7.21314 26.1944 6.67993 25.6893 6.15412H25.6855Z" fill="#58C4E9" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6855 6.15403C26.1905 6.67614 26.6843 7.21306 27.2006 7.72406C29.0436 9.55329 30.8979 11.3714 32.741 13.1932C34.8063 15.2335 34.8139 18.7217 32.756 20.7694C30.4532 23.0615 28.1466 25.3536 25.84 27.6419C25.7873 27.6938 25.7458 27.753 25.7006 27.8123C25.678 27.8197 25.6516 27.8234 25.629 27.8197C24.0611 26.2682 22.4744 24.7352 20.9329 23.1577C19.9454 22.1505 18.8373 21.2359 18.0119 20.0991C16.8925 18.555 16.7192 16.8332 17.3787 15.0447C17.6916 14.1967 18.2418 13.5043 18.8901 12.8711C20.6879 11.1196 22.4819 9.36444 24.2571 7.59076C24.7244 7.12419 25.2408 6.69836 25.6177 6.15033C25.6403 6.14292 25.6591 6.14292 25.6817 6.15033L25.6855 6.15403Z" fill="#5266A8" />
                            </svg>
                            <p className='font-bold text-2xl '>hyperhire</p>
                        </div>
                        <p className='font-bold text-sm w-64 mt-4'>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
                        <p className='font-bold text-[#5E626F] mt-2'>010-0000-0000</p>
                        <p className='font-bold text-[#5E626F] mt-2'>aaaaa@naver.com</p>
                    </div>
                    <div className='flex lg:flex-row flex-col lg:gap-20 gap-5'>
                        <div className='flex-row flex  gap-10' >
                            <div>
                              <Image
                              src={'/user.svg'}
                              width={42}
                              height={42}
                              alt={""}
                              />

                                <p className='font-bold mt-2'>해외 개발자 원격 채용</p>
                                <p>바로가기</p>
                            </div>
                            <div>
                            <Image
                              src={'/kor.svg'}
                              width={42}
                              height={42}
                              alt={""}
                              />
                                <p className='font-bold mt-2'>외국인 원격 채용 (비개발)</p>
                                <p>바로가기</p>
                            </div>
                        </div>
                        <div className='flex-row flex  gap-10 lg:mt-0 mt-8' >
                            <div>
                            <Image
                              src={'/settings.svg'}
                              width={42}
                              height={42}
                              alt={""}
                              />
                                <p className='font-bold mt-2'>한국어 가능 외국인 채용</p>
                                <p>바로가기</p>
                            </div>
                            <div>
                            <Image
                              src={'/code.svg'}
                              width={42}
                              height={42}
                              alt={""}
                              />
                                <p className='font-bold mt-2'>해외 개발자 활용 서비스</p>
                                <p>바로가기</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:flex-row flex-col flex gap-16'>
                    <div className='flex gap-10  '>
                        <div >
                            <p className='font-bold text-[#343741] '>상호명</p>
                            <p className='text-[#5E626F] mt-2 mb-2'>하이퍼하이어</p>
                            <p className='text-[#5E626F] font-bold'>Hyperhire India Private Limited</p>
                        </div>
                        <div >
                            <p className='font-bold text-[#343741]'>대표 CEO</p>
                            <p className='text-[#5E626F]  mt-2 mb-2'>김주현</p>
                            <p className='text-[#5E626F] font-bold'>Juhyun Kim</p>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col gap-10 mt-2'>
                        <div>
                            <p className='font-bold text-[#343741] '>사업자등록번호 CIN</p>
                            <p className='font-bold text-[#5E626F] mt-2'>427-86-01187</p>
                            <p className='font-bold text-[#5E626F] mt-2'>U74110DL2016PTC290812 </p>
                        </div>
                        <div>
                            <p className='font-bold text-[#343741] '>주소 ADDRESS</p>
                            <p className='font-bold text-[#5E626F] mt-2'>서울특별시 강남대로 479, 지하 1층 238호</p>
                            <p className='font-bold text-[#5E626F] mt-2'>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='font-bold text-[#5E626F] mt-14'>ⓒ 2023 Hyperhire</p>
        </div>
    )
}

export default Footer
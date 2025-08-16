import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import Container from '../components/Container';
import { FaSearch } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { TiArrowSortedDown } from "react-icons/ti";
import { ImLinkedin } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className='bg-white border-b border-gray-200'>
        <Container>
          <header className='flex justify-between items-center h-[50px]'>
            <div className='flex items-center gap-2'>
              <FaLinkedin size={38} className='text-linkedin_blue' />
              <div className='relative'>
                <input type="text" className='border-gray-400 border-1 h-[34px] w-[280px] rounded-full outline-0 pl-[45px] pr-[12px] placeholder:text-[14px] placeholder:text-gray-600 leading-[34px]' placeholder='Search' />
                <FaSearch className='absolute left-[15px] top-1/2 transform -translate-y-1/2 text-gray-600' />
              </div>
            </div>
            <div className='flex items-center gap-[18px] h-full'>
              <div className='font-system_ui flex items-center gap-4 text-gray-500'>
                <div className='flex flex-col items-center justify-center cursor-pointer px-2'>
                  <TiHome size={25} />
                  <p className='text-[12px]'>Home</p>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer px-2'>
                  <BsPeopleFill size={25} />
                  <p className='text-[12px]'>My Network</p>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer px-2'>
                  <BiSolidShoppingBags size={25} />
                  <p className='text-[12px]'>Jobs</p>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer px-2'>
                  <BiSolidMessageSquareDots size={25} />
                  <p className='text-[12px]'>Messaging</p>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer px-2'>
                  <IoNotifications size={25} />
                  <p className='text-[12px]'>Notifications</p>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer px-2'>
                  <FaUserCircle size={22} />
                  <div className='flex items-center'>
                    <p className='text-[12px]'>Me</p>
                    <TiArrowSortedDown className='text-[15px] mt-1' />
                  </div>
                </div>
              </div>
              <div className='border-l border-gray-300 h-full flex items-center'>
                <div className='flex flex-col items-center justify-center text-gray-500 px-1 cursor-pointer ml-2
                '>
                  <TbGridDots size={25} />
                  <div className='flex items-center'>
                    <p className='text-[12px]'>For Business</p>
                    <TiArrowSortedDown className='text-[15px] mt-1' />
                  </div>
                </div>
                <div className='flex flex-col items-center justify-ceer text-gray-500 px-1 cursor-pointer ml-2
                '>
                  <ImLinkedin size={22} color='#E7A33E' />
                  <p className='text-[12px]'>Try Premium for BDT0</p>
                </div>
              </div>
            </div>
          </header>
        </Container>
      </div>
      <div className='bg-[#F4F2EE]'>
        <Container>
          fasdg
        </Container>
      </div>
    </div>
  )
}

export default Home
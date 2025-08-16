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
import { Link } from 'react-router';
import cover from "../assets/home/cover.avif";
import demo_profile from "../assets/home/demo_profile.jpg";
import { IoBookmark } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { FaImage } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { Helmet } from 'react-helmet';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { IoLogoGameControllerA } from "react-icons/io";

const games = [
  {
    icon: 'https://img.icons8.com/ios-filled/50/4CAF50/sudoku.png',
    title: 'Mini Sudoku',
    number: '#5',
    description: 'The classic game, made mini'
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/FF5722/flow.png',
    title: 'Zip',
    number: '#152',
    description: 'Complete the path'
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/3F51B5/squares.png',
    title: 'Tango',
    number: '#313',
    description: 'Harmonize the grid'
  },
];

function Home() {
  return (
    <>
      <Helmet>
        <title>Feed | LinkedIn</title>
      </Helmet>
      <div className='min-h-screen flex flex-col'>
        <div className='bg-white border-b border-gray-200'>
          <Container>
            <header className='flex justify-between items-center h-[55px]'>
              <div className='flex items-center gap-2'>
                <Link>
                  <FaLinkedin size={38} className='text-linkedin_blue cursor-pointer' />
                </Link>
                <div className='relative'>
                  <input
                    type="text"
                    className='border-gray-400 border h-[34px] w-[280px] rounded-full outline-0 pl-[45px] pr-[12px] placeholder:text-[14px] placeholder:text-gray-600 leading-[34px]'
                    placeholder='Search'
                  />
                  <FaSearch className='absolute left-[15px] top-1/2 transform -translate-y-1/2 text-gray-600' />
                </div>
              </div>

              <div className='flex items-center gap-[18px] h-full'>
                <div className='font-system_ui flex items-center gap-4 text-gray-500 h-full'>
                  {[{
                    icon: <TiHome size={25} />,
                    label: 'Home'
                  }, {
                    icon: <BsPeopleFill size={25} />,
                    label: 'My Network'
                  }, {
                    icon: <BiSolidShoppingBags size={25} />,
                    label: 'Jobs'
                  }, {
                    icon: <BiSolidMessageSquareDots size={25} />,
                    label: 'Messaging'
                  }, {
                    icon: <IoNotifications size={25} />,
                    label: 'Notifications'
                  }].map((item, key) => (
                    <div key={key} className='flex flex-col items-center justify-center cursor-pointer px-2 border-b-2 border-transparent hover:border-gray-800 h-full hover:text-gray-800 duration-100'>
                      {item.icon}
                      <p className='text-[12px]'>{item.label}</p>
                    </div>
                  ))}

                  <div className='flex flex-col items-center justify-center cursor-pointer px-2 border-b-2 border-transparent hover:border-gray-800 h-full hover:text-gray-800 duration-100'>
                    <FaUserCircle size={22} />
                    <div className='flex items-center'>
                      <p className='text-[12px]'>Me</p>
                      <TiArrowSortedDown className='text-[15px] mt-1' />
                    </div>
                  </div>
                </div>

                <div className='border-l border-gray-300 h-full flex items-center'>
                  <div className='flex flex-col items-center justify-center text-gray-500 px-1 ml-2 hover:text-gray-800 duration-100 cursor-not-allowed'>
                    <TbGridDots size={25} />
                    <div className='flex items-center'>
                      <p className='text-[12px]'>For Business</p>
                      <TiArrowSortedDown className='text-[15px] mt-1' />
                    </div>
                  </div>
                  <div className='flex flex-col items-center justify-center text-gray-500 px-1 ml-2 cursor-not-allowed'>
                    <ImLinkedin size={22} color='#E7A33E' />
                    <p className='text-[12px] hover:text-gray-800 duration-100'>Try Premium for BDT0</p>
                  </div>
                </div>
              </div>
            </header>
          </Container>
        </div>

        <div className='bg-[#F4F2EE] flex-grow pt-[20px] overflow-y-auto'>
          <Container>
            <div className='flex justify-between'>
              <div className='w-[225px] relative'>
                <div className='mb-[8px] bg-white rounded-[13px] border border-gray-300'>
                  <img src={cover} alt="cover" className='w-full h-[58px] object-cover rounded-t-[13px]' />
                  <div className='p-4'>
                    <img
                      src={demo_profile}
                      alt="profile"
                      className='h-[72px] w-[72px] rounded-full object-cover border-3 border-white absolute top-[25px]'
                    />
                    <h1 className='mt-[25px] text-[20px] font-semibold text-black/80 leading-[25px]'>Lorem ipsum.</h1>
                    <p className='text-[12px] text-black/90 font-normal mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                    <p className='text-[12px] text-black/70 mt-1'>Dhaka</p>
                    <p className='font-semibold text-[13px] leading-[15px] text-black/80 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>

                <div className='mb-[8px] bg-white rounded-[13px] border border-gray-300 p-4 text-[12px] font-semibold cursor-not-allowed hover:underline'>
                  <div className='flex justify-between items-center'>
                    <p className='text-gray-800'>Connections</p>
                    <p className='text-linkedin_blue'>9</p>
                  </div>
                  <p className='text-gray-500'>Connect with alumni</p>
                </div>

                <div className='mb-[8px] bg-white rounded-[13px] border border-gray-300 p-4 text-[12px] leading-[16px] cursor-not-allowed'>
                  <p className='text-gray-500 font-normal'>Unlock Premium tools & insights</p>
                  <div className='flex items-center gap-2'>
                    <ImLinkedin size={15} color='#E7A33E' className='mt-1' />
                    <p className='text-gray-800 font-semibold mt-1'>Try Premium for BDT0</p>
                  </div>
                </div>

                <div className='bg-white rounded-[13px] border border-gray-300 p-4 text-[12px] leading-[16px] flex flex-col gap-3'>
                  <div className='flex items-center gap-2'>
                    <IoBookmark size={16} />
                    <p className='font-semibold text-black/70 cursor-not-allowed hover:underline'>Saved items</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <MdGroups size={16} />
                    <p className='font-semibold text-black/70 cursor-not-allowed hover:underline'>Groups</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaNewspaper size={16} />
                    <p className='font-semibold text-black/70 cursor-not-allowed hover:underline'>Newsletters</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <BiSolidCalendarEvent size={16} />
                    <p className='font-semibold text-black/70 cursor-not-allowed hover:underline'>Events</p>
                  </div>
                </div>
              </div>

              <div>
                <div className='w-[555px] bg-white rounded-[13px]  px-[16px] pt-[8px] border border-gray-300'>
                  <div className='flex items-center gap-2 mt-1'>
                    <img
                      src={demo_profile}
                      alt="profile"
                      className='h-[48px] w-[48px] rounded-full object-cover border-3 border-white  top-[25px] cursor-pointer'
                    />
                    <input type="text" className='w-[467px] h-[48px] border-gray-400 border rounded-full px-[16px] py-[10px] placeholder:font-semibold placeholder:text-[14px] placeholder:text-black/70 outline-0 cursor-pointer hover:bg-gray-100 duration-100' placeholder='Start a post' />
                  </div>
                  <div className='flex items-center justify-around '>
                    <div className='flex items-center gap-2  py-3 px-2 hover:bg-gray-100 duration-200  my-2 rounded-[5px] cursor-not-allowed'>
                      <BsFillPlayBtnFill color='#5F9B41' size={20} />
                      <h1 className='text-[14px] font-semibold text-gray-600'>Video</h1>
                    </div>
                    <div className='flex items-center gap-2  py-3 px-2 hover:bg-gray-100 duration-200  my-2 rounded-[5px] cursor-not-allowed'>
                      <FaImage color='#378FE9' size={20} />
                      <h1 className='text-[14px] font-semibold text-gray-600'>Photo</h1>
                    </div>
                    <div className='flex items-center gap-2 py-3 px-2 hover:bg-gray-100 duration-200 cursor-pointer my-2 rounded-[5px]'>
                      <MdArticle color='#E06847' size={20} />
                      <h1 className='text-[14px] font-semibold text-gray-600'>Write article</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[300px] bg-white border border-gray-300 rounded-[13px] p-[12px]">
                  <h2 className="text-[15px] font-semibold mb-3 text-gray-900">Today’s puzzle games</h2>
                  <div className="flex flex-col gap-3">
                    {games.map((game, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-md p-1.5 transition"
                      >
                        {/* <img src={game.icon} alt="" className="w-9 h-9 rounded-md object-cover" /> */}
                        <IoLogoGameControllerA size={35} />
                        <div className="flex-1 mx-3">
                          <div className="text-sm font-medium text-gray-900 leading-tight">
                            {game.title} <span className="text-gray-500 font-normal">{game.number}</span>
                          </div>
                          <div className="text-xs text-gray-500">{game.description}</div>
                        </div>
                        <FaChevronRight className="text-gray-400 text-xs" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-sm font-medium text-blue-600 hover:underline cursor-pointer flex items-center gap-1">
                    Show more <FaChevronDown className="text-xs mt-[1px]" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Home;

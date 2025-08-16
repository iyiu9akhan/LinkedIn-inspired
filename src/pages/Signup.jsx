import React, { useState } from "react";
import linkedin_logo from "../assets/login/linkedin_logo.svg";
// import linkedin_footer_logo from "../assets/login/linkedin_footer_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoLogoMicrosoft } from "react-icons/io5";



function Signup() {
  return (
    <div>
      <div className="bg-signupBg h-screen flex flex-col">
        <div className="flex flex-col flex-grow max-w-[1128px] mx-auto  px-[16px] py-[24px]  w-full">
          <div className="w-[135px] h-[33px] mx-auto md:ms-0">
            <img src={linkedin_logo} alt="#linkedin_logo" />
          </div>
          <div className="flex justify-center">
            <p className="text-[32px] px-[16px] py-[24px]">
              Make the most of your professional life
            </p>
          </div>
          <div className=" flex justify-center items-center flex-col">

            <div className="md:w-[400px]  bg-white mb-[25px] p-[24px] rounded-[8px] ">
              {/* <FloatingInput placeholder="Email or phone" /> */}
              {/* <div className="relative mt-5 mb-3">
                <FloatingInput placeholder="Password" type="password" />
                <button
                  type="button"
                  className="absolute right-3 top-4 text-linkedin_blue text-[14px] font-semibold"
                >
                  Show
                </button>
              </div> */}
              <div className="mb-3">
                <label className="font-semibold text-[14px] text-gray-600">Email</label>
                <input type="text" className="border-1 border-gray-600 w-full h-[32px] rounded px-[12px]" />
              </div>
              <div>
                <label className="font-semibold text-[14px] text-gray-600">Password</label>
                <input type="text" className="border-1 border-gray-600 w-full h-[32px] rounded px-[12px]" />
              </div>

              <div className="flex items-center mt-3 mb-5">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mr-2 accent-green-700 w-[20px] h-[20px] rounded"
                />
                <span className="text-[14px] text-black">
                  Keep me logged in
                </span>
              </div>

              <p className="text-[12px] text-gray-500 text-center my-4">By clicking Agree & Join or Continue, you agree to the LinkedIn <span className="font-semibold cursor-pointer text-linkedin_blue">User Agreement</span>, <span className="font-semibold cursor-pointer text-linkedin_blue">Privacy Policy</span>, and <span className="font-semibold cursor-pointer text-linkedin_blue">Cookie Policy.</span></p>

              <button className="w-full bg-linkedin_blue hover:bg-linkedin_hvrBtn_blue transition-all duration-300 text-white h-[48px] rounded-full hover:bg-linkedi_blue cursor-pointer text-[16px] font-semibold">
                Agree & Join
              </button>

              <div className="flex justify-between items-center my-[22px]">
                <div className="border-b-1 border-gray-300 w-[45%]"></div>
                <p className="text-[14px] text-gray-600">or</p>
                <div className="border-b-1 border-gray-300 w-[45%]"></div>
              </div>

              <div className="flex flex-col gap-3 text-gray-600 text-[16px] font-semibold mb-[24px]">
                <div className="border-1 border-gray-600 w-full h-[42px] rounded-full flex justify-center items-center gap-1 cursor-pointer text-gray-600">
                  <FcGoogle size={23} />
                  <p className="text-[15px]">Continue with Google</p>
                </div>
                <div className="border-1 border-gray-600 w-full h-[42px] rounded-full flex items-center justify-center gap-2 cursor-pointer text-gray-700">
                  <IoLogoMicrosoft size={21} color="black" />
                  <p>Continue with Microsoft</p>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="font-system_ui text-[16px] leading-[24px] text-gray-800 font-normal">
                  Already on Linkedin?
                  <span className="text-[16px] leading-[32px] text-linkedin_blue font-semibold ml-2 cursor-pointer hover:underline">
                    Sign in
                  </span>
                </p>
              </div>
              {/* <a
                href="#"
                className="text-linkedin_blue text-[16px] font-semibold hover:underline"
              >
                Forgot password?
              </a> */}

              {/* <input
            type="text"
            className="border-1 border-gray-500 w-full h-[52px] rounded-[4px] px-[12px] placeholder:text-[18px] placeholder:leading-[24px]"
            placeholder="Email or Phone"
          /> */}
            </div>
            <p className="font-system_ui text-[14px] leading-[24px] text-gray-800 font-regular">
              Looking to create a page for a business?
              <span className="text-[14px] leading-[32px] text-linkedin_blue font-semibold ml-2 cursor-pointer hover:underline">
                Get Help
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center  h-[50px] text-[12px] capitalize text-black/70 gap-4 bg-white font-semibold">
          <div className="flex items-center justify-center text-black gap-0.5">
            {/* <img src={linkedin_footer_logo} alt="#linkedin_footer_logo" /> */}
            <p className="capitalize text-[15px] font-semibold">linked</p>
            <FaLinkedin size={15} />
          </div>
          <div className="flex items-center gap-1.5 py-[8px]">
            <FaRegCopyright size={12} />
            <p>2025</p>
          </div>
          <div>
            <p className="py-[8px] cursor-pointer hover:underline hover:text-linkedin_blue">
              about
            </p>
          </div>
          <div>
            <p className="py-[8px] cursor-pointer hover:underline hover:text-linkedin_blue">
              accessibility
            </p>
          </div>
          <div>
            <p className="py-2 cursor-pointer hover:underline hover:text-linkedin_blue">
              user agreement
            </p>
          </div>
          <div>
            <p className="py-2 cursor-pointer hover:underline hover:text-linkedin_blue">
              privacy policy
            </p>
          </div>
          <div>
            <p className="py-2 cursor-pointer hover:underline hover:text-linkedin_blue">
              cookie policy
            </p>
          </div>
          <div>
            <p className="py-2 cursor-pointer hover:underline hover:text-linkedin_blue">
              copyright policy
            </p>
          </div>
          <div>
            <p className="py-2 cursor-pointer hover:underline hover:text-linkedin_blue">
              brand policy
            </p>
          </div>
          <div>
            <p className="py-2 cursor-pointer hover:underline hover:text-linkedin_blue">
              guest controls
            </p>
          </div>
          <div>
            <p className="py-2 cursor-pointer hover:underline hover:text-linkedin_blue">
              cummonity guidelines
            </p>
          </div>
          <div className="flex items-center hover:text-linkedin_blue">
            <p className="py-2 cursor-pointer"> language</p>
            <RiArrowDownWideFill size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

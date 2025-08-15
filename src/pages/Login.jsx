import React, { useState } from "react";
import linkedin_logo from "../assets/login/linkedin_logo.svg";
// import linkedin_footer_logo from "../assets/login/linkedin_footer_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function FloatingInput({ placeholder, type = "text" }) {
  const id = placeholder.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder=" "
        className="peer w-full border border-gray-500 rounded px-3 pt-5 pb-2 text-base focus:outline-none focus:border-linkedin_blue focus:ring-1 focus:ring-linkedin_blue"
      />
      {/* <label
        htmlFor={id}
        className="absolute left-[12px]  transition-all top-0
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-[18px]
        peer-focus:top-0 peer-focus:text-sm peer-focus:text-black"
      >
        {placeholder}
      </label> */}
      <label
        htmlFor={id}
        className="absolute left-[12px] top-1 text-sm text-black transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-[18px] peer-focus:top-1 peer-focus:text-sm peer-focus:text-black"
      >
        {placeholder}
      </label>
    </div>
  );
}

function Login() {
  return (
    <div className="h-screen flex flex-col">
      <div className="mt-8 ml-14 w-[110px] h-[28px]">
        <img src={linkedin_logo} alt="#linkedin_logo" />
      </div>
      <div className="flex-grow flex justify-center items-center flex-col">
        <div className="md:w-[352px]  bg-white mb-[25px] p-[24px] rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
          <h1 className="text-[32px] font-semibold mb-[13px]">Sign in</h1>
          <div className="flex flex-col gap-3 text-gray-600 text-[16px] font-semibold mb-[24px]">
            <div className="border-1 border-gray-600 w-full h-[42px] rounded-full flex justify-center items-center gap-1 cursor-pointer  hover:bg-linkedin_blue/10 transition-all duration-400">
              <FcGoogle size={23} />
              <p className="text-[15px]">Continue with Google</p>
            </div>
            <div className="border-1 border-gray-600 w-full h-[42px] rounded-full flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200 transition-all duration-400">
              <FaApple size={25} color="black" />
              <p>Sign in with Apple</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-[24px]">
            <div className="border-b-1 border-gray-300 w-[45%]"></div>
            <p className="text-[14px] text-gray-600">or</p>
            <div className="border-b-1 border-gray-300 w-[45%]"></div>
          </div>
          <FloatingInput placeholder="Email or phone" />
          <div className="relative mt-5 mb-3">
            <FloatingInput placeholder="Password" type="password" />
            <button
              type="button"
              className="absolute right-3 top-4 text-linkedin_blue text-[14px] font-semibold"
            >
              Show
            </button>
          </div>
          <a
            href="#"
            className="text-linkedin_blue text-[16px] font-semibold hover:underline"
          >
            Forgot password?
          </a>
          <div className="flex items-center mt-3 mb-5">
            <input
              type="checkbox"
              defaultChecked
              className="mr-2 accent-linkedin_blue w-[20px] h-[20px] rounded"
            />
            <span className="text-[16px] text-black">Keep me logged in</span>
          </div>

          <button className="w-full bg-linkedin_blue text-white h-[52px] rounded-full hover:bg-linkedi_blue cursor-pointer text-[16px] font-semibold">
            Sign in
          </button>
          {/* <input
            type="text"
            className="border-1 border-gray-500 w-full h-[52px] rounded-[4px] px-[12px] placeholder:text-[18px] placeholder:leading-[24px]"
            placeholder="Email or Phone"
          /> */}
        </div>
        <p className="font-system_ui text-[16px] leading-[24px] text-black font-regular">
          New to LinkedIn?
          <span className="text-[16px] leading-[32px] text-linkedin_blue font-semibold ml-2 cursor-pointer hover:underline">
            Join now
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center md:mx-[396px] my-[20px] text-[12px] capitalize text-black/70 gap-4">
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
            user agreement
          </p>
        </div>
        <div>
          <p className="py-[8px] cursor-pointer hover:underline hover:text-linkedin_blue">
            privacy policy
          </p>
        </div>
        <div>
          <p className="py-2 cursor-pointer hover:underline hover:text-linkedin_blue">
            community guidelines
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
            send feedback
          </p>
        </div>
        <div className="flex items-center hover:text-linkedin_blue">
          <p className="py-2 cursor-pointer"> language</p>
          <RiArrowDownWideFill size={16} />
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import linkedin_logo from "../assets/login/linkedin_logo.svg";
// import linkedin_footer_logo from "../assets/login/linkedin_footer_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";

function Login() {
  return (
    <div className="h-screen flex flex-col">
      <div className="mt-8 ml-14 w-[110px] h-[28px]">
        <img src={linkedin_logo} alt="#linkedin_logo" />
      </div>
      <div className="flex-grow flex justify-center items-center flex-col">
        <div className="md:w-[352px] md:h-[536px] bg-white mb-[32px] p-[24px] rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            <h1 className="text-[32px] font-semibold">Sign in</h1>
        </div>
        <p className="font-system_ui text-[16px] leading-[24px] text-black font-regular">
          New to LinkedIn?
          <span className="text-[16px] leading-[32px] text-linkedin_blue font-semibold ml-1">
            Join now
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center mx-[396px] my-[20px] text-[12px] capitalize text-black/70">
        <div className="flex items-center justify-center text-black gap-0.5">
          {/* <img src={linkedin_footer_logo} alt="#linkedin_footer_logo" /> */}
          <p className="capitalize text-[15px] font-semibold">linked</p>
          <FaLinkedin size={15} />
        </div>
        <div className="flex items-center gap-1.5 p-[8px]">
          <FaRegCopyright size={12} />
          <p>2025</p>
        </div>
        <div>
          <p className="p-[8px]">user agreement</p>
        </div>
        <div>
          <p className="p-[8px]">privacy policy</p>
        </div>
        <div>
          <p className="p-2">community guidelines</p>
        </div>
        <div>
          <p className="p-2">cookie policy</p>
        </div>
        <div>
          <p className="p-2">copyright policy</p>
        </div>
        <div>
          <p className="p-2">send feedback</p>
        </div>
        <div className="flex items-center">
          <p className="p-2"> language</p>
          <RiArrowDownWideFill size={16} />
        </div>
      </div>
    </div>
  );
}

export default Login;

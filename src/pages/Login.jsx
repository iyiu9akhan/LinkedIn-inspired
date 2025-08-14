import React from "react";
import linkedin_logo from "../assets/login/linkedin_logo.svg";

function Login() {
  return (
    <div className="h-screen flex flex-col">
      <div className="mt-8 ml-14 w-[110px] h-[28px]">
        <img src={linkedin_logo} alt="#linkedin_logo" />
      </div>
      <div className="flex-grow flex justify-center items-center flex-col">
        <div className="md:w-[352px] md:h-[536px] bg-white mb-[32px] p-[24px] rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.15)]"></div>
        <p className="font-system_ui text-[16px] leading-[24px] text-black font-regular">
          New to LinkedIn?{" "}
          <span className="text-[16px] leading-[32px] text-linkedin_blue font-semibold ml-1">
            Join now
          </span>
        </p>
        
      </div>
    </div>
  );
}

export default Login;

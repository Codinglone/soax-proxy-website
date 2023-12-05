import React from "react";
import heroReviewOne from "../assets/hero-reviews-1.svg";
import heroReviewTwo from "../assets/hero-reviews-2.svg";
import heroReviewThree from "../assets/hero-reviews-3.svg";
import heroMarketingUI from "../assets/hero-marketing-UI.svg";
import { MdCheckCircle } from "react-icons/md";
import logoOne from "../assets/forbes-logo.svg";
import logoTwo from "../assets/logos-2.svg";
import logoThree from "../assets/logos-3.svg";
import logoFour from "../assets/logos-4.svg";
import logoFive from "../assets/logos-5.svg";
const Hero = () => {
  return (
    <section className="w-[100vw]">
      <div className="flex justify-between pt-4">
        <div className="flex flex-col w-[57%] px-8" id="main-hero-section">
          <div className="w-[50%] flex justify-between">
            <img src={heroReviewOne} alt="review-one" />
            <span className="w-[1px] bg-gray-400"></span>
            <img src={heroReviewTwo} alt="review-two" />
            <span className="w-[1px] bg-gray-400"></span>
            <img src={heroReviewThree} alt="review-three" />
          </div>
          <h1
            className="text-[50.12px] my-4 font-extrabold"
            style={{ lineHeight: "62.2px" }}
          >
            Unleash the power of web{" "}
            <b className="text-[#4954DC]">intelligence</b> with us.
          </h1>
          <p className="w-[82%] text-[20px] font-semibold leading-[28.4px] text-[#243746]">
            SOAX Proxy is a powerful proxy solution that bypasses any anti-bot
            system. There is no need for extra steps on your end.
          </p>
          <button className="w-[200px] my-6 h-[50px] rounded-[24px] text-center text-white bg-[#10002B] hover:bg-[#4954DC]">
            Start $1.99 Trial
          </button>
          <div className="w-[96%] flex justify-between">
            <div className="flex items-center justify-between w-[22%]">
              <MdCheckCircle className="text-[#4954DC] text-[20px]" />
              <span className="text-[20px]">
                <span className="font-semibold">24/7</span>{" "}
                <span className="text-[#243746]">Support</span>
              </span>
            </div>

            <div className="flex items-center justify-between w-[25%]">
              <MdCheckCircle className="text-[#4954DC] text-[20px]" />
              <span className="text-[20px]">
                <span className="font-semibold">No</span>{" "}
                <span className="text-[#243746]">Set up costs</span>
              </span>
            </div>

            <div className="flex items-center justify-between w-[25%]">
              <MdCheckCircle className="text-[#4954DC] text-[20px]" />
              <span className="text-[20px]">
                <span className="font-semibold">Cancel</span>{" "}
                <span className="text-[#243746]">anytime</span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[43%]">
          <img src={heroMarketingUI} className="h-full" alt="hero-ui" />
        </div>
      </div>

      <div className="w-full" id="partners">
        <div className="flex justify-center pt-8">
          <span className="text-[#243746] font-bold text-center">
            A trusted partner for 2,000+ companies globally
          </span>
        </div>
        <div
          className="w-full flex justify-between px-8 items-center h-40"
          id="logos"
        >
          <img src={logoOne} className="h-[60px] w-[120px]" alt="forbes" />
          <img src={logoTwo} className="h-[60px] w-[120px]" alt="tech-times" />
          <img src={logoFive} className="h-[50px] w-[300px]" alt="proxway" />
          <img src={logoFour} className="h-[50px] w-[240px]" alt="WEDF" />
          <img src={logoThree} className="h-[50px] w-[260px]" alt="techradar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

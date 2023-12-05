import { useState, useEffect } from "react";
import usaFlag from "../assets/usa-flag.svg";
import spainFlag from "../assets/Spain-flag.svg";
import germanyFlag from "../assets/Germany-flag.svg";
import franceFlag from "../assets/France-flag.svg";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Products from "./Products";
const Navbar = ({ productsRef }) => {
  const [showProducts, setShowProducts] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [flag, setFlag] = useState(usaFlag);
  const [language, setLanguage] = useState("EN");

  const handleLanguage = (lang, flag) => {
    setLanguage(lang);
    setFlag(flag);
    setShowLanguages((prev) => !prev);
  };
  useEffect(() => {
    if (productsRef.current) {
      const productsContainer = productsRef.current;
      const productsLinkRect = productsContainer.getBoundingClientRect();
      productsContainer.style.left = `${productsLinkRect.left}px`;
      productsContainer.style.top = `${productsLinkRect.bottom}px`;
    }
  }, [showProducts, productsRef]);

  const handleProductsClick = () => {
    setShowProducts((prev) => !prev);
  };
  return (
    <>
      <nav
        className="flex w-full h-[60px] bg-white shadow-lg justify-between px-8 items-center"
        ref={productsRef}
      >
        <div className="flex w-[8%] justify-start">
          <span id="brand" className="font-bold text-2xl text-[#243746]">
            SOAX
          </span>
        </div>
        <div className="w-[70%] flex justify-between">
          <span className="text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]">
            Home
          </span>
          <span
            onClick={handleProductsClick}
            className="text-[#243746] font-bold text-[14px] cursor-pointer flex items-center hover:text-[#4954DC]"
          >
            Products{" "}
            {showProducts ? (
              <RiArrowDropUpLine className="text-xl font-black" />
            ) : (
              <RiArrowDropDownLine className="text-xl font-black" />
            )}
          </span>
          <span className="text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]">
            Contact
          </span>
          <span className="text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]">
            Privacy-police
          </span>
          <span className="text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]">
            Terms-of-service
          </span>
          <span className="text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]">
            About-us
          </span>
          <span className="text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]">
            Proxy-location
          </span>
          <span className="text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]">
            Use-case
          </span>
        </div>
        <div
          className="w-[8%] max-h-[100%] flex justify-between cursor-pointer items-center"
          onClick={() => setShowLanguages((prev) => !prev)}
        >
          <img
            src={flag}
            alt={"usa-flag"}
            className="object-cover h-[20px] cursor-pointer"
          />
          <div className="flex items-center justify-between">
            <span className="uppercase text-[#243746] font-medium cursor-pointer">
              {language}
            </span>
            {showLanguages ? (
              <RiArrowDropUpLine
                className="cursor-pointer"
                style={{ fontSize: "32px", fontWeight: 700 }}
              />
            ) : (
              <RiArrowDropDownLine
                className="cursor-pointer"
                style={{ fontSize: "32px", fontWeight: 700 }}
              />
            )}
          </div>
        </div>
      </nav>
      {showProducts && (
        <Products showProducts={showProducts} productsRef={productsRef} />
      )}
      {showLanguages && (
        <div className="w-full flex justify-end pr-2 absolute">
          <div className="w-[140px] bg-white shadow-xl rounded-b py-2">
            <div
              className="flex items-center w-full justify-around cursor-pointer pr-4 pl-[12px]"
              onClick={() => handleLanguage("EN", usaFlag)}
            >
              <img src={usaFlag} className="object-cover h-[20px]" alt="EN" />{" "}
              <span className="text-[#243746] font-medium hover:text-[#4954DC]">
                English
              </span>
            </div>
            <div
              className="flex items-center w-full justify-around cursor-pointer mt-2 pr-4 pl-[16px]"
              onClick={() => handleLanguage("ES", spainFlag)}
            >
              <img
                src={spainFlag}
                className="object-cover ml-[2px] h-[20px]"
                alt="ES"
              />{" "}
              <span className="text-[#243746] font-medium ml-[10px] hover:text-[#4954DC]">
                Español
              </span>
            </div>
            <div
              className="flex items-center w-full justify-between cursor-pointer mt-2 pr-4 pl-[13px]"
              onClick={() => handleLanguage("DE", germanyFlag)}
            >
              <img
                src={germanyFlag}
                className="object-cover ml-[8px] h-[20px]"
                alt="DE"
              />{" "}
              <span className="text-[#243746] font-medium pl-[16px] hover:text-[#4954DC]">
                Deutsch
              </span>
            </div>
            <div
              className="flex items-center w-full justify-between cursor-pointer mt-2 pr-4 pl-[13px]"
              onClick={() => handleLanguage("FR", franceFlag)}
            >
              <img
                src={franceFlag}
                className="object-cover ml-[8px] h-[20px]"
                alt="FR"
              />{" "}
              <span className="text-[#243746] font-medium pl-[16px] hover:text-[#4954DC]">
                Français
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

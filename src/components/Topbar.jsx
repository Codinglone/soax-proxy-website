import { useState } from "react";

const Topbar = () => {
    const [showBanner, setShowBanner] = useState(true)
  return (
    <>
    {showBanner && (<div className="w-full flex justify-between h-[70px] bg-[#10002B]">
      <div className="flex h-[100%] justify-end w-[70vw] items-center">
        <span className=" text-white">
          <b className="text-[20px] font-regular">Black Friday Deal</b>: Get 500GB for $400 on any proxy now.{" "}
          <u className="font-bold ml-6 cursor-pointer">Take the deal</u>
        </span>
      </div>
      <div className="flex w-[30%] h-[100%] justify-center items-center">
        <span className="text-white text-[20px] font-bold cursor-pointer" onClick={() => setShowBanner(false)}>X</span>
      </div>
    </div>)}
    </>
  );
};

export default Topbar;

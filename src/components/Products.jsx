import React, { useRef, useEffect } from "react";

const Products = ({ showProducts, productsRef }) => {
  const productsContainerRef = useRef(null);

  useEffect(() => {
    if (productsRef.current && productsContainerRef.current) {
      const productsLinkRect = productsRef.current.getBoundingClientRect();
      productsContainerRef.current.style.left = `${productsLinkRect.left}px`;
      productsContainerRef.current.style.top = `${productsLinkRect.bottom}px`;
    }
  }, [showProducts]);

  return (
    <div
      ref={productsContainerRef}
      className={`w-[100%] border-t border-gray-200 shadow-lg  h-[80vh] absolute bg-white ${
        showProducts ? "block" : "hidden"
      }`}
    >
      <div className="px-8 flex justify-between pt-6 flex-wrap">
        <div className="w-[48%] pb-4 shadow-md border-t border-[#4954DC] rounded-md bg-white px-4">
          <h1 className="font-bold text-2xl my-4 text-[#10002B]">
            Residential Proxies
          </h1>
          <p className="text-justify text-[#243746]">
            Experience superior connectivity and reliability as our residential
            proxies seamlessly integrate with real users. Empower your online
            activities with confidence, whether you're navigating the web,
            conducting market research, or safeguarding your digital footprint.
          </p>
          <button className="w-[160px] mt-6 h-[40px] rounded-[24px] text-center text-white hover:bg-[#10002B] bg-[#4954DC]">
            Get started
          </button>
        </div>
        <div className="w-[48%] pb-4 shadow-md border-t border-[#4954DC] rounded-md bg-white px-4">
          <h1 className="font-bold text-2xl my-4 text-[#10002B]">
            Web Unblocker
          </h1>
          <p className="text-justify text-[#243746]">
            Unblock the web and access content without restrictions using our
            powerful web unblocker. Enjoy seamless and secure browsing, ensuring
            unrestricted access to your favorite sites and content. Whether at
            work, school, or abroad.
          </p>
          <button className="w-[160px] mt-6 h-[40px] rounded-[24px] text-center text-white hover:bg-[#10002B] bg-[#4954DC]">
            Get started
          </button>
        </div>
        <div className="w-[48%] mt-8 pb-4 shadow-md border-t border-[#4954DC] rounded-md bg-white px-4">
          <h1 className="font-bold text-2xl my-4 text-[#10002B]">
            Web Scrapper API
          </h1>
          <p className="text-justify text-[#243746]">
            Accelerate data extraction with our Web Scraper API. Streamline your
            scraping tasks, gather valuable insights, and boost productivity
            with ease. Whether you're harvesting data for research, analytics,
            or business intelligence.
          </p>
          <button className="w-[160px] mt-6 h-[40px] rounded-[24px] text-center text-white hover:bg-[#10002B] bg-[#4954DC]">
            Get started
          </button>
        </div>
        <div className="w-[48%] mt-8 pb-4 shadow-md border-t border-[#4954DC] rounded-md bg-white px-4">
          <h1 className="font-bold text-2xl my-4 text-[#10002B]">SERP API</h1>
          <p className="text-justify text-[#243746]">
            Optimize your search engine insights with our SERP API. Access
            real-time search engine results effortlessly, empowering your
            applications with accurate and up-to-date data. Whether you're
            tracking keywords, analyzing trends, or enhancing SEO strategies.
          </p>
          <button className="w-[160px] mt-6 h-[40px] rounded-[24px] text-center text-white hover:bg-[#10002B] bg-[#4954DC]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

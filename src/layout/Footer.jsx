import locationSvg from "../assets/footer/svgs/location.svg";
import pinPoint from "../assets/footer/svgs/pinPoint.svg";
import phone from "../assets/footer/svgs/phone.svg";

import linkedin from "../assets/footer/linkedin.png";
import youtube from "../assets/footer/youtube_new.png";

export default function Footer() {
  return (
    <>
      <div className=" w-full flex flex-wrap lg:flex-nowrap justify-center items-start px-4  py-10 lg:gap-0 gap-8 bg-primaryBlue text-white text-base font-semibold ">
        <div className=" w-full ">
          <div className=" text-xl pl-5">Address</div>
          <div className=" flex flex-col pt-4 gap-3">
            <div className=" flex gap-2  flex-wrap lg:flex-nowrap pl-5 ">
              <img src={locationSvg} alt="" />
              <div className="  text-[13px] leading-4 font-extralight">
                No 14 A,Maariamman Kovil Street,<br></br> Kanchipadi,
                Thiruvallur - 631204
              </div>
            </div>
            <div className=" flex gap-2  flex-wrap lg:flex-nowrap pl-5 ">
              <img src={pinPoint} alt="" />
              <div className="  text-[13px] font-extralight">
                Chennai, Tamil Nadu, India 600054
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" text-xl pl-5">Contact Info</div>
          <div className=" flex flex-col pt-4 gap-3">
            <div className=" flex gap-2  flex-wrap lg:flex-nowrap pl-5 items-center  ">
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0477941 1.29583C0.144164 0.927703 0.381068 0.599011 0.719705 0.36359C1.05834 0.12817 1.47864 -2.5412e-05 1.91176 3.77845e-09H13.3824C13.8155 -2.5412e-05 14.2358 0.12817 14.5744 0.36359C14.913 0.599011 15.15 0.927703 15.2463 1.29583L7.64706 5.345L0.0477941 1.29583ZM0 2.2475V8.1675L5.54699 5.2025L0 2.2475ZM6.46272 5.69167L0.182574 9.0475C0.337739 9.33274 0.582636 9.57369 0.888762 9.74232C1.19489 9.91094 1.54965 10.0003 1.91176 10H13.3824C13.7444 10.0001 14.099 9.91051 14.405 9.74174C14.7109 9.57297 14.9556 9.33193 15.1106 9.04667L8.83044 5.69083L7.64706 6.32167L6.46272 5.69167ZM9.74713 5.20333L15.2941 8.1675V2.2475L9.74713 5.2025V5.20333Z"
                  fill="white"
                />
              </svg>

              <div className="  text-[13px] leading-4 font-extralight">
                <a href="mailto:drsnk1730@gmail.com">drsnk1730@gmail.com</a>
              </div>
            </div>
            {/* <div className=" flex gap-2  flex-wrap lg:flex-nowrap pl-5 ">
              <img src={phone} alt="" />
              <div className="  text-[13px] font-extralight">
                <a href="tel:+91 8925799512">+91 8925799512</a>
              </div>
            </div> */}
            <div className=" w-full flex  pl-5   gap-10">
              <img width={25} src={linkedin} alt="" />
              <img width={25} src={youtube} alt="" />
            </div>
          </div>
        </div>
        <div className=" w-full">
          <div className=" text-xl pl-5 ">Contact me</div>
          <div className=" flex flex-col pt-4 gap-3">
            <div className=" flex gap-2  flex-wrap lg:flex-nowrap pl-5">
              <input
                className=" rounded-lg py-1  pl-2 text-sm h-8 w-60 placeholder:text-[12px] text-black outline-none"
                type="text"
                placeholder="Your name *"
              />
              <input
                className=" rounded-lg py-1  pl-2 text-sm h-8 w-60 placeholder:text-[12px] text-black outline-none"
                type="text"
                placeholder="Your contact number *"
                name=""
                id=""
              />
            </div>
            <div className=" flex gap-2  flex-wrap lg:flex-nowrap pl-5 ">
              <input
                className=" rounded-lg py-1  pl-2 text-sm h-8 w-60 placeholder:text-[12px] text-black outline-none"
                type="text"
                placeholder="Your email *"
                name=""
                id=""
              />
              <input
                className=" rounded-lg py-1  pl-2 text-sm h-8 w-60 placeholder:text-[12px] text-black outline-none"
                type="text"
                placeholder="Your organization name *"
                name=""
                id=""
              />
            </div>
            <div className=" flex w-full justify-start  pl-5  lg:pl-52 items-center  ">
              <button className="  bg-white text-primaryBlue text-base font-semibold py-[2px] px-4 text-center rounded">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

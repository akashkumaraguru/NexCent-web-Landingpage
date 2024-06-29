import logo from "../assets/footer/Logo.png";
import sociallink from "../assets/footer/Social Links.png";
import { LiaTelegramPlane } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="bg-[#263238] flex   h-[50vh]">
      <div className="p-20 h-[30vh]">
        <img src={logo} alt="" className="mb-10" />
        <h1 className="text-white mt-5">Copyright © 2020 Nexcent ltd.</h1>
        <h1 className="text-white  mb-10">All rights reserved</h1>
        <img src={sociallink} alt="" />
      </div>

      <div className="p-20 h-[30vh] ml-20">
        <h1 className="font-bold text-white  text-xl">Company</h1>
        <ul className="flex  flex-col justify-around items-start ">
          <li className="text-[#F5F7FA] mt-5">About us</li>
          <li className="text-[#F5F7FA] mt-2">Blog</li>
          <li className="text-[#F5F7FA] mt-2">Contact us</li>
          <li className="text-[#F5F7FA] mt-2">Pricing</li>
          <li className="text-[#F5F7FA] mt-2">Testimonials</li>
        </ul>
      </div>
      <div className="p-20 h-[30vh]">
        <h1 className="font-bold text-white  text-xl">Support </h1>
        <ul className="flex  flex-col justify-around items-start ">
          <li className="text-[#F5F7FA] mt-5">Help Center</li>
          <li className="text-[#F5F7FA] mt-2">Terms of Service</li>
          <li className="text-[#F5F7FA] mt-2">Legal</li>
          <li className="text-[#F5F7FA] mt-2">Privacy policy</li>
          <li className="text-[#F5F7FA] mt-2">Status</li>
        </ul>
      </div>
      <div className="p-20 h-[30vh]">
        <h1 className="font-bold text-white  text-xl">Stay Up to Date </h1>
      <div className='flex items-center justify-evenly'>
      <input type="text" name="input " id="" placeholder='Your Email Address' className='border-none outline-none h-10 p-3 bg-[#D9DBE1] rounded-md mt-5' />
<a href="">      <LiaTelegramPlane className='text-[#D9DBE1] size-8 ml-3 mt-5' /></a>
      </div>
      </div>
    </div>
  );
};
export default Footer;

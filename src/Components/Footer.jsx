import logo from "../assets/footer/Logo.png";
import sociallink from "../assets/footer/Social Links.png";

const Footer = () => {
  return (
    <div className="bg-[#263238]  h-[40vh]">
      <div className="p-20 h-[30vh]">
        <img src={logo} alt="" className="mb-10" />
        <h1 className="text-white mt-5">Copyright © 2020 Nexcent ltd.</h1>
        <h1 className="text-white  mb-10">All rights reserved</h1>
        <img src={sociallink} alt="" />
      </div>

      <div>
        
      </div>
    </div>
  );
};
export default Footer;

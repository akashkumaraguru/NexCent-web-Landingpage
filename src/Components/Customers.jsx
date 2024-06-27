import tesla from "../assets/tesla.png";
import Logo1 from "../assets/logod/Logo1.png";
import Logo2 from "../assets/logod/Logo2.png";
import Logo3 from "../assets/logod/Logo3.png";
import Logo4 from "../assets/logod/Logo4.png";
import Logo5 from "../assets/logod/Logo5.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Customer = () => {
  const logos = [
    {
      logo: Logo1,
    },
    {
      logo: Logo2,
    },
    {
      logo: Logo3,
    },
    {
      logo: Logo4,
    },
    {
      logo: Logo5,
    },
  ];

  return (
    <div className=" h-full   p-5 mt-10 gap-20 flex  justify-evenly items-center bg-[#F5F7FA]">
      <div>
        <img src={tesla} alt="img" className=" ml-[200px]" />
      </div>
      <div className="ml-[270px] mt-10 ">
        <h1 className="w-4/5  text-[#717171] ">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </h1>
        <h2 className="font-bold text-[#4CAF4F] mt-3">Tim Smith</h2>
        <h2 className="mt-3">British Dragon Boat Racing Association</h2>
        <div className="flex justify-between items-center w-[40vw] text-start mr-20">
          {logos.map((e, index) => (
            <div className="size-10 mt-5">
              <div key={index} className="">
                <img src={e.logo} alt="" />
              </div>
            </div>
          ))}
          <h1 className="mt-5 font-bold text-[#4CAF4F]">Meet All Customers</h1>
          <FaArrowRightLong className="mt-5 size-5 text-[#4CAF4F]" />
        </div>
      </div>
    </div>
  );
};

export default Customer;

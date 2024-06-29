import { FaArrowRight } from "react-icons/fa6";

const Beffooter = () => {
  return (
    <div className="mt-20 text-center bg-[#F5F7FA]">
      <div className="p-10 font-semibold font-xxl">
        <h1 className="text-5xl mb-4">Pellentesque suscipit </h1>
        <h1 className="text-5xl"> fringilla libero eu. </h1>
        <div className='hover:bg-[#4CAF4F] w-[200px] h-[40px]  rounded-md ml-[590px] hover:text-white bg-slate-50 text-[#4CAF4F] mt-10 flex  items-center justify-evenly  '>
          <h1>Get a Demo</h1>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Beffooter;

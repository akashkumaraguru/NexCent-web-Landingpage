import illustration from "../assets/Illustration.png";

const HeroSection = () => {
  return (
    <div className=" flex  gap-10  bg-[#F5F7FA]">
      <div className="p-20 mt-10 ml-20">
        <h1 className="text-7xl font-semibold flex  flex-col gap-2">
          Lessons and insights
          <span className="text-[#4CAF4F]">from 8 years</span>
        </h1>
        <p className="mt-5">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="bg-[#4CAF4F] text-white mt-5 w-[150px] rounded-md h-[50px]">
          Register
        </button>
        </div>

        <div>
          <img src={illustration} alt="illustraion" className="w-[391px] h-[407px]  mt-10" />
        </div>

       
      </div>
  
  );
};

export default HeroSection;

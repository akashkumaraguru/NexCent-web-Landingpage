import leftIllustraion from "../assets/pana.png";

const Site = () => {
  return (
    <div className="w-full h-full gap-10 flex  justify-evenly items-center " >
        <img
          src={leftIllustraion}
          alt=""
          className="w-fit  h-[407px] text-center ml-40 mt-5 "
        />
      <div className='w-fit ml-20 p-5 m-20  '>
        <h1 className='text-4xl font-semibold text-[#4D4D4D] '>How to design your site footer like we did</h1>
        <h1  className='w-2/8 mt-5 mt-4 text-[#4D4D4D] mb-5'>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </h1>
        <button className='bg-[#4CAF4F] text-white border border-none p-3 rounded-md mt-5'>Learn more</button>
      </div>
    </div>
  );
};

export default Site;

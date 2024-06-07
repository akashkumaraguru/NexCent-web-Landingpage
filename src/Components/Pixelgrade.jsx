import illustration from "../assets/Community/illustration-left.png";
const Pixelgrade = () => {
  return (
    <div className="w-full h-full p-10 flex ml-20 items-start justify-around">
      <div className='w-full'>
        <img
          src={illustration}
          alt="illustration"
          className="w-[500px] h-[328px]"
        />
      </div>
      <div className=''>
        <h1 className="text-4xl font-semibold text-[#4D4D4D]  w-2/3 ">
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className='w-4/5 mt-5 text-[#717171] ' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className='bg-[#4CAF4F] text-white border border-none p-3 rounded-md mt-5 '>Learn more</button>
      </div>
    </div>
  );
};

export default Pixelgrade;

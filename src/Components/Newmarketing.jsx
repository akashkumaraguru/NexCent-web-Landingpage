import imgOne from "../assets/newmarketing/imgOne.png";
import imgTwo from "../assets/newmarketing/imgTwo.png";
import imgThree from "../assets/newmarketing/imgThree.png";

const Newmarketing = () => {
  const imges = [
    {
      img: imgOne,
      descp: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      img: imgTwo,
      descp:
        "What are your safeguarding responsibilities",
    },
    {
      img: imgThree,
      descp: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <div className="mt-20 ">
      <div className="flex  flex-col items-center ">
        <h1 className=" font-bold text-[36px] text-[#4D4D4D] ">
          Caring is the new marketing
        </h1>
        <h1 className="w-2/5 text-center text-[#4D4D4D] gap-10 ">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </h1>
      </div>
      <div className="flex items-center  mt-10 justify-evenly ml-10">
        {imges.map((e, i) => (
          <div key={i}>
            <img src={e.img} alt="" className='bg-cover ' />
            <p className="w-5/5 p-5 flex-start font-regular">{e.descp}</p>
            <p className='font-bold text-center hover:bg-[#4CAF4F] hover:text-white text-[#4CAF4F] bg-slate-200 h-10 p-2 rounded-md '>Know more</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Newmarketing;

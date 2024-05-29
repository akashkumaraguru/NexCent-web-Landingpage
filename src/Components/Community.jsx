import icon1 from "../assets/Community/Icon1.png";
import icon2 from "../assets/Community/Icon2.png";
import icon3 from "../assets/Community/Icon3.png";

const Community = () => {
  const infos = [
    {
      icon: icon1,
      head: "Membership Organisations",
      descrip:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: icon2,
      head: "National Associations",
      descrip:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: icon3,
      head: "Clubs And Groups",
      descrip:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <div className="text-center w-full mt-20 p-5">
      <h1 className="text-4xl font-bold text-[#4D4D4D]">
        Manage your entire community in a single system
      </h1>
      <h1 className="text-2xl text-[#4D4D4D] mt-5">
        Who is Nextcent suitable for?
      </h1>

      <div className=' w-full  text-center flex justify-evenly p-10  '>
        {infos.map((e, i) => (
          <div key={i} className='mt-10 flex flex-col  justify-evenly items-center '>
            <img src={e.icon} alt="icons" className ='w-[65px] h-[56px] items-center' />
            <div className='flex '>
            <h1 className='text-2xl  font-bold'>{e.head}</h1> 
            </div>
            <p className='text-sm  w-2/5'>{e.descrip}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;

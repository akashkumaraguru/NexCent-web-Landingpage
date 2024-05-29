import icons1 from '../assets/Helping/Icon1.png';
import icons2 from '../assets/Helping/Icon2.png';
import icons3 from '../assets/Helping/Icon3.png';
import icons4 from '../assets/Helping/Icon4.png';

const Helping = () =>{

const infos = [
    {
        icon:icons1 , 
        number: '2,245,341',
        desc :'Members'
    },
    {
        icon:icons2 , 
        number: '46,328',
        desc :'Clubs'
    },
    {
        icon:icons3 , 
        number: '828,867',
        desc :'Event Bookings'
    },
    {
        icon:icons4 , 
        number: '1,926,436',
        desc :'Payments'
    }
]

    return (
            <div className='mt-10 bg-[#F5F7FA] flex  w-full h-[40vh] '>
             <div className='ml-20 p-5 '>
             <h1  className='text-5xl mt-10 font-semibold w-3/4'>
                Helping a local <span className='text-[#4CAF4F]'>
                business reinvent itself
                </span>
                </h1>
                <h1 className='mt-3'>
                We reached here with our hard work and dedication
                    </h1>
             </div>
             <div className=' '>
             <img src={icons1} alt="" className='size-10 mt-20' />
             </div>
           <div className='mt-20 ml-5'>
           <h1 className='text-3xl font-bold'>2,245,341</h1>
                <h1 className='text-[#717171]'>Members</h1>
           </div>
 
            </div>
    );
};

export default Helping;
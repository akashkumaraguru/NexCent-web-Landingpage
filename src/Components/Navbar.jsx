import logo from '../assets/Logo.png'


const Navbar = () =>{
    return(
        <div className='w-full h-full  p-2'>
            <div className='hidden  lg:flex h-20 items-center justify-around'>
                <img className='h-5' src={logo} alt="Icon" />
                <ul className='lg:w-[50vw]'>
                    <li className='justify-between items-center flex'>
                        <a href="#" className=' hover:text-[#4CAF4F]' >Home</a>
                        <a href="#" className=' hover:text-[#4CAF4F]' >Service</a>
                        <a href="#" className=' hover:text-[#4CAF4F]' >Feature</a>
                        <a href="#" className=' hover:text-[#4CAF4F]' >Product</a>
                        <a href="#" className=' hover:text-[#4CAF4F]' >Testimonilas</a>
                        <a href="#" className=' hover:text-[#4CAF4F]' >FAQ</a>
                    </li>
                </ul>
                    <div className='flex justify-evenly items-center w-[10vw]'>
                        <h1 className='text-[#4CAF4F] cursor-pointer'>Log In</h1>
                        <h2 className='bg-[#4CAF4F] rounded-md p-2 text-center rounded-md hover:text-white hover:bg-[#66BB69] text-white cursor-pointer'>Sign In</h2>
                    </div>
            </div>
            
        </div>
    );
};

export default Navbar;
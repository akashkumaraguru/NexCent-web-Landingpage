import React from 'react';
import Logo1 from '../assets/logod/Logo1.png';
import Logo2 from '../assets/logod/Logo2.png';
import Logo3 from '../assets/logod/Logo3.png';
import Logo4 from '../assets/logod/Logo4.png';
import Logo5 from '../assets/logod/Logo5.png';
import Logo6 from '../assets/logod/Logo6.png';
import Logo7 from '../assets/logod/Logo7.png';

const Works = () => {
  const logos = [
    { brand: Logo1 },
    { brand: Logo2 },
    { brand: Logo3 },
    { brand: Logo4 },
    { brand: Logo5 },
    { brand: Logo6 },
    { brand: Logo7 },
  ];

  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-[#4D4D4D]">Our Clients</h1>
        <h1 className="text-2xl text-[#4D4D4D] mt-5">
          We have been working with some Fortune 500+ clients
        </h1>
      </div>
   <div className='flex items-center justify-evenly mt-10'>
   {logos.map((logo, index) => (
        <img key={index} src={logo.brand} alt={'logos'} />
      ))}
   </div>
    </div>
  );
};

export default Works;

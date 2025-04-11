import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      id="profile"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-24 bg-black text-white"
    >
      {/* Left: Text Content */}
      <div className="flex-1 text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          HI, I’M ADITYA H <br />
          COMPUTER SCIENCE STUDENT <br />
         
        </h1>
        <p className="text-gray-400 max-w-md mb-6">
          Passionate about cloud technologies, software development, and solving real-world problems. Currently pursuing a B.E. in CSE at SIT Tumkur.
        </p>
        
      </div>

      {/* Right: Profile Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="./public/port.jpg"
            alt="Aditya H"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

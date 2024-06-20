'use client';
import { useState } from 'react';
import Image from 'next/image';

const BouncingPng = () => {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ top: `${y}px`, left: `${x}px` });
  };

  return (
    <div
      className="relative w-full h-screen bg-gray-800 overflow-hidden"
      onClick={handleClick}
    >
      <div
        className="absolute transition-all duration-[3000ms]"
        style={{ top: position.top, left: position.left }}
      >
        <div className="animate-bounce">
          <Image src={'/wizard.gif'} alt="bouncing" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default BouncingPng;

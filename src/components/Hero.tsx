import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-[1440px] bg-[#F6F7F9] flex justify-center">
      <div className="grid grid-cols-2 gap-7 pt-8">
        {/* Image 1 */}
        <div className="flex justify-center items-center">
          <Image
            src="/assets/image7.png"
            alt="Car Image 1"
            width={640}
            height={360}
            className="rounded-[10px] object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="flex justify-center items-center">
          <Image
            src="/assets/image8.png"
            alt="Car Image 2"
            width={640}
            height={360}
            className="rounded-[10px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

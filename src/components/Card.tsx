import React from 'react'; 
import { RiPokerHeartsLine } from 'react-icons/ri'; // Importing an icon
import Image from "next/image"; // Next.js Image component

// Step 1: Define the props (the data that will be passed to this component)
interface cardItems {
    tittle: string,
    Usertext: number,
    Number: number,
    image: string,
    oldPrice?: string,
    newPrice?: string,
    redHeart?: React.JSX.Element,
    model?: string
}

// Step 2: Create the Card component
const Cards = ({
  tittle, 
  Usertext, 
  Number, 
  image, 
  newPrice, 
  oldPrice, 
  model = "Sport",
  redHeart = <RiPokerHeartsLine className="text-3xl text-[#90A3BF] cursor-pointer" />
}: cardItems) => {
  return (
    <>
    <section>
    <div>
      <div className="flex flex-col justify-center card p-5 border-5 bg-white shadow-xl border-gray-500 w-[304px] h-[388px]">
        <div className='flex justify-between'>
          <div className='flex-col'>
            <h1 className="text-[20px] text-black font-bold">{tittle}</h1>
            <p className='text-[#90A3BF] text-[14px] font-bold'>{model}</p>
          </div>
          <div>{redHeart}</div>
        </div>
        <div className='p-10'>
          <Image src={image} alt="Profile" width={202} height={156} />
        </div>

        <div className='flex gap-4'>
          <div className='flex gap-1'>
            <Image src="/assets/Gasoline1.png" alt=" " width={40} height={1} />
            <span>{50}L</span>
          </div>
          <div className='flex gap-1'>
            <Image alt="" src="/Assets/man.png" width={76} height={24} />
            <span>Manual</span>
          </div>
          <div className='flex gap-1'>
            <Image alt="" src="/assets/Capacity.png" width={54} height={24} />
            <span>{Usertext} people</span>
          </div>
        </div>

        <div className="flex justify-between gap-10">
          <div>
            <span className='text-[20px] font-bold'></span>
            <span className='text-[14px]'>$99.00/ day </span>
            <h3 className='line-through text-[14px]'>{oldPrice}</h3>
          </div>
          <button className='bg-[#3563E9] w-[116px] text-white p-3 text-[16px]'>
            Rent Now
          </button>
        </div>
      </div>
    </div>
</section>
</>
  );
};

export default Cards;

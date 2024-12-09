import Image from "next/image"; 
import { IoHeart } from 'react-icons/io5'; 
import Cards from "@/components/Card";
import Footer from "@/components/Footer";
import Pick from "@/components/Pick";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Payment from "@/components/Payment";
import Dashboard from "@/components/Dashboard";
import CarDetails from "@/components/CarDetails";

// Step 1: Add the data and data2 arrays
const data = [
  {
    id: 1,
    tittle: "Koenigsegg",
    Usertext: 2,
    newPrice: "$99.00",
    Number: 9,
    image: "/assets/id1.png",
    redHeart: <IoHeart className='text-[#ED3F3F] text-3xl'
    />
  },
  {
    id: 2,
    tittle: "Nissan GT - R",
    Usertext: 2,
    newPrice: "$80.00",
    Number: 8,
    image: "/assets/id2.png",
    oldPrice: "$100.00",
  },
  {
    id: 3,
    tittle: "Rolls - Royce",
    Usertext: 4,
    newPrice: "$96.00",
    model: "Sedan",
    Number: 7,
    image: "/assets/id3.png",
    redHeart: <IoHeart className='text-[#ED3F3F] text-3xl' />
  },
  {
    id: 4,
    tittle: "Nissan GT - R",
    Usertext: 2,
    newPrice: "$80.00",
    oldPrice: "$100.00",
    Number: 8,
    image: "/assets/id4.png",
  },
];

const data2 = [
  {
    id: 1,
    tittle: "All New Rush",
    Usertext: 7,
    newPrice: "$72.00",
    model: "SUV",
    oldPrice: "$80.00",
    Number: 6,
    image: "/assets/id5.png",
  },
  {
    id: 2,
    tittle: "CR  - V",
    model: "SUV",
    Usertext: 8,
    newPrice: "$80.00",
    Number: 6,
    image: "/assets/id6.png",
    oldPrice: "$100.00",
    redHeart: <IoHeart className='text-[#ED3F3F] text-3xl' />
  },
  {
    id: 3,
    tittle: "All New Terios",
    model: "SUV",
    Usertext: 6,
    newPrice: "$74.00",
    Number: 9,
    image: "/assets/id7.png",
  },
  {
    id: 4,
    tittle: "CR  - V",
    Usertext: 6,
    model: "SUV",
    newPrice: "$80.00",
    oldPrice: "$80.00",
    Number: 8,
    image: "/assets/id8.png",
    redHeart: <IoHeart className='text-[#ED3F3F] text-3xl' />
  },
  {
    id: 5,
    tittle: "MG ZX Exclusice",
    Usertext: 4,
    newPrice: "$76.00",
    model: "Hatchback",
    oldPrice: "$80.00",
    Number: 7,
    image: "/assets/id9.png",
    redHeart: <IoHeart className='text-[#ED3F3F] text-3xl' />
  },
  {
    id: 6,
    tittle: "New MG ZS",
    model: "SUV",
    Usertext: 8,
    newPrice: "$80.00",
    Number: 6,
    image: "/assets/id10.png",
  },
  {
    id: 7,
    tittle: "MG ZX Excite",
    model: "Hatchback",
    Usertext: 4,
    newPrice: "$74.00",
    Number: 9,
    image: "/assets/id11.png",
    redHeart: <IoHeart className='text-[#ED3F3F] text-3xl' />
  },
  {
    id: 8,
    tittle: "New MG ZS",
    Usertext: 6,
    model: "SUV",
    newPrice: "$80.00",
    Number: 8,
    image: "/assets/id12.png",
  },
];

export default function Home() {
  return (
    <div className="w-[1440px] h-[80px] border-slate-10000 border-b-2 bg-white text-white">
      <Navbar />
      <Hero />
      <Pick />
      {/* Cars from Data 1 */}
      <h1 className="text-2xl font-bold my-6">Data 1 Cars</h1>
      <div className="flex flex-wrap gap-6">
        {data.map((car) => (
          <Cards 
            key={car.id}
            tittle={car.tittle}
            Usertext={car.Usertext}
            Number={car.Number}
            image={car.image}
            newPrice={car.newPrice}
            oldPrice={car.oldPrice}
            redHeart={car.redHeart}
            model={car.model}
          />
        ))}
      </div>

      {/* Cars from Data 2 */}
      <h1 className="text-2xl font-bold my-6">Data 2 Cars</h1>
      <div className="flex flex-wrap gap-6">
        {data2.map((car) => (
          <Cards 
            key={car.id}
            tittle={car.tittle}
            Usertext={car.Usertext}
            Number={car.Number}
            image={car.image}
            newPrice={car.newPrice}
            oldPrice={car.oldPrice}
            redHeart={car.redHeart}
            model={car.model}
          />
        ))}
      </div>
      <CarDetails />
      <Dashboard />
      <Payment />
      <Footer />
    </div>
  );
}

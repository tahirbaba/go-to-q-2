// components/CarDetails.tsx
'use client'; // Add this line at the top

import React, { useState } from "react";

const CarDashboard = () => {
  const [carType, setCarType] = useState("Sport");
  const [capacity, setCapacity] = useState("2 People");

  const cars = [
    {
      id: 1,
      name: "Koenigsegg",
      type: "Sport",
      capacity: "2 People",
      price: "$99.00/day",
      fuel: "90L",
      transmission: "Manual",
      image: "/images/koenigsegg.jpg",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      type: "Sport",
      capacity: "2 People",
      price: "$80.00/day",
      fuel: "80L",
      transmission: "Manual",
      image: "/images/nissan-gt-r.jpg",
    },
    {
      id: 3,
      name: "Rolls-Royce",
      type: "Luxury",
      capacity: "4 People",
      price: "$96.00/day",
      fuel: "70L",
      transmission: "Manual",
      image: "/images/rolls-royce.jpg",
    },
    {
      id: 4,
      name: "MG ZX Exclusive",
      type: "SUV",
      capacity: "6 People",
      price: "$76.00/day",
      fuel: "90L",
      transmission: "Electric",
      image: "/images/mg-zx.jpg",
    },
    {
      id: 5,
      name: "New MG ZS",
      type: "SUV",
      capacity: "6 People",
      price: "$80.00/day",
      fuel: "80L",
      transmission: "Manual",
      image: "/images/mg-zs.jpg",
    },
    {
      id: 6,
      name: "All New Rush",
      type: "SUV",
      capacity: "6 People",
      price: "$72.00/day",
      fuel: "90L",
      transmission: "Manual",
      image: "/images/all-new-rush.jpg",
    },
    {
      id: 7,
      name: "CR-V",
      type: "SUV",
      capacity: "5 People",
      price: "$74.00/day",
      fuel: "80L",
      transmission: "Manual",
      image: "/images/cr-v.jpg",
    },
    {
      id: 8,
      name: "Terios",
      type: "SUV",
      capacity: "5 People",
      price: "$78.00/day",
      fuel: "70L",
      transmission: "Manual",
      image: "/images/terios.jpg",
    },
    {
      id: 9,
      name: "MG ZX Excite",
      type: "Hatchback",
      capacity: "4 People",
      price: "$74.00/day",
      fuel: "90L",
      transmission: "Electric",
      image: "/images/mg-zx-excite.jpg",
    },
  ];

  const filterCars = () => {
    return cars.filter((car) => car.type === carType && car.capacity === capacity);
  };

  return (
    <div className="container mx-auto p-4 flex space-x-8">
      {/* Left Sidebar with Filters */}
      <div className="w-1/4 bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl font-semibold">Filter Options</h2>

        <div className="mt-4">
          <h3 className="font-medium">Type</h3>
          <select
            className="w-full p-2 mt-2 border rounded-md"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
          >
            <option value="Sport">Sport</option>
            <option value="SUV">SUV</option>
            <option value="Luxury">Luxury</option>
            <option value="Hatchback">Hatchback</option>
          </select>
        </div>

        <div className="mt-4">
          <h3 className="font-medium">Capacity</h3>
          <select
            className="w-full p-2 mt-2 border rounded-md"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          >
            <option value="2 People">2 People</option>
            <option value="4 People">4 People</option>
            <option value="5 People">5 People</option>
            <option value="6 People">6 People</option>
          </select>
        </div>
      </div>

      {/* Right Section with Cars */}
      <div className="w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterCars().map((car) => (
            <div key={car.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-gray-600">Type: {car.type}</p>
                <p className="text-gray-600">Capacity: {car.capacity}</p>
                <p className="font-bold text-xl">{car.price}</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDashboard;

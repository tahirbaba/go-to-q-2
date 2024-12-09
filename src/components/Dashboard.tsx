import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container min-h-screen bg-gray-100 text-gray-800">
      <header className="dashboard-header p-4 bg-blue-600 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">MORENT</h1>
        <input
          type="text"
          placeholder="Search something here"
          className="p-2 rounded border border-gray-300 text-gray-800"
        />
      </header>

      <main className="p-6">
        <section className="main-menu mb-6">
          <h2 className="text-lg font-semibold mb-4">MAIN MENU</h2>
          <ul className="grid grid-cols-2 gap-4">
            <li className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Details Rental</h3>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Top 5 Car Rental</h3>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Dashboard</h3>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Sport Car</h3>
              <p>17,439</p>
            </li>
          </ul>
        </section>

        <section className="insights mb-6">
          <h2 className="text-lg font-semibold mb-4">Insight</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Car Rent</h3>
              <p>SUV: 9,478</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Coupe</h3>
              <p>18,197</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Rental Car</h3>
              <p>Hatchback: 12,510</p>
            </div>
          </div>
        </section>

        <section className="recent-transactions mb-6">
          <h2 className="text-lg font-semibold mb-4">Recent Transaction</h2>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Nissan GT-R</h3>
              <p>Date: 20 July 2022</p>
              <p>Price: $80.00</p>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Koegnigsegg</h3>
              <p>Date: 19 July 2022</p>
              <p>Price: $99.00</p>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">Rolls-Royce</h3>
              <p>Date: 18 July 2022</p>
              <p>Price: $96.00</p>
            </li>
          </ul>
        </section>
      </main>

      <footer className="dashboard-footer p-4 bg-blue-600 text-white text-center">
        <p>Total Rental Price: $80.00 (includes discount)</p>
      </footer>
    </div>
  );
};

export default Dashboard;

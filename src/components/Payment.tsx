import React from "react";

export default function PaymentSection() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">MORENT</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-6 space-y-8">
        {/* Billing Info */}
        <section>
          <h2 className="text-xl font-bold mb-2">Billing Info</h2>
          <p className="text-sm text-gray-600 mb-4">
            Please enter your billing info. Step <strong>1 of 4</strong>
          </p>
          <p className="text-sm text-gray-500">
            Prices may change depending on the length of the rental and the price of your rental car.
          </p>
          <form className="grid gap-4 md:grid-cols-2 mt-6">
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone number"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="city">
                Town / City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Town or city"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </form>
        </section>

        {/* Rental Summary */}
        <section>
          <h2 className="text-xl font-bold mb-2">Rental Summary</h2>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>$80.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between text-sm font-semibold">
              <span>Total Rental Price</span>
              <span>$80.00</span>
            </div>
            <p className="text-xs text-gray-500">
              Overall price and includes rental discount
            </p>
          </div>
        </section>

        {/* Payment Method */}
        <section>
          <h2 className="text-xl font-bold mb-2">Payment Method</h2>
          <p className="text-sm text-gray-600 mb-4">Please enter your payment method. Step <strong>3 of 4</strong></p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="cardNumber">
                Credit Card
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Card number"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="expiry">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="DD / MM / YY"
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="cvc">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="CVC"
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
          </form>
        </section>

        {/* Confirmation */}
        <section>
          <h2 className="text-xl font-bold mb-2">Confirmation</h2>
          <p className="text-sm text-gray-600">
            We are getting to the end. Just a few clicks and your rental is ready! Step <strong>4 of 4</strong>
          </p>
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="marketing" className="w-5 h-5" />
              <label htmlFor="marketing" className="text-sm">
                I agree with sending marketing and newsletter emails. No spam, promised!
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="w-5 h-5" />
              <label htmlFor="terms" className="text-sm">
                I agree with our terms and conditions and privacy policy.
              </label>
            </div>
          </div>
          <button className="w-full mt-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Rent Now
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            All your data is safe. We are using the most advanced security to provide you the best experience ever.
          </p>
        </section>
      </main>
    </div>
  );
}

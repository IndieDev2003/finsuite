import React from 'react'

function Hero() {
  return (
    <section className="h-screen md:h-[80vh] flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="h-2/3 md:h-fit md:w-1/2 flex-col flex md:block items-center justify-center">
        <h1 className="text-5xl md:text-6xl md:text-left text-center">
          Maximixze <span></span>
          <br />
          Your <span> Fincancial</span> Potential
        </h1>
        <p className="md:text-left text-center">
          Welcome to FinSuite, where fincancial management meets
          <br className='hidden md:block' /> simplicity and efficiency.
        </p>
        <button className="bg-slate-700 text-white px-6 py-2 text-lg rounded-3xl mt-2">
          Get Started
        </button>
      </div>
      <div className="h-1/3 md:h-full md:w-1/2 md:p-10">
        <div className="border-gray-700 border-2 w-full h-full rounded-xl bg-gray-300 "></div>
      </div>
    </section>
  );
}

export default Hero
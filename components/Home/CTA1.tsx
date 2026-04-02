import React from "react";

function CTA1() {
  return (
    <section className="flex p-6 flex-col gap-4 md:flex-row justify-between items-center h-screen md:h-[70vh] my-4 bg-gray-100 rounded-3xl md:px-10">
      <div className="h-1/2 md:h-full md:w-1/2">
        <h2 className="text-5xl md:text-6xl font-bold">
          <span>Track</span> Your all the <br />
          Expenses Easily
        </h2>
        <p className="text-gray-700 my-2">
          Effortlessly monitor and manage all your expenses with our intuitive
          tracking systems. Stay on the top of your finances by easily recording
          and catogrizing expenses, ensuring you have a clear overview of your
          spending habits.
        </p>
        <button className="bg-slate-700 text-white px-6 py-2 text-lg rounded-3xl mt-2">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 p- md:p-10 h-1/2 w-full md:h-full">
        <div className="h-full md:h-full w-full bg-gray-300 rounded-3xl"></div>
      </div>
    </section>
  );
}

export default CTA1;

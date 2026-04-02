import React from "react";

function CTA1() {
  return (
    <section className="flex flex-row justify-between items-center h-[70vh] my-4 bg-gray-100 rounded-3xl px-10">
      <div className="w-1/2">
        <h2 className="text-6xl font-bold">
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
      <div className="w-1/2 p-10 h-full">
        <div className="h-full w-full bg-gray-300 rounded-3xl"></div>
      </div>
    </section>
  );
}

export default CTA1;

import React from "react";

function CTA2() {
  return (
    <section className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center h-screen md:h-[70vh] my-4 bg-gray-100 rounded-3xl px-6 py-4 md:px-10">
      <div className="w-full h-2/3 md:w-1/2 flex md:block flex-col justify-center">
        <h2 className="text-6xl font-bold">
          <span>Intergrate</span> with your favriote tools
        </h2>
        <p className="text-gray-700 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sunt voluptates sit earum corrupti dolor quas qui asperiores facilis dolorem.
        </p>
        <button className="bg-slate-700 text-white px-6 py-2 text-lg rounded-3xl mt-2">
          Get Started
        </button>
      </div>
      <div className="w-full md:h-full md:w-1/2 md:p-10 h-1/3">
        <div className="h-full w-full bg-gray-300 rounded-3xl"></div>
      </div>
    </section>
  );
}

export default CTA2;

import React from "react";

function Hook2() {
  return (
    <section className="my-30">
      <div className="text-center my-10">
        <h2 className="text-5xl font-bold">
          <span className="text-blue-400">Send Money Across</span> <br /> The Globe
        </h2>
        <p className="text-gray-700">
          Exprience seamless global money transfers with our <br />
          Cuttinge edge platform. Send money accross continents safely.
        </p>
      </div>
      <div className="flex flex-row gap-10">
        <Option text={"Send 100+ Countries"} classname='bg-fuchsia-200'/>
        <Option text={"Convert 100+ Currencies"} classname='bg-blue-200'/>
        <Option text={"Unlimited Transactions"} classname='bg-rose-200'/>
      </div>
    </section>
  );
}

export default Hook2;

const Option =({text,classname})=>{
    return (
      <div className="w-1/3 text-center">
        <div className={`h-86 w-full ${classname} rounded-2xl`}></div>
        <h4 className="text-xl font-semibold mt-4">{text}</h4>
        <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, omnis.</p>
      </div>
    );
}

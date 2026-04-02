import React from "react";

function Contact() {
  return (
    <section className="h-screen flex flex-col gap-4 my-30">
      <div className="w-full h-1/2 bg-blue-950 rounded-2xl flex items-center justify-end">
        <div className="px-4 w-1/2 text-white">
          <h2 className="text-4xl font-semibold text-white">
            Ready to run you business{" "}
            <span className=" !text-green-500">Better</span> with Us
          </h2>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
          <button className="px-8 py-2 bg-blue-400 text-white text-lg rounded-3xl">
            Get Started
          </button>
        </div>
      </div>
      <div className="h-1/2 w-full flex gap-4">
        <div className="w-1/2 h-full bg-lime-400 text-white rounded-2xl px-5 flex justify-center flex-col gap-2">
          <h4 className="text-4xl">Live Chat</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsam.</p>
          <button className="border-2 w-fit rounded-3xl border-white text-white bg-transparent px-8 py-2 ">
            Book A Call
          </button>
        </div>
        <div className="w-1/2 h-full bg-rose-400 rounded-2xl px-5 flex justify-center flex-col gap-2">
          <h4 className="text-4xl">Watch a Demo</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ipsam.</p>
          <button className="border-2 w-fit rounded-3xl border-black  bg-transparent px-8 py-2 ">
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;

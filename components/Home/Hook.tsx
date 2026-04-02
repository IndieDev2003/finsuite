import React from "react";

function Hook() {
  return (
    <section className="h-screen w-full my-10 py-10 bg-gray-100 rounded-3xl">
      <h2 className="font-bold text-4xl md:text-5xl text-center">
        <span>Empower</span>Your Financial <br />
        Future With Us
      </h2>
      <div className="w-full h-full md:h-[80vh] flex flex-col md:flex-row">
        <div className="w-full h-3/5 md:h-full md:w-1/2 p-4 md:p-10">
          <div className="h-full w-full bg-gray-300 rounded-3xl"></div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items- text-center md:text-left">
          <h3 className="font-bold text-4xl md:text-5xl">
            Comprehensive
            <br />
            Fincancial <span>Analytics</span> <br /> Dashboard
          </h3>
          <p className="text-gray-600 text-lg">
            Gain real-time visibility into your financial performance with
            intuitive dashboard
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hook;

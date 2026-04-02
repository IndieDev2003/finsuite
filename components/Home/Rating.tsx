import React from "react";

function Rating() {
  return (
    <section className=" md:h-24 w-full flex flex-col items-center justify-center ">
      <div className="flex flex-col md:flex-row  gap-10">
        <div className="flex flex-col  items-center justify-center">
            <h3 className="text-2xl">Chrome Store</h3>
            <p>4.5 ⭐</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl">Trustpilot</h3>
            <p>4.5 ⭐</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl">Product Hunt</h3>
            <p>4.5 ⭐</p>
        </div>
      </div>
    </section>
  );
}

export default Rating;

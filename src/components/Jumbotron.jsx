import React from "react";

export function Jumbotron() {
  return (
    <>
      <main className="bg-green">
        <div className="text-center lg:w-9/12 w-12/12 pt-24 pb-40 mx-auto">
          <h1 className="text-white lg:text-7xl sm:text-5xl  text-3xl font-bold px-5">
            Jämför studentboenden enklare än någonsin
          </h1>
          <p className="mt-3 md:text-2xl text-lg text-white px-5">
            Hitta, jämför och betygsätt studentboenden.
          </p>
        </div>
      </main>
    </>
  );
}

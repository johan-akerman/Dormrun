import React, { useState } from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import RentalCard from "../components/RentalCard";
import { InfoBar } from "../components/InfoBar";
import lundData from "../data/lund.json";
import { useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let tmp = lundData;
    tmp.sort((a, b) => b.averageRating - a.averageRating);
    setData(tmp);
  }, []);

  return (
    <>
      <InfoBar />
      <Navbar />
      <Jumbotron />

      <div className="bg-grayish">
        <div className="md:w-6/12 w-11/12 mx-auto h-full pt-8 md:pb-28 pb-12">
          <h1 className="text-center text-black lg:text-4xl text-3xl sm:mt-5 font-bold pb-8">
            Jämför {data.length} studentboenden i Lund
          </h1>

          <div className="grid gap-3">
            {data.map((property, i) => {
              return <RentalCard property={property} i={i} key={i} />;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

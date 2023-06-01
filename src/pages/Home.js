import React, { useState } from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import RentalCard from "../components/RentalCard";
import { InfoBar } from "../components/InfoBar";
import lundData from "../data/lund.json";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    let tmp = lundData;
    tmp.sort(function (a, b) {
      // Sort by average rating.
      if (a.averageRating > b.averageRating) return -1;
      if (a.averageRating < b.averageRating) return 1;

      // If the votes number is the same between both items, sort alphabetically
      if (a.reviews.length < b.reviews.length) return 1;
      if (a.reviews.length > b.reviews.length) return -1;
    });
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

          <div className="my-16 text-center">
            <h1 className="text-center text-black lg:text-4xl text-3xl sm:mt-5 font-bold">
              Saknar du ditt boende i listan?
            </h1>
            <p className="mt-3 md:text-xl text-lg px-5 mb-8">
              Skriv en review för ditt boende så lägger vi till det!
            </p>

            <Link
              to="/new-dorm"
              className="mt-6 px-5 py-2 border border-transparent font-medium rounded-md text-white bg-green text-lg transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg"
            >
              Lägg till boende
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

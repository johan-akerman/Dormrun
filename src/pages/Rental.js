import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import ReviewSummary from "../components/ReviewSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import data from "../data/lund.json";
import { useEffect } from "react";

export default function Rental() {
  const url = window.location.href;
  const id = url.split("/")[url.split("/").length - 1];
  const [property, setProperty] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let tmp = data.filter((prop) => prop.url === id);
    setProperty(tmp[0]);
  }, [data]);

  if (!property) {
    return (
      <>
        {" "}
        <Navbar />
        <div className="bg-grayish h-screen">
          <h1 className="text-center text-xl pt-20">Something went wrong!</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-grayish">
        <div className="md:w-10/12 w-11/12 mx-auto h-full pt-8 md:pb-28 pb-12 grid grid-cols-12 gap-3">
          <div className="col-span-12 md:mb-0 mb-6">
            <Link to="/" className="text-xl mr-4 font-medium">
              <FontAwesomeIcon icon={faChevronLeft} /> Gå tillbaka
            </Link>
          </div>
          <div className="md:col-span-4 col-span-12">
            <ReviewSummary property={property} />
            <br />
            <ReviewForm property={property} />
          </div>

          <div className="md:col-span-8 col-span-12">
            <div className="grid gap-3">
              {property.reviews.length === 0 ? (
                <div className="h-96 text-center px-5 pt-32 w-96 mx-auto">
                  <FontAwesomeIcon
                    icon={faBoxOpen}
                    className="text-7xl mb-3 text-gray-300"
                  />
                  <h1 className="text-center text-black text-3xl font-bold pb-2">
                    Det finns inga reviews för {property.title} än!
                  </h1>
                  <p>
                    Skriv en review och hjälp andra studenter att hitta sitt
                    drömboende.
                  </p>
                </div>
              ) : (
                property.reviews.map((review) => {
                  return <ReviewCard review={review} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

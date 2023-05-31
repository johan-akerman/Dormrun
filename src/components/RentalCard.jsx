import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export default function RentalCard({ property, i }) {
  return (
    <Link to={`/lund/${property.url}`}>
      <div className="transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg w-full bg-white rounded-2xl p-4 text-left">
        <div className="flex items-center text-left">
          <h1 className="font-bold text-lg mr-3">{i + 1}.</h1>
          <img
            className="w-16 h-16 rounded-full mr-4 bg-cover"
            src={property.thumbnail}
            alt="Preview"
          />
          <div>
            <p className="text-2xl font-semibold text-gray-900 leading-none">
              {property.title}
            </p>
            <p className="pt-1 text-sm flex">
              <StarRatings
                rating={property.averageRating}
                starRatedColor="#FACC13"
                starHoverColor="#FACC13"
                starDimension="20px"
                starSpacing="1px"
                numberOfStars={5}
                name="rating"
              />

              <p className="ml-2 mt-0.5 font-medium text-gray-400">
                <span className="font-bold">{property.averageRating} / 5</span>{" "}
                <span className="font-normal">({property.reviews.length})</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

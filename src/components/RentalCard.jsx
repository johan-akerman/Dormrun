import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
            <p className="pt-2 text-sm">
              <FontAwesomeIcon
                icon={faStar}
                className={`ml-0.5  ${
                  property.averageRating >= 1
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={`ml-0.5  ${
                  property.averageRating >= 2
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={`ml-0.5  ${
                  property.averageRating >= 3
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={`ml-0.5  ${
                  property.averageRating >= 4
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={`ml-0.5  ${
                  property.averageRating >= 5
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />{" "}
              <span className="ml-2 font-medium text-gray-400">
                {property.reviews.length} reviews
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

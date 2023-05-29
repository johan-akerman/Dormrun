import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ReviewCard({ review }) {
  return (
    <div className="transform ease-in duration-100 bg-white rounded-lg p-4 text-left">
      <div className="text-left">
        <div>
          <p className="pt-2 text-md">
            <span className="text-xl mr-4 font-medium">{review.name}</span>
            <FontAwesomeIcon
              icon={faStar}
              className={`ml-0.5  ${
                review.rating >= 1 ? "text-yellow-400" : "text-gray-300"
              }`}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`ml-0.5  ${
                review.rating >= 2 ? "text-yellow-400" : "text-gray-300"
              }`}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`ml-0.5  ${
                review.rating >= 3 ? "text-yellow-400" : "text-gray-300"
              }`}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`ml-0.5  ${
                review.rating >= 4 ? "text-yellow-400" : "text-gray-300"
              }`}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`ml-0.5  ${
                review.rating >= 5 ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          </p>
          <p>
            {review.date}, {review.type}
          </p>
        </div>
        <div className="mt-4 mb-4">
          <p className="text-md">{review.review}</p>
        </div>

        <div className="flex">
          {review.photos.map((photo) => {
            return (
              <img
                className="w-32 h-32 rounded-2xl mr-4 bg-cover"
                src={photo}
                alt="Preview"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";

import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="bg-green text-white text-center">
      <div className="mx-auto pt-20 pb-28 w-full text-center ">
        <Link className="text-4xl font-medium hover:opacity-60 italic" to="/">
          Dormrun
        </Link>
        <p className="text-md font-medium w-96 mx-auto text-center mt-2">
          Hitta, jämför och betygsätt studentboenden.
        </p>
      </div>
    </div>
  );
}

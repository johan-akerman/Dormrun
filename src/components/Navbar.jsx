import React from "react";

import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="bg-green w-full text-center px-5 py-6 mx-auto ">
      <Link className="text-4xl text-white font-medium italic" to="/">
        Dormrun
      </Link>
    </div>
  );
}

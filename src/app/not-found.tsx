import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="container mx-auto">
      <div className="min-w-scree min-h-[50vh] grid grid-cols-1 place-content-center">
        <div className="flex justify-center items-center">
          <h3 className="font-extrabold text-5xl lg:text-7xl px-3 border-r-2 border-tertiary">
            404
          </h3>
          <p className="text-xl px-3 font-medium">
            The page you are looking for is not found.
          </p>
        </div>
        <Link
          href="/"
          className="w-fit mx-auto hover:underline hover:decoration-primary mt-6 hover:underline-offset-2"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

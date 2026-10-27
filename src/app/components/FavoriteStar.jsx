"use client";

import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const FavoriteStar = ({ position, starSize, bgSize }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={handleToggle}
      className={`absolute bg-[#FEFEFE]/25 backdrop-blur-2xl rounded-full flex items-center justify-center ${position} ${bgSize}`}
    >
      {isFavorite ? <FaStar className={`text-white ${starSize}`} /> : <FaRegStar className={`text-white ${starSize}`} />}
    </div>
  );
};

export default FavoriteStar;

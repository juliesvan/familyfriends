"use client";

import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { addFavorite, removeFavorite } from "../actions";

const FavoriteStar = ({ position, starSize, bgSize, imageID, isFavorite, favoriteId }) => {
  const [isFavoriteClient, setIsFavoriteClient] = useState(isFavorite);
  const [favoriteIdClient, setFavoriteIdClient] = useState(favoriteId);

  const handleToggle = async () => {
    if (isFavoriteClient) {
      await removeFavorite(favoriteIdClient);
    } else {
      const favorite = await addFavorite(imageID);
      setFavoriteIdClient(favorite.id);
    }

    setIsFavoriteClient(!isFavoriteClient);
  };

  return (
    <div
      onClick={handleToggle}
      className={`absolute bg-[#FEFEFE]/25 backdrop-blur-2xl rounded-full flex items-center justify-center ${position} ${bgSize}`}
    >
      {isFavoriteClient ? <FaStar className={`text-white ${starSize}`} /> : <FaRegStar className={`text-white ${starSize}`} />}
    </div>
  );
};

export default FavoriteStar;

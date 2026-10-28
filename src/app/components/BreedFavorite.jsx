import Image from "next/image";
import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";
import FavoriteStar from "./FavoriteStar";

const BreedFavorite = ({ image, breedName, imageID, isFavorite, favoriteId }) => {
  return (
    <section className="relative">
      <Image loading="eager" src={image} alt="Image of dog" width={200} height={200} className="w-full aspect-340/360 object-cover rounded-4xl" />

      <Link href="/" className="absolute top-6 left-6 w-8 h-8 bg-[#F8F8F8] rounded-full flex items-center justify-center">
        <SlArrowLeft className="text-[#242424] w-3 h-3 stroke-50" />
      </Link>

      <FavoriteStar
        position="top-6 right-6"
        starSize="w-4.5 h-4.5"
        bgSize="w-8 h-8"
        imageID={imageID}
        isFavorite={isFavorite}
        favoriteId={favoriteId}
      />

      <div className="absolute bottom-6 left-6 flex gap-2 rounded-2xl bg-white/20 backdrop-blur-[30px] p-2">
        <div>
          <Image src={image} alt="Image of dog" width={50} height={50} className="w-8 h-8 rounded-lg object-cover" />
        </div>

        <p className="text-white/90">{breedName}</p>
      </div>
    </section>
  );
};

export default BreedFavorite;

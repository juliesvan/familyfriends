import Image from "next/image";
import Link from "next/link";
import FavoriteStar from "./FavoriteStar";

const BreedCard = ({ id, image, breedName, country }) => {
  return (
    <article className="relative rounded-2xl bg-white shadow-[0_4px_16px_rgba(19,21,68,0.06)]">
      <Link href={`/detailview/${id}`}>
        <Image src={image} alt="Dummy Dog" width={200} height={200} className="w-full h-28 object-cover rounded-2xl" />
      </Link>
      <FavoriteStar position="top-2 right-2" starSize="w-3.5 h-3.5" bgSize="w-6 h-6" />

      <Link href={`/detailview/${id}`}>
        <div className="px-3 pb-4">
          <h1 className="text-[#333] text-[0.9375rem] font-bold mt-2">{breedName}</h1>
          <p className="text-[#333] text-xs font-medium opacity-40 mt-1">{country}</p>
        </div>
      </Link>
    </article>
  );
};

export default BreedCard;

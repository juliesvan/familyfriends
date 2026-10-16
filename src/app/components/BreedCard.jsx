import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const BreedCard = ({ breedName, country }) => {
  return (
    <article className="relative rounded-2xl bg-white shadow-[0_4px_16px_rgba(19,21,68,0.06)]">
      <Image src="/dummydog.jpg" alt="Dummy Dog" width={200} height={200} className="w-full h-28 object-cover rounded-2xl" />
      <div className="absolute top-2 right-2 w-6 h-6 bg-[#FEFEFE]/25 backdrop-blur-2xl rounded-full flex items-center justify-center">
        <FaRegStar className="text-white w-3.5 h-3.5" />
      </div>

      <div className="px-3 pb-4">
        <h1 className="text-[#333] text-[0.9375rem] font-bold mt-2">{breedName}</h1>
        <p className="text-[#333] text-xs font-medium opacity-40 mt-1">{country}</p>
      </div>
    </article>
  );
};

export default BreedCard;

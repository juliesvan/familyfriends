import Image from "next/image";
import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa";

const BreedFavorite = ({ breedName }) => {
  return (
    <section className="relative">
      <Image src="/dummydog.jpg" alt="Dummy Dog" width={200} height={200} className="w-full aspect-[340/360px] object-cover rounded-4xl" />

      <Link href="/" className="absolute top-6 left-6 w-8 h-8 bg-[#F8F8F8] rounded-full flex items-center justify-center">
        <SlArrowLeft className="text-[#242424] w-3 h-3 stroke-50" />
      </Link>

      <div className="absolute top-6 right-6 w-8 h-8 bg-[#FEFEFE]/25 backdrop-blur-2xl rounded-full flex items-center justify-center">
        <FaRegStar className="text-white w-4.5 h-4.5" />
      </div>

      <div className="absolute bottom-6 left-6 flex gap-2 rounded-2xl bg-white/20 backdrop-blur-[30px] p-2">
        <div className="">
          <Image src="/dummydog.jpg" alt="Dummy Dog" width={50} height={50} className="w-8 h-8 rounded-lg object-cover" />
        </div>

        <p className="text-white/90">{breedName}</p>
      </div>
    </section>
  );
};

export default BreedFavorite;

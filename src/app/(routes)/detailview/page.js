import Link from "next/link";
import BreedFavorite from "@/app/components/BreedFavorite";
import Traits from "@/app/components/Traits";
import BreedDesc from "@/app/components/BreedDesc";

const DetailView = () => {
  return (
    <>
      <BreedFavorite breedName="Breed Name" />

      <Traits breedName="Breed Name" breedTrait="Lorem" />

      <BreedDesc
        breedDescription="Small, sturdy toy breed with a distinctive monkey-like expression and shaggy, wiry coat. Known for its confident, terrier-like personality despite its small size."
        breedHistory="Originating in 17th-century Germany, bred down from larger terriers to be skilled ratters in homes, kitchens and stables. Refined in Munich and Berlin, recognized by AKC in 1936. Name translates to 'monkey-like terrier'"
      />
    </>
  );
};

export default DetailView;

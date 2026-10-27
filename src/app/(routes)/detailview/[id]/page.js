import BreedFavorite from "@/app/components/BreedFavorite";
import Traits from "@/app/components/Traits";
import BreedDesc from "@/app/components/BreedDesc";

const DetailView = async ({ params }) => {
  const { id } = await params;
  const breed = await getID(id);
  console.log(breed);
  return (
    <>
      <BreedFavorite image={breed.image.url} breedName={breed.name} />

      <Traits breedName={breed.name} breedTrait={breed.temperament} />

      <BreedDesc breedDescription={breed.description} breedHistory={breed.history} />
    </>
  );
};

export default DetailView;

const getID = async (id) => {
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const breedID = await response.json();

  return breedID;
};

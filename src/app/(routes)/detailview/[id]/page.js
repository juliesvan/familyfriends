import BreedFavorite from "@/app/components/BreedFavorite";
import Traits from "@/app/components/Traits";
import BreedDesc from "@/app/components/BreedDesc";

const DetailView = async ({ params }) => {
  const { id } = await params;
  const breed = await getID(id);
  const favorites = await getFavorites();
  const isFavorite = favorites.some((favorite) => favorite.image_id === breed.image.id);
  const favorite = favorites.find((favorite) => favorite.image_id === breed.image.id);

  return (
    <>
      <BreedFavorite image={breed.image.url} breedName={breed.name} imageID={breed.image.id} isFavorite={isFavorite} favoriteId={favorite?.id} />

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

const getFavorites = async () => {
  const response = await fetch("https://api.thedogapi.com/v1/favourites", {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const favorites = await response.json();

  return favorites;
};

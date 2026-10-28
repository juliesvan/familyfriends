import { Suspense } from "react";
import SearchBar from "./components/SearchBar";
import BreedCard from "./components/BreedCard";

export default async function ListView({ searchParams }) {
  const { search } = await searchParams;

  return (
    <>
      <SearchBar />

      <Suspense fallback={<p className="mt-6 font-bold">Loading dogs...</p>}>
        <BreedList search={search} />
      </Suspense>
    </>
  );
}

async function BreedList({ search }) {
  const favorites = await getFavorites();
  const breeds = await getBreeds(search, favorites);
  return <article className="grid grid-cols-2 gap-x-4 gap-y-6 mt-6">{breeds}</article>;
  s;
}

const getBreeds = async (search, favorites) => {
  const response = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const breeds = await response.json();
  const searchInput = search || "";

  const filteredBreeds = breeds.filter(
    (breed) =>
      breed.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      breed.temperament?.toLowerCase().includes(searchInput.toLowerCase()) ||
      breed.origin?.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return filteredBreeds.map((breed) => {
    const isFavorite = favorites.some((favorite) => favorite.image_id === breed.image.id);
    const favorite = favorites.find((favorite) => favorite.image_id === breed.image.id);
    return (
      <BreedCard
        key={breed.id}
        id={breed.id}
        imageID={breed.image.id}
        image={breed.image.url}
        breedName={breed.name}
        country={breed.origin}
        isFavorite={isFavorite}
        favoriteId={favorite?.id}
      />
    );
  });
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

import SearchBar from "./components/SearchBar";
import BreedCard from "./components/BreedCard";

export default async function ListView({ searchParams }) {
  const { search } = await searchParams;
  const breeds = await getBreeds(search);

  return (
    <>
      <SearchBar />

      <article className="grid grid-cols-2 gap-x-4 gap-y-6 mt-6">{breeds}</article>
    </>
  );
}

const getBreeds = async (search) => {
  const response = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const breeds = await response.json();
  const searchInput = search || "";

  const filteredBreeds = breeds.filter((breed) => breed.name.toLowerCase().includes(searchInput.toLowerCase()));

  return filteredBreeds.map((breed) => (
    <BreedCard key={breed.id} id={breed.id} image={breed.image.url} breedName={breed.name} country={breed.origin} />
  ));
};

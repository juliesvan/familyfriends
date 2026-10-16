import Link from "next/link";
import SearchBar from "./components/SearchBar";
import BreedCard from "./components/BreedCard";

export default function ListView() {
  return (
    <>
      <SearchBar />

      <article className="grid grid-cols-2 gap-x-4 gap-y-6 mt-6">
        <Link href="/detailview">
          <BreedCard breedName="Breed Name" country="Country" />
        </Link>
        <Link href="/detailview">
          <BreedCard breedName="Breed Name" country="Country" />
        </Link>
        <Link href="/detailview">
          <BreedCard breedName="Breed Name" country="Country" />
        </Link>
        <Link href="/detailview">
          <BreedCard breedName="Breed Name" country="Country" />
        </Link>
        <Link href="/detailview">
          <BreedCard breedName="Breed Name" country="Country" />
        </Link>
        <Link href="/detailview">
          <BreedCard breedName="Breed Name" country="Country" />
        </Link>
      </article>
    </>
  );
}

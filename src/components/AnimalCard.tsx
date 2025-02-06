import { Animal } from "../data";
import AnimalFunFactsList from "./AnimalFunFactsList";
import AnimalInfo from "./AnimalInfo";

function AnimalCard(animal: Animal) {
  return (
    <article className="grid grid-rows-2 items-center gap-3 rounded-lg border border-gray-500 text-gray-300 xl:grid-rows-3">
      <AnimalInfo {...animal} />
      <AnimalFunFactsList funFacts={animal.funFacts} />
    </article>
  );
}

export default AnimalCard;

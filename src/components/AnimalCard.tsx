import { Animal } from "../data";
import AnimalFunFactsList from "./AnimalFunFactsList";

function AnimalCard({
  name,
  species,
  habitat,
  lifespan,
  diet,
  emoji,
  funFacts,
}: Animal) {
  return (
    <article className="flex flex-col items-center gap-3 rounded-lg border border-gray-500 p-8 text-gray-300">
      <h3 className="text-center text-4xl font-bold tracking-wider">
        <span className="mb-2 block text-8xl">{emoji}</span>
        {name}
      </h3>
      <ul className="my-3 flex flex-col gap-2 text-center text-lg font-bold">
        <li>{species}</li>
        <li>{habitat}</li>
        <li>{diet}</li>
      </ul>
      <p className="text-lg">{lifespan} years</p>
      <AnimalFunFactsList funFacts={funFacts} />
    </article>
  );
}

export default AnimalCard;

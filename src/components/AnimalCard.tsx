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
    <article className="grid grid-rows-2 items-center gap-3 rounded-lg border border-gray-500 text-gray-300 xl:grid-rows-3">
      <div className="h-full grid-rows-subgrid items-center p-8 xl:row-span-2">
        <h3 className="text-center text-4xl font-bold tracking-wider">
          <span className="mb-2 block text-8xl">{emoji}</span>
          {name}
        </h3>
        <ul className="my-3 flex flex-col gap-2 text-center text-lg font-bold">
          <li>{species}</li>
          <li>{habitat}</li>
          <li>{diet}</li>
        </ul>
        <p className="text-center text-lg">{lifespan} years</p>
      </div>
      <AnimalFunFactsList funFacts={funFacts} />
    </article>
  );
}

export default AnimalCard;

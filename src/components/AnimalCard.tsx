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
    <article>
      <h3>
        <span>{emoji}</span>
        {name}
      </h3>
      <ul>
        <li>{species}</li>
        <li>{habitat}</li>
        <li>{diet}</li>
      </ul>
      <p>{lifespan}</p>
      <AnimalFunFactsList funFacts={funFacts} />
    </article>
  );
}

export default AnimalCard;

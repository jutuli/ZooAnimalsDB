import animals from "../data";
import AnimalCard from "./AnimalCard";

// mit dem Spread-Operator können die Props direkt an den Component "AnimalCard" übergeben werden, da der Component die gleichen Prop-Namen hat
// es ist also nicht notwendig es so zu schreiben: name = {animal.name}, species ={animal.species} etc.

function AnimalGrid() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      {animals.map((animal) => (
        <AnimalCard key={animal.name} {...animal} />
      ))}
    </section>
  );
}

export default AnimalGrid;

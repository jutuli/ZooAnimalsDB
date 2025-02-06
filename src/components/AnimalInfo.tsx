type AnimalInfoProps = {
  emoji: string;
  name: string;
  species: string;
  habitat: string;
  diet: string;
  lifespan: number;
};

function AnimalInfo({
  emoji,
  name,
  species,
  habitat,
  diet,
  lifespan,
}: AnimalInfoProps) {
  return (
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
  );
}

export default AnimalInfo;

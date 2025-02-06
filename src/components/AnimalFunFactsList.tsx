type FunFactsProps = {
  funFacts: string[];
};

function AnimalFunFactsList({ funFacts }: FunFactsProps) {
  return (
    <ul className="h-full grid-rows-subgrid bg-slate-700 py-4 pr-6 pl-12">
      {funFacts.map((fact, i) => (
        <li className="list-disc text-lg" key={i}>
          {fact}
        </li>
      ))}
    </ul>
  );
}

export default AnimalFunFactsList;

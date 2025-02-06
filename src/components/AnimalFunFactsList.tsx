type FunFactsProps = {
  funFacts: string[];
};

function AnimalFunFactsList({ funFacts }: FunFactsProps) {
  return (
    <ul>
      {funFacts.map((fact, i) => (
        <li key={i}>{fact}</li>
      ))}
    </ul>
  );
}

export default AnimalFunFactsList;

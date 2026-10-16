const BreedDesc = ({ breedDescription, breedHistory }) => {
  return (
    <section className="max-w-[95%]">
      <article className="mt-4">
        <h2 className="font-medium text-[0.8125rem] opacity-50">Breed Description</h2>
        <p className="font-medium text-[1rem] opacity-75">{breedDescription}</p>
      </article>

      <article className="mt-4">
        <h2 className="font-medium text-[0.8125rem] opacity-50">Breed History</h2>
        <p className="font-medium text-[1rem] opacity-75">{breedHistory}</p>
      </article>
    </section>
  );
};

export default BreedDesc;

const Traits = ({ breedName, breedTrait }) => {
  return (
    <section className="mt-3">
      <h1 className="text-[#333] text-[1.75rem] font-bold">{breedName}</h1>
      <article className="flex gap-2 font-medium text-[0.8125rem] mt-4">
        <div className="bg-[#ACD7FF] text-[#6B8B42] p-2 px-4 rounded-[20px]">{breedTrait}</div>
        <div className="bg-[#EDA8B3] text-[#6B8B42] p-2 px-4 rounded-[20px]">{breedTrait}</div>
        <div className="bg-[#C5E59C] text-[#6B8B42] p-2 px-4 rounded-[20px]">{breedTrait}</div>
        <div className="bg-[#F1E689] text-[#978C2F] p-2 px-4 rounded-[20px]">{breedTrait}</div>
      </article>
    </section>
  );
};

export default Traits;

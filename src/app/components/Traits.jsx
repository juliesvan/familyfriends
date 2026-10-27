const Traits = ({ breedName, breedTrait }) => {
  const traits = breedTrait.split(",");
  const bgColors = ["bg-[#ACD7FF]", "bg-[#EDA8B3]", "bg-[#C5E59C]", "bg-[#F1E689]"];
  const textColors = ["text-[#6B8B42]", "text-[#6B8B42]", "text-[#6B8B42]", "text-[#978C2F]"];
  return (
    <section className="mt-3">
      <h1 className="text-[#333] text-[1.75rem] font-bold">{breedName}</h1>
      <article className="flex flex-wrap gap-2 font-medium text-[0.8125rem] mt-4">
        {traits.map((trait, index) => (
          <div
            key={trait}
            className={`${bgColors[index % bgColors.length]} ${textColors[index % textColors.length]} capitalize p-2 px-4 rounded-[20px]`}
          >
            {trait.trim()}
          </div>
        ))}
      </article>
    </section>
  );
};

export default Traits;

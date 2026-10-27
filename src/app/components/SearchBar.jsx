import Form from "next/form";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <Form action="/" className="flex items-center gap-3 mt-4">
      <button type="submit" className="bg-[#F2968F] w-10 h-10 rounded-full flex justify-center items-center shrink-0">
        <IoSearch className="text-white text-xl" />
      </button>
      <input
        type="text"
        name="search"
        placeholder="search breeds"
        className="bg-transparent text-[#333] font-medium border border-[#CACACD] p-2 pl-4 rounded-full w-full  placeholder:opacity-40"
      />
    </Form>
  );
};

export default SearchBar;

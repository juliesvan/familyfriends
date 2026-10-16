import Logo from "./Logo";
import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <Logo />
      <FiBell className="text-[#333] text-2xl" />
    </header>
  );
};

export default Header;

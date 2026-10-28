"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 w-full h-19.5 flex justify-around p-4 rounded-t-4xl bg-white/20 backdrop-blur-[30px]">
      <Link href="/">
        <LuHouse className={`w-6 h-6 ${pathname === "/" ? "text-[#F2968F]" : "text-[#ACACAC]"}`} />
      </Link>

      <Link href="/detailview">
        <FaRegStar className={`w-6 h-6 ${pathname.startsWith("/detailview") ? "text-[#F2968F]" : "text-[#ACACAC]"}`} />
      </Link>

      <Link href="#">
        <FiMessageCircle className="text-[#ACACAC] w-6 h-6" />
      </Link>

      <Link href="#">
        <FiUser className="text-[#ACACAC] w-6 h-6" />
      </Link>
    </nav>
  );
};

export default Navigation;

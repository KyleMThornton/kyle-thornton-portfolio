import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiSupabase,
  SiPrisma,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Tech() {
  return (
    <div className="flex flex-col md:flex-row container items-center p-4 pb-20">
      <h2 className="text-2xl">My favorite tech:</h2>
      <div className="flex flex-row items-center">
        <TbBrandNextjs className="text-2xl mx-1" />
        <FaReact className="text-2xl mx-1" />
        <SiTailwindcss className="text-2xl mx-1" />
        <BiLogoPostgresql className="text-2xl mx-1" />
        <SiTypescript className="text-2xl mx-1" />
        <SiNodedotjs className="text-2xl mx-1" />
        <SiSupabase className="text-2xl mx-1" />
        <SiPrisma className="text-2xl mx-1" />
      </div>
    </div>
  );
}

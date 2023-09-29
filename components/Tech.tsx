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
    <div className="flex flex-col md:flex-row container justify-items-center p-4">
      <h2 className="text-2xl md:text-3xl">My favorite tech:</h2>
      <div className="flex flex-row items-center">
        <TbBrandNextjs className="text-3xl mx-1" />
        <FaReact className="text-3xl mx-1" />
        <SiTailwindcss className="text-3xl mx-1" />
        <BiLogoPostgresql className="text-3xl mx-1" />
        <SiTypescript className="text-3xl mx-1" />
        <SiNodedotjs className="text-3xl mx-1" />
        <SiSupabase className="text-3xl mx-1" />
        <SiPrisma className="text-3xl mx-1" />
      </div>
    </div>
  );
}

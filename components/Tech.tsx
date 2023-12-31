"use client"

import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiSupabase,
  SiPrisma,
  SiSvelte,
  SiRedux
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { Tooltip } from 'react-tooltip';


export default function Tech() {
  return (
    <div className="flex flex-col container justify-items-center p-4">
      <div className="flex flex-row items-center pb-2">
        <h2 className="text-xl md:text-2xl">My favorite tech</h2>
        <h3 className="font-light pl-5">Hover for more info</h3>
      </div>
      <div className="flex flex-row items-center flex-wrap">
        <a className="react"><FaReact className="text-3xl mx-1" /></a>
        <Tooltip anchorSelect=".react" place="bottom">
            React
        </Tooltip>
        <a className="nextjs"><TbBrandNextjs className="text-3xl mx-1" /></a>
        <Tooltip anchorSelect=".nextjs" place="bottom">
            NextJS
        </Tooltip>
        <a className="svelte"><SiSvelte className="text-3xl mx-1" /></a>
        <Tooltip anchorSelect=".svelte" place="bottom">
            Svelte
        </Tooltip>
        <a className="typescript"><SiTypescript className="text-3xl mx-1" /></a>
        <Tooltip anchorSelect=".typescript" place="bottom">
            TypeScript
        </Tooltip>
        <a className="tailwind"><SiTailwindcss className="text-3xl mx-1" /></a>
        <Tooltip anchorSelect=".tailwind" place="bottom">
            Tailwind CSS
        </Tooltip>
        <a className="redux"><SiRedux className="text-3xl mx-1" /></a>
        <Tooltip anchorSelect=".redux" place="bottom">
            Redux
        </Tooltip>
        <a className="node"><SiNodedotjs className="text-3xl mx-1" /></a>
        <Tooltip anchorSelect=".node" place="bottom">
            NodeJS
        </Tooltip>
        <a className="postgres"><BiLogoPostgresql className="text-3xl mx-1" /></a>
        <Tooltip anchorSelect=".postgres" place="bottom">
            PostgreSQL
        </Tooltip>
        <a className="supabase"><SiSupabase className="text-3xl mx-1" /></a>
        <Tooltip anchorSelect=".supabase" place="bottom">
            Supabase
        </Tooltip>
      </div>
    </div>
  );
}

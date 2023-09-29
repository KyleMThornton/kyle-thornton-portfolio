import {TbBrandNextjs} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import {SiTailwindcss, SiTypescript, SiNodedotjs, SiSupabase, SiPrisma} from 'react-icons/si';
import {BiLogoPostgresql} from 'react-icons/bi';

export default function Tech() {
    return (
        <div className="flex justify-start container p-4">
            <h2>My favorite tech:</h2>
            <TbBrandNextjs />
            <FaReact />
            <SiTailwindcss />
            <BiLogoPostgresql />
            <SiTypescript />
            <SiNodedotjs />
            <SiSupabase />
            <SiPrisma />
        </div>
    )
}
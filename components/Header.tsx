import HeaderSub from "./HeaderSub";
import HeaderText from "./HeaderText";
import NavBar from "./NavBar";
import Tech from "./Tech";

export default function Header() {
    return (
    <div className="min-h-screen sm:min-h-0 pb-36">
        <NavBar />
        <HeaderText />
        <HeaderSub />
        <Tech />
    </div>
    )
}
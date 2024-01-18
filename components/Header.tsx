import HeaderSub from "./HeaderSub";
import HeaderText from "./HeaderText";
import NavBar from "./NavBar";
import NewNavBar from "./NewNavBar";
import Tech from "./Tech";

export default function Header() {
  return (
    <div className="min-h-screen sm:min-h-0 pb-36">
      <NewNavBar />
      {/* <NavBar /> */}
      <HeaderText />
      <div className="container flex-col">
        <HeaderSub />
        <Tech />
      </div>
    </div>
  );
}

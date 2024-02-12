import Link from "next/link";
import Logo from "../logo";

function Header() {
  return (
    <div className="w-full h-[70px] flex items-stretch justify-between pr-4 shadow shadow-gray-200/10 fixed bg-white">
      <div className="flex items-center">
        <Link href="/">
          <Logo width={120} height={54} />
        </Link>
      </div>
    </div>
  );
}

export default Header;

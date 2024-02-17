import Link from "next/link";
import Logo from "../logo/index";

import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
// import ConvertComponent from "../temperature";

function Header() {
  return (
    <div className="w-full h-[90px] fixed flex justify-between px-4 bg-white">
      <Link href="/" className="flex items-center justify-center">
        <Logo
          width={130}
          height={25}
          textSize={22}
          comaSize={5}
          logoLayout
          sloganLayout
        />
      </Link>
      <div className="flex gap-1">
        <Link
          href="/dashboard"
          className="flex items-center justify-center text-black"
        >
          <button
            className="flex items-center justify-center px-8 rounded-lg text-green-800 text-lg hover:font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            type="button"
          >
            <MdDashboard className="mr-1 text-lg" /> Dashboard
          </button>
        </Link>
        <Link
          href="/users"
          className="flex items-center justify-center text-black mr-6"
        >
          <button
            className="flex items-center justify-center px-8 rounded-lg text-green-800 text-lg hover:font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            type="button"
          >
            <HiUsers className="mr-1 text-lg" /> Users
          </button>
        </Link>
      </div>
      {/* <ConvertComponent /> */}
    </div>
  );
}

export default Header;

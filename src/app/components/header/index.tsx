import Link from "next/link";
import Logo from "../logo/index";
// import ConvertComponent from "../temperature";

function Header() {
  return (
    <div className="w-full h-[70px] flex items-stretch justify-between pr-4 bg-white">
      <div className="flex items-center">
        <Link href="/">
          <Logo width={160} height={40} logoLayout={true} textSize="20px" comaSize="5px" />
        </Link>
        {/* <ConvertComponent /> */}
      </div>
    </div>
  );
}

export default Header;

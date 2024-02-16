import Link from "next/link";
import Logo from "../logo/index";
// import ConvertComponent from "../temperature";

function Header() {
  return (
    <div className="w-full fixed h-[70px] flex items-stretch justify-between px-4 bg-transparent">
        <Link href="/" className="flex items-start justify-center mt-4">
          <Logo width={160} height={32} textSize={29} comaSize={5} logoLayout sloganLayout />
        </Link>
        {/* <ConvertComponent /> */}
    </div>
  );
}

export default Header;

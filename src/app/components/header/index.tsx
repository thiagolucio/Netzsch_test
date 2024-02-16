import Link from "next/link";
import Logo from "../logo/index";
// import ConvertComponent from "../temperature";

function Header() {
  return (
    <div className="w-full h-[70px] flex items-stretch justify-between px-4 bg-white">
        <Link href="/" className="flex items-start justify-center mt-4">
          <Logo width={160} height={32} logoLayout={true} textSize={29} comaSize={5} sloganLayout={true} />
        </Link>
        {/* <ConvertComponent /> */}
    </div>
  );
}

export default Header;

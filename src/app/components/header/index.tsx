import Link from "next/link";
import Logo from "../logo/index";
// import ConvertComponent from "../temperature";

function Header() {
  return (
    <div className="w-full h-[100px] fixed flex justify-between px-4 bg-white">
        <Link href="/" className="flex items-start justify-center mt-4">
          <Logo width={160} height={32} textSize={29} comaSize={5} logoLayout sloganLayout />
        </Link>
        {/* <ConvertComponent /> */}
    </div>
  );
}

export default Header;

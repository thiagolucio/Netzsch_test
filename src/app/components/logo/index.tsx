import Image from "next/image";

function Logo({ width, height }: LogoProps) {
  const logoStyle = {
    width: width ? `${width}px` : "auto",
    height: height ? `${height}px` : "auto",
  };

  return (
    <div className="w-full justify-center flex flex-col items-center px-3">
      <Image
        src="/logo.svg"
        alt="Netzsch Logo"
        title="Netzsch Logo"
        width={logoStyle.width ? width : 128}
        height={logoStyle.height ? height : 54}
        priority
      />
    </div>
  );
}

export default Logo;

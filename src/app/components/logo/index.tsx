import Image from "next/image";

function Logo({ logoLayout, width, height, textSize, comaSize }: LogoProps) {
  const logoStyle = {
    width: width ? `${width}px` : "auto",
    height: height ? `${height}px` : "auto",
  };

  return (
    <>
      {logoLayout ? (
        <div className={`flex flex-col items-center justify-center px-3`}>
          <Image
            src="/logoNoSlogan.svg"
            alt="Netzsch Logo"
            title="Netzsch Logo Vertical"
            width={width}
            height={height}
            style={logoStyle}
            priority
          />
          <div className={`inline-block slogan-font text-gray-950 font-light text-[${textSize}px]`}>
            Proven Excellence<b className={`text-green-700 text-[${comaSize}px] mb-0`}>&#9209;</b>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-start items-center gap-2 px-3">
          <Image
            src="/logoNoSlogan.svg"
            alt="Netzsch Logo"
            title="Netzsch Logo Horizontal"
            width={width}
            height={height}
            style={logoStyle}
            priority
          />
          <div className={`inline-block slogan-font text-gray-950 font-light text-[${textSize}px]`}>
            Proven Excellence<b className={`text-green-700 text-[${comaSize}px] mb-0`}>&#9209;</b>
          </div>
        </div>
      )}
    </>
  );
}

export default Logo;

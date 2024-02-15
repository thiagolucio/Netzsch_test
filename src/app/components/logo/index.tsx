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
          <span className={`slogan-font text-gray-950 font-light`} style={{fontSize: textSize}}>
            Proven Excellence<b className={`text-green-700 mb-0`} style={{fontSize: comaSize}}>&#9209;</b>
          </span>
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
        <span className={`slogan-font text-gray-950 font-light`} style={{fontSize: textSize}}>
            Proven Excellence<b className={`text-green-700 mb-0`} style={{fontSize: comaSize}}>&#9209;</b>
          </span>
        </div>
      )}
    </>
  );
}

export default Logo;

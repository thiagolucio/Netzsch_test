import Image from "next/image";

function Logo({ logoLayout, sloganLayout, width, height, textSize, comaSize }: LogoProps) {
  return (
    <>
      {logoLayout ? (
        <div className={`flex flex-col justify-start`}>
          <Image
            src="/logoNoSlogan.svg"
            alt="Netzsch Logo"
            title="Netzsch Logo Vertical"
            width={width ? width : 128}
            height={height? height : 40}
            priority
          />
          {sloganLayout && (
            <span className={`slogan-font text-gray-950 font-light`} style={{fontSize: textSize ? textSize : 10}}>
              Proven Excellence<b className={`text-green-700 mb-0`} style={{fontSize: comaSize}}>&#9209;</b>
            </span>            
          )}
        </div>
      ) : (
        <div className="flex justify-start items-center gap-2">
          <Image
            src="/logoNoSlogan.svg"
            alt="Netzsch Logo"
            title="Netzsch Logo Horizontal"
            width={width ? width : 128}
            height={height? height : 40}
            priority
          />
          {sloganLayout && (
            <span className={`slogan-font text-gray-950 font-light`} style={{fontSize: textSize ? textSize : 10}}>
              Proven Excellence<b className={`text-green-700 mb-0`} style={{fontSize: comaSize ? comaSize : 2}}>&#9209;</b>
            </span>            
          )}
        </div>
      )}
    </>
  );
}

export default Logo;

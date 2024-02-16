type LogoProps = {
    logoLayout?: boolean;
    sloganLayout?: boolean;
    width?: number;
    height?: number;
    textSize?: number;
    comaSize?: number;
}

type ButtonProps = {
    variant: "default" | "primary" | "success" | "alert" | "disabled" | "light";
    type: "button" | "submit" | "reset";
    children: React.ReactNode;
    onClick?: () => void;
  };
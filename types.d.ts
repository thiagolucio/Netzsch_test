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


// Interfaces
type User = {
    id: Key | number,
    username: string,
    password: string,
    avatar: string,
    email: string,
    first_name: string,
    last_name: string,
    gender: string,
    ip_address: string,
    cep: string
}

interface UserProps {
    id: Key | number,
    username: string,
    password: string,
    avatar: string,
    email: string,
    first_name: string,
    last_name: string,
    gender: string,
    ip_address: string,
    cep: string
}
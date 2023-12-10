import Image from "next/image";

const Logo = () => {
    return ( 
        <Image height={120} width={120} src="/logo.svg" alt="logo"/>
    );
}
 
export default Logo;
import Image from "next/image";
import logo from "@/public/logo.svg";

type Props = {
  size?: number;
};

const LoadingLogo = ({ size = 100 }: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={logo}
        width={size}
        height={size}
        alt="logo"
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default LoadingLogo;

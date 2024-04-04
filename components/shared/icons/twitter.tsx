import Xlogo from '../../../app/XLogo.svg';
import Image from "next/image";
export default function Twitter({ className }: { className?: string }) {
  return (
    <Image src={Xlogo} alt={"X-logo"} className={className} height={20} />
  );
}

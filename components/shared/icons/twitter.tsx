import Xlogo from '../../../app/twitter-x-seeklogo-3.svg';
import Image from "next/image";
export default function Twitter({ className }: { className?: string }) {
  return (
    <Image src={Xlogo} alt={"X logo"} className={className} height={20} />
  );
}

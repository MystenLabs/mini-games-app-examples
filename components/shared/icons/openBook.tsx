import openbook from 'public/BookOpen.svg';
import Image from "next/image";

export default function OpenBook({ className }: { className?: string }) {
    return (
        <Image src={openbook}
               className={className} alt={"Open book Icon"}
        />
    );
}

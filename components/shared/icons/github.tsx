import githubLogo from 'public/GithubLogo.svg';
import Image from "next/image";

export default function Github({ className }: { className?: string }) {
  return (
    <Image src={githubLogo}
      className={className} alt={"Github Logo"}
    />
  );
}

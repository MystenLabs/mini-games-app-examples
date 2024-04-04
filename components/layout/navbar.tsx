"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { Session } from "next-auth";
import suilogo from "../../app/sui_logo.svg";


export default function NavBar({ session }: { session: Session | null }) {
  const scrolled = useScroll(50);

  return (
    <>
        <div
            className={`fixed top-0 w-full flex justify-evenly ${
                scrolled
                    ? "border-b border-gray-200 bg-transparent/50 backdrop-blur-xl"
                    : "bg-white/0"
            } z-30 transition-all`}
        >
            <div className="mx-5 flex h-16 items-center justify-end text-white ">
                <span>The [mini games] are provided for testnet purposes only and do not involve real money or the opportunity to win real money.</span>
            </div>
        </div>
    </>
  );
}

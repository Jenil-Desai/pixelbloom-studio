"use client";
import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { HEADER_LINKS } from "../constants/headerLinks";
import Image from "next/image";
import { useAuth, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { isSignedIn } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center justify-around">
        <div className="flex items-center gap-2">
          <Image src={"/icons/icon-512.png"} width={45} height={45} alt="Icon" />
          <span className="text-xl font-bold text-black">PixelBloom Studio</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {HEADER_LINKS.map((headerLink, idx) => {
            return (
              <Link key={idx} href={headerLink.href} className="text-sm font-medium text-black/80 hover:text-black">
                {headerLink.title}
              </Link>
            );
          })}
        </nav>

        {isSignedIn ? (
          <UserButton />
        ) : (
          <div className="hidden md:flex items-center gap-4">
            <Button onClick={() => router.push("/sign-in")} variant="outline" size="sm" className="bg-transparent border-black/20 text-black hover:bg-black/10 hover:text-black">
              Log in
            </Button>
            <Button onClick={() => router.push("/sign-up")} size="sm" className="bg-gradient-to-r from-[#318BA9] to-[#E67E22] hover:from-[#2980B9] hover:to-[#D35400] text-white">
              Join as Artist
            </Button>
          </div>
        )}

        <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 p-4">
          <nav className="flex flex-col space-y-4">
            {HEADER_LINKS.map((headerLink, idx) => {
              return (
                <Link key={idx} href={headerLink.href} className="text-sm font-medium text-black/80 hover:text-black">
                  {headerLink.title}
                </Link>
              );
            })}
            {isSignedIn ? (
              <UserButton />
            ) : (
              <div className="flex flex-col space-y-2 pt-2">
                <Button onClick={() => router.push("/sign-in")} variant="outline" size="sm" className="w-full bg-transparent border-black/20 text-black hover:bg-black/10 hover:text-black">
                  Log in
                </Button>
                <Button onClick={() => router.push("/sign-up")} size="sm" className="w-full bg-gradient-to-r from-[#318BA9] to-[#E67E22] hover:from-[#2980B9] hover:to-[#D35400] text-white">
                  Join as Artist
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

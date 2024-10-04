import React from "react";
import LogoName from "./LogoName";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <main className="hidden lg:inline h-20 w-full py-5 px-14 border-b fixed top-0 z-10 bg-background">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="saturn"
            width={40}
            height={40}
            className="mr-2"
          />
          <LogoName />
        </Link>
        <ul className="flex items-center justify-between gap-6">
          <li className="hover:opacity-50 transition-opacity duration-300">
            <Link href="/">Produtos</Link>
          </li>

          <li className="hover:opacity-50 transition-opacity duration-300">
            <Link href="/">Soluções</Link>
          </li>

          <li className="hover:opacity-50 transition-opacity duration-300">
            <Link href="/">Customizações</Link>
          </li>

          <li className="hover:opacity-50 transition-opacity duration-300">
            <Link href="/">Preços</Link>
          </li>

          <li className="hover:opacity-50 transition-opacity duration-300">
            <Link href="/">Lançamentos</Link>
          </li>

          <li className="hover:opacity-50 transition-opacity duration-300">
            <Link href="/">Companhia</Link>
          </li>

          <li className="hover:opacity-50 transition-opacity duration-300">
            <Link href="/">Conferência</Link>
          </li>
        </ul>
        <ul className="flex items-center justify-between gap-6">
          <li className="hover:opacity-50 transition-opacity duration-300">
            <Link href="/">Obter em um toque</Link>
          </li>
          <li className="hover:opacity-50 transition-opacity duration-300">
            <Link href="/">Login</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Navbar;

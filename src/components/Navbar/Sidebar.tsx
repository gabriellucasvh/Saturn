import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import LogoName from "./LogoName";
import {
  BookCheck,
  Building2,
  CircleDollarSign,
  Package,
  PenLine,
  Rocket,
  TvMinimalPlay,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex items-center justify-between h-10 w-full py-10 px-5">
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="saturn" width={40} height={40} />
        <LogoName />
      </Link>
      <div className="">
        <Sheet>
          <SheetTrigger className="text-3xl">&#9776;</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex items-center justify-center">
                  <Image src="/logo.png" alt="saturn" width={40} height={40} />
                  <LogoName />
                </Link>
              </SheetTitle>
              <SheetDescription>
                Navegue pelas principais seções e funcionalidades do nosso
                sistema de forma rápida e intuitiva.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col mt-10">
              <ul className="flex flex-col items-start justify-between gap-6">
                <li className="active:text-purple-300 transition-opacity duration-300 w-full py-2">
                  <Link href="/" className="flex items-center">
                    <Package className="mr-2" size={18} /> Produtos
                  </Link>
                </li>

                <li className="active:text-purple-300 transition-opacity duration-300  w-full py-2">
                  <Link href="/" className="flex items-center">
                    <BookCheck className="mr-2" size={18} /> Soluções
                  </Link>
                </li>

                <li className="active:text-purple-300 transition-opacity duration-300  w-full py-2">
                  <Link href="/" className="flex items-center">
                    <PenLine className="mr-2" size={18} /> Customizações
                  </Link>
                </li>

                <li className="active:text-purple-300 transition-opacity duration-300  w-full py-2">
                  <Link href="/" className="flex items-center">
                    <CircleDollarSign className="mr-2" size={18} /> Preços
                  </Link>
                </li>

                <li className="active:text-purple-300 transition-opacity duration-300  w-full py-2">
                  <Link href="/" className="flex items-center">
                    <Rocket className="mr-2" size={18} /> Lançamentos
                  </Link>
                </li>

                <li className="active:text-purple-300 transition-opacity duration-300  w-full py-2">
                  <Link href="/" className="flex items-center">
                    <Building2 className="mr-2" size={18} /> Companhia
                  </Link>
                </li>

                <li className="active:text-purple-300 transition-opacity duration-300  w-full py-2">
                  <Link href="/" className="flex items-center">
                    <TvMinimalPlay className="mr-2" size={18} /> Conferência
                  </Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Sidebar;

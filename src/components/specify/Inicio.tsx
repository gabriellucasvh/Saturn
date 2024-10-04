import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRight } from "lucide-react";

const Inicio = () => {
  return (
    <main className="flex flex-col lg:flex-row justify-between items-center h-screen px-4 sm:px-6 lg:px-8">
      <div className="flex-1 flex flex-col justify-center lg:justify-start space-y-6 mb-20 lg:mb-44">
        <h1 className="text-4xl sm:text-6xl font-barlow lg:text-7xl pb-2 bg-gradient-to-r from-pink-500 via-blue-500 to-blue-100 bg-clip-text text-transparent inline-block">
          <AnimatedShinyText>Inteligência Poderosa.</AnimatedShinyText>
        </h1>
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-barlow">
          Soluções escaláveis.
        </h2>
        <p className="text-base sm:text-lg lg:text-xl">
          Transforme dados complexos em insights valiosos com nossa IA, criando
          soluções que se adaptam às suas necessidades e escalam com o seu
          crescimento.
        </p>
        <div className="w-fit">
          <Link href="/">
            <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
              Fale Conosco
            </ShineBorder>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end items-center mb-20 lg:mb-44">
        <Image src="/logo.png" alt="saturn" width={300} height={300} className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" />
      </div>

      <div className="w-full mt-8 lg:mt-0 text-center lg:w-1/2 lg:absolute lg:bottom-8">
        <p className="text-xs sm:text-sm text-white/60">
          Personalize nossa IA de texto como você preferir para o seu time.
          <Link href="/" className="font-bold text-white hover:text-purple-300 transition-colors duration-300">
            {" "}
            Fale como você quer que seja
            <ArrowRight className="inline ml-1 w-4 h-4" />
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Inicio;

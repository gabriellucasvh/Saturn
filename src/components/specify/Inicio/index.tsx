import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRight } from "lucide-react";
import Personalize from "./Personalize";

const Inicio = () => {
  return (
    <main className="flex flex-col lg:flex-row justify-between items-center h-screen pb-44">
      <div className="flex-1 flex flex-col justify-center lg:justify-start space-y-4 lg:space-y-6">
        <h1 className="text-3xl sm:text-5xl font-redHat mt-10 lg:text-7xl text-purple-700 -mb-4">
          <AnimatedShinyText>Inteligência Poderosa.</AnimatedShinyText>
        </h1>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-redHat">
          Soluções escaláveis.
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-light">
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

      <div className="flex-1 flex justify-center lg:justify-end items-center">
        <Image
          src="/logo.png"
          alt="saturn"
          width={300}
          height={300}
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
        />
      </div>
      <div className="absolute bottom-4 flex items-center justify-center left-0 right-0	">
        <Personalize />
      </div>
    </main>
  );
};

export default Inicio;

import { AnimatedBeam } from "@/components/ui/animated-beam";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { AnimatedBeamDemo } from "@/components/ui/AnimatedBeam";
import React from "react";

const Desenvolvimento = () => {
  return (
    <div >
      <h3 className="text-xl sm:text-2xl pb-2 bg-gradient-to-r from-pink-500 via-blue-500 to-blue-100 bg-clip-text text-transparent inline-block">
        <AnimatedShinyText>Desenvolvimento</AnimatedShinyText>
      </h3>
      <h4 className="text-3xl sm:text-5xl pb-2">
        Desenvolvimento Ágil e Colaborativo
      </h4>
      <p className="w-full sm:w-3/4 lg:w-1/2 text-sm sm:text-base">
        Nosso processo de desenvolvimento é colaborativo e ágil, garantindo que
        cada etapa, desde a concepção até a implementação, seja feita com foco
        nas suas necessidades e objetivos, entregando soluções eficientes e
        personalizadas.
      </p>
      <AnimatedBeamDemo />
    </div>
  );
};

export default Desenvolvimento;

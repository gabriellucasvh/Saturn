import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Personalize = () => {
  return (
    <div>
      <div className="w-full mt-8 lg:mt-0 text-center lg:w-full lg:bottom-8">
        <p className="text-xs sm:text-sm text-white/60">
          Personalize nossa IA de texto como você preferir para o seu time.
          <Link
            href="/"
            className="font-bold text-white hover:text-purple-300 transition-colors duration-300"
          >
            Fale como você quer que seja
            <ArrowRight className="inline ml-1 w-4 h-4" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Personalize;

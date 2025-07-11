"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/LinkButton";
import { Profile } from "@/components/Profile";
import { links } from "@/data/links";
import ProductsCarousel from "@/components/ProductsCarousel";

export default function Home() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white p-4 sm:p-6 md:p-8">
      <Profile
        src="/images/profile.png"
        alt="Foto de Luís Araújo"
        name="@luisaraujo"
        description="Desenvolvedor Web • React • Next.js"
      />

      <p className="text-gray-400 mt-4 text-center text-sm sm:text-base max-w-xs sm:max-w-md">
        Meus links estão aqui abaixo 👇
      </p>

      <div className="w-full max-w-md mt-8">
        {links.map((link, index) => {
          if (link.label === "Ver produtos") {
            return (
              <button
                key={index}
                onClick={() => setShowProducts(!showProducts)}
                className="flex items-center gap-3 w-full bg-green-600 text-white font-medium py-3 px-4 rounded-xl my-3 hover:bg-green-700 transition"
              >
                <link.icon className="w-5 h-5" />
                <span className="flex-1 text-center">{link.label}</span>
              </button>
            );
          }
          return <LinkButton key={index} {...link} />;
        })}
      </div>

      {showProducts && (
        <ProductsCarousel/>
      )}

      <Footer />
    </main>
  );
}

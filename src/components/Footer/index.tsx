import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-400 mt-10 flex-wrap">
      <a
        href="https://luisaraujo.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-white transition"
        aria-label="Ir para o portfólio de Luís Araújo"
      >
        <span>Feito por Luís Araújo</span>
        <Image
          src="/images/logo-la.png"
          alt="Logomarca LA"
          width={45}
          height={45}
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
      </a>
    </footer>
  );
}

import Image from "next/image";

type ProductCardProps = {
  image: string;
  title: string;
  content: string;
  link: string;
};

export function ProductCard({ image, title, content, link }: ProductCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-4 mb-4 text-center">
      <Image
        src={image}
        alt={title}
        width="300"
        height="200"
        className="rounded-md mx-auto w-full max-w-[300px] h-auto"
      />
      <h3 className="text-lg sm:text-xl font-semibold mt-3">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400 mt-1">{content}</p>
      <a
        href={link}
        className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm sm:text-base"
        target="_blank"
        rel="noopener noreferrer"
      >
        Quero saber mais
      </a>
    </div>
  );
}

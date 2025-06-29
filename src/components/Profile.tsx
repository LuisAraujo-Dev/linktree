import Image from "next/image";

type ProfileProps = {
  src: string;
  alt: string;
  name: string;
  description: string;
};

export function Profile({ src, alt, name, description }: ProfileProps) {
  return (
    <div className="text-center">
      <Image
        src={src}
        alt={alt}
        width={112}
        height={112}
        className="rounded-full mx-auto border-4 border-green-600"
      />
      <h1 className="text-2xl mt-4 font-bold">{name}</h1>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

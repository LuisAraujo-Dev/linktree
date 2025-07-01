import Image from "next/image";

type ProductCardProps = {
  image: string,
  title: string, 
  content: string, 
  link: string, 
}

export function ProductCard({image, title, content, link}: ProductCardProps) {
  return (
    <div>
      <Image src={image} alt={title} width="300" height="200"/>
      <h3>{title}</h3>
      <p>{content}</p>
      <a href={link}>Quero saber mais</a>
    </div>
  )
}
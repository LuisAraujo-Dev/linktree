'use client'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ProductCard } from "@/components/ProductCard"
import { products } from "@/data/products"

export default function ProductsCarousel() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
    },
    loop: true,
  })

  return (
    <section className="w-full max-w-md mt-12">
      <h2 className="text-xl font-bold mb-4">Produtos em destaque</h2>
      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <div key={product.id} className="keen-slider__slide">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  )
}
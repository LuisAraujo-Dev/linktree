'use client'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ProductCard } from "@/components/ProductCard"
import { products } from "@/data/products"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function ProductsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    mode: "free-snap",
  })

  const goPrev = () => instanceRef.current?.prev()
  const goNext = () => instanceRef.current?.next()

  return (
    <section className="w-full max-w-md mt-12 relative">
      <h2 className="text-xl font-bold mb-4 text-center">Produtos em destaque</h2>

      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {products.map((product, index) => {
            const isActive = index === currentSlide

            return (
              <div
                key={product.id}
                className={`keen-slider__slide flex justify-center transition-all duration-300 ${
                  isActive
                    ? "scale-100 opacity-100 z-10"
                    : "scale-90 opacity-50 z-0"
                }`}
              >
                <div className="w-[90%] sm:w-[80%]">
                  <ProductCard {...product} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-[-1.5rem] transform -translate-y-1/2 text-white bg-slate-800 rounded-full p-2 shadow hover:bg-slate-700 z-20"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={goNext}
          className="absolute top-1/2 right-[-1.5rem] transform -translate-y-1/2 text-white bg-slate-800 rounded-full p-2 shadow hover:bg-slate-700 z-20"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}
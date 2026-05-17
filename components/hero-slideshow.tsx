"use client"

import { useEffect, useState } from "react"

const images = [
  { src: "/hero-1-backbend-sunset-rocks.webp", alt: "Georgia Marnham practising backbend on rocks at sunset, Sintra coast, Portugal" },
  { src: "/hero-2-headstand-beach-cliffs.webp", alt: "Iyengar Yoga headstand pose on beach cliffs near Colares, Portugal" },
  { src: "/hero-3-balance-pose-sunset.webp", alt: "Yoga balance pose at sunset near Sintra, Portugal" },
  { src: "/hero-4-handstand-beach-dog.webp", alt: "Yoga handstand on beach near Cascais, Portugal" },
  { src: "/hero-5-walking-beach-mat.webp", alt: "Georgia Marnham walking on the beach with yoga mat near Colares, Sintra" },
]

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 70%" }}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute inset-0 w-full h-full bg-black/10" />
    </div>
  )
}

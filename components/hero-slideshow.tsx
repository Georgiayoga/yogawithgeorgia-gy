"use client"

import { useEffect, useState } from "react"

const images = [
  "/hero-1-backbend-sunset-rocks.webp",
  "/hero-2-headstand-beach-cliffs.webp",
  "/hero-3-balance-pose-sunset.webp",
  "/hero-4-handstand-beach-dog.webp",
  "/hero-5-walking-beach-mat.webp",
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
          key={image}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image || "/placeholder.svg"}
            alt="Iyengar Yoga practice by the coast"
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

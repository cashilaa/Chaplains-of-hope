"use client"

import { useEffect, useState } from "react"
import { cn } from "../../lib/utils"

interface ParallaxHeroProps {
  backgroundImage: string
  title: string
  subtitle?: string
  height?: string
  overlayOpacity?: number
  className?: string
}

export function ParallaxHero({
  backgroundImage,
  title,
  subtitle,
  height = "h-[60vh]",
  overlayOpacity = 0.5,
  className,
}: ParallaxHeroProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className={cn("relative overflow-hidden", height, className)}>
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollPosition * 0.3}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl max-w-3xl animate-fade-in animation-delay-300">{subtitle}</p>}
      </div>
    </section>
  )
}


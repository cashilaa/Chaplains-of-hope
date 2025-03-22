"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "../../lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function AnimatedSection({ children, className, delay = 0, direction = "up" }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const getTransformValue = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translateY(40px)"
        case "down":
          return "translateY(-40px)"
        case "left":
          return "translateX(40px)"
        case "right":
          return "translateX(-40px)"
        default:
          return "translateY(40px)"
      }
    }
    return "translate(0)"
  }

  return (
    <div
      ref={sectionRef}
      className={cn(className)}
      style={{
        transform: getTransformValue(),
        opacity: isVisible ? 1 : 0,
        transition: `transform 0.8s ease-out ${delay}s, opacity 0.8s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}


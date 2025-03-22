"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "../../lib/utils"

interface CardHoverProps {
  children: React.ReactNode
  className?: string
}

export function CardHover({ children, className }: CardHoverProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out group",
        isHovered ? "shadow-xl scale-[1.02]" : "shadow-md",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}


"use client"

import type React from "react"

import { useEffect, useRef } from "react"

// Framer Motion-ready animation utilities
export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animation]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

// Stagger animation utility
export const useStaggerAnimation = (delay = 100) => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animation]")
    elements.forEach((el, index) => {
      const element = el as HTMLElement
      element.style.animationDelay = `${index * delay}ms`
    })
  }, [delay])
}

// Parallax scroll effect
export const useParallaxScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll("[data-parallax]")

      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement
        const speed = Number.parseFloat(htmlElement.dataset.parallax || "0.5")
        const yPos = -(scrolled * speed)
        htmlElement.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
}

// Magnetic button effect
export const useMagneticEffect = () => {
  useEffect(() => {
    const magneticElements = document.querySelectorAll("[data-magnetic]")

    magneticElements.forEach((element) => {
      const htmlElement = element as HTMLElement

      const handleMouseMove = (e: MouseEvent) => {
        const rect = htmlElement.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        htmlElement.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
      }

      const handleMouseLeave = () => {
        htmlElement.style.transform = "translate(0px, 0px)"
      }

      htmlElement.addEventListener("mousemove", handleMouseMove)
      htmlElement.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        htmlElement.removeEventListener("mousemove", handleMouseMove)
        htmlElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    })
  }, [])
}

// Text reveal animation
export const useTextReveal = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll("[data-text-reveal]")

    textElements.forEach((element) => {
      const htmlElement = element as HTMLElement
      const text = htmlElement.textContent || ""
      const words = text.split(" ")

      htmlElement.innerHTML = words
        .map(
          (word, index) =>
            `<span style="display: inline-block; opacity: 0; transform: translateY(20px); animation-delay: ${index * 100}ms;" class="animate-fade-in-up">${word}</span>`,
        )
        .join(" ")
    })
  }, [])
}

// Floating elements animation
export const useFloatingAnimation = () => {
  useEffect(() => {
    const floatingElements = document.querySelectorAll("[data-floating]")

    floatingElements.forEach((element, index) => {
      const htmlElement = element as HTMLElement
      const duration = 3000 + index * 500 // Stagger the animations
      const amplitude = 10 + index * 5 // Different amplitudes

      const animate = () => {
        htmlElement.style.animation = `floating ${duration}ms ease-in-out infinite`
        htmlElement.style.animationDelay = `${index * 200}ms`
      }

      animate()
    })

    // Add floating keyframes to CSS
    const style = document.createElement("style")
    style.textContent = `
      @keyframes floating {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])
}

// Main animation component
export default function AdvancedAnimations({ children }: { children: React.ReactNode }) {
  const scrollRef = useScrollAnimation()

  useStaggerAnimation(150)
  useParallaxScroll()
  useMagneticEffect()
  useTextReveal()
  useFloatingAnimation()

  return <div ref={scrollRef}>{children}</div>
}

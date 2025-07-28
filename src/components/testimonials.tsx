"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "Marketing Director",
    image: "face4.webp",
    quote:
      "ADmyBRAND AI Suite transformed our marketing campaigns. We saw a 300% increase in engagement and 150% boost in conversions within the first month.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Growth Dynamics",
    role: "CEO",
    image: "face.webp",
    quote:
      "The AI-powered content generation is incredible. What used to take our team hours now takes minutes, and the quality is consistently outstanding.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Brand Builders",
    role: "Creative Director",
    image: "face3.jpg",
    quote:
      "The multi-platform management feature is a game-changer. We can now handle all our clients campaigns from one dashboard with unprecedented efficiency.",
    rating: 5,
  },
  {
    name: "David Thompson",
    company: "Scale Marketing",
    role: "VP of Marketing",
    image: "face2.webp",
    quote:
      "The real-time analytics and automated optimization have revolutionized how we approach campaign management. ROI has never been better.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI Suite.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mr-4 shadow-lg"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full p-3 bg-white/60 backdrop-blur-md border-white/20 hover:bg-white/80"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full p-3 bg-white/60 backdrop-blur-md border-white/20 hover:bg-white/80"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

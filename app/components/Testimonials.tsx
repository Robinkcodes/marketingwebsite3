"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    quote: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    author: "Michael Kaizer",
    position: "CEO of Basecamp Corp",
    image: "/placeholder.svg"
  },
  // Add more testimonials here
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-3xl font-medium mb-12 text-center">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold">{testimonials[currentIndex].author}</div>
                <div className="text-gray-600">{testimonials[currentIndex].position}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={prev}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">
                {String(currentIndex + 1).padStart(2, '0')}/{String(testimonials.length).padStart(2, '0')}
              </span>
              <Button variant="outline" size="icon" onClick={next}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


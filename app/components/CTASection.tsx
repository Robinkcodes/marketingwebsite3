import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-[#1f2580] text-white py-20 rounded-t-[2.5rem]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl font-bold">Ready to work with us?</h2>
          <Button variant="secondary" size="lg">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}


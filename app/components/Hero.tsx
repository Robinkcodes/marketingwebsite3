import { Button } from '@/components/ui/button'
import { TrendingUp } from 'lucide-react'

// Previous imports remain the same

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Stay ahead of the curve with our forward-thinking
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              An award-winning SEO agency with disciplines in digital marketing,
              design, and website development, focused on understanding you.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-[#1f2580] hover:bg-[#1f2580]/90"
              >
                Schedule Call
                <span className="ml-2">→</span>
              </Button>
              <Button variant="outline" size="lg">
                View Case Study
              </Button>
            </div>
            <div className="mt-12">
              <p className="text-sm text-gray-600 mb-4">Trusted by the world's biggest brands</p>
              <div className="flex gap-8">
                <Image src="/placeholder.svg" alt="Afterpay" width={120} height={40} className="grayscale" />
                <Image src="/placeholder.svg" alt="Basecamp" width={120} height={40} className="grayscale" />
                <Image src="/placeholder.svg" alt="Maze" width={120} height={40} className="grayscale" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 relative">
              <div className="absolute -top-8 -right-8 bg-[#1f2580] text-white p-4 rounded-full">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-6xl font-bold mb-4">230+</div>
              <p className="text-gray-600">
                some big companies that we work with, and trust us very much
              </p>
            </div>
            <div className="mt-8 bg-[#1f2580] text-white rounded-2xl p-8">
              <div className="mb-4">Drive More Traffic and Sales</div>
              <div className="text-2xl font-bold mb-6">
                Drive more traffic and product sales
              </div>
              <div className="h-32 relative">
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


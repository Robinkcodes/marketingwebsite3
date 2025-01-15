import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1f2580] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <Link href="/" className="text-2xl font-bold mb-6 block">
              MAC
            </Link>
            <p className="text-gray-400 mb-6">
              We offer a comprehensive suite of digital marketing services that cover all aspects
              of our online presence. From SEO and social media marketing to content creation and
              PPC advertising, they have the expertise and resources to handle our diverse
              marketing needs.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white">Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Agency</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Case Study</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Resource</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Licence</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Copyright</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Email Address</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">(406) 555-0120</li>
              <li className="text-gray-400">Hey@boostim.com</li>
              <li className="text-gray-400">2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}


import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const articles = [
  {
    dot: 'bg-blue-500',
    readTime: '5 min read',
    title: 'How a Digital Marketing Agency Can Boost Your Business',
    description: 'We are the top digital marketing agency for branding corp. We offer a full rang engine ...',
    buttonVariant: 'default' as const
  },
  {
    dot: 'bg-red-500',
    readTime: '5 min read',
    title: 'The Latest Trends and Strategies with a Digital Marketing Agency',
    description: 'Working with this digital marketing agency has been a true partnership. They have tak...',
    buttonVariant: 'outline' as const
  },
  {
    dot: 'bg-purple-500',
    readTime: '5 min read',
    title: 'Maximizing ROI with the Expertise of a Digital Marketing Agency',
    description: 'What sets this digital marketing agency apart is their commitment to transparency a...',
    buttonVariant: 'outline' as const
  }
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-4xl font-bold max-w-2xl">
            Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
          </h2>
          <Button variant="outline">See more</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${article.dot}`} />
                <span className="text-sm text-gray-500">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{article.title}</h3>
              <p className="text-gray-600 mb-6">{article.description}</p>
              <Button variant={article.buttonVariant} size="sm">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


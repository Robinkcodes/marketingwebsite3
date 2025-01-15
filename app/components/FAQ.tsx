"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Why is digital marketing important for my business?",
    answer: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer: "Digital marketing improves your website's visibility through various strategies including SEO, content marketing, social media marketing, and paid advertising. These techniques help your website rank higher in search results and attract more qualified traffic."
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer: "The timeline for digital marketing results varies depending on the strategies implemented. Some tactics like PPC advertising can show immediate results, while others like SEO may take 3-6 months to show significant improvements. We provide regular progress reports to track all metrics."
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer: "We measure success through various metrics including website traffic, conversion rates, engagement rates, ROI, and other KPIs specific to your business goals. Our comprehensive analytics tools provide detailed insights into campaign performance."
  }
]

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Digital Marketing FAQs</h2>
          <p className="text-gray-600 mb-8">
            As a leading digital marketing agency, we are dedicated to providing
            comprehensive educational resources and answering frequently asked questions to help our clients.
          </p>
          
          <Accordion type="single" collapsible className="mb-8">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex gap-4">
            <Button variant="outline">More Questions</Button>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}


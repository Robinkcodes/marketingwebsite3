export default function Services() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Digital Marketing</h2>
          <p>We help you reach your target audience through various digital channels.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Web Development</h2>
          <p>We create stunning, responsive websites tailored to your business needs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">SEO Optimization</h2>
          <p>We improve your search engine rankings to drive more organic traffic.</p>
        </div>
      </div>
    </div>
  )
}


import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[400px] bg-gradient-to-r from-[#06529e] to-[#04437f] flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">Leading provider of HVAC solutions with decades of experience in the industry</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 30 years of experience in the HVAC industry, we have established ourselves as a trusted partner for businesses and organizations seeking reliable climate control solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our commitment to excellence, innovation, and customer satisfaction has made us a leader in providing comprehensive HVAC systems, from design and installation to maintenance and support.
              </p>
              <p className="text-lg text-gray-700">
                We work with the world's leading brands to deliver cutting-edge technology and energy-efficient solutions that meet the unique needs of each client.
              </p>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20HVAC%20technicians%20working%20on%20modern%20air%20conditioning%20system%20installation%20in%20a%20bright%20commercial%20building%20with%20advanced%20equipment%20and%20tools%20showing%20expertise%20and%20precision%20in%20climate%20control%20technology&width=600&height=400&seq=about1&orientation=landscape"
                alt="Our Team"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#06529e] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">30+ Years Experience</h3>
              <p className="text-gray-600">Decades of expertise in HVAC solutions and climate control systems</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#c59241] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Certified professionals dedicated to delivering excellence</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#06529e] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-2-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service and technical assistance</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#c59241] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">Premium products backed by comprehensive warranties</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-[#06529e] rounded-lg flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-700">We continuously embrace new technologies and methods to provide the most advanced HVAC solutions available in the market.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#c59241] rounded-lg flex items-center justify-center mb-6">
                <i className="ri-heart-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-700">Honesty and transparency guide every interaction with our clients, partners, and team members.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#06529e] rounded-lg flex items-center justify-center mb-6">
                <i className="ri-leaf-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-700">We prioritize energy-efficient solutions that reduce environmental impact while maximizing performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-[#06529e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8">Let's discuss how we can help with your HVAC needs</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[#06529e] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </div>
      </section> */}
    </div>
  );
}
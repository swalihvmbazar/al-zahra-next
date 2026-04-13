import BrandsSection from '@/components/BrandsSection';
import Link from 'next/link';

export default function BrandsPage() {
  const brands = [
    {
      name: 'Carrier',
      logo: 'https://static.readdy.ai/image/ebd701424364cc43fde171abb332b56d/c0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e1.png',
      // description: 'Global leader in high-technology heating, air-conditioning and refrigeration solutions',
      // specialties: ['Commercial HVAC', 'Residential Systems', 'Refrigeration']
    },
    {
      name: 'Trane',
      logo: 'https://static.readdy.ai/image/ebd701424364cc43fde171abb332b56d/c0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e2.png',
      // description: 'World leader in air conditioning systems, services and solutions',
      // specialties: ['Building Automation', 'Energy Services', 'Climate Control']
    },
    {
      name: 'Daikin',
      logo: 'https://static.readdy.ai/image/ebd701424364cc43fde171abb332b56d/c0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e3.png',
      // description: 'World\'s largest air conditioning manufacturer with innovative VRV systems',
      // specialties: ['VRV Systems', 'Split Units', 'Air Purification']
    },
    {
      name: 'Mitsubishi Electric',
      logo: 'https://static.readdy.ai/image/ebd701424364cc43fde171abb332b56d/c0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e4.png',
      // description: 'Pioneer in ductless heating and cooling technology',
      // specialties: ['Ductless Systems', 'Heat Pumps', 'Multi-Zone Solutions']
    },
    {
      name: 'York',
      logo: 'https://static.readdy.ai/image/ebd701424364cc43fde171abb332b56d/c0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e5.png',
      // description: 'Trusted name in commercial and residential HVAC equipment',
      // specialties: ['Rooftop Units', 'Chillers', 'Air Handlers']
    },
    {
      name: 'Lennox',
      logo: 'https://static.readdy.ai/image/ebd701424364cc43fde171abb332b56d/c0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e6.png',
      // description: 'Premium heating and cooling products with advanced efficiency',
      // specialties: ['Furnaces', 'Heat Pumps', 'Air Conditioners']
    },
    {
      name: 'Rheem',
      logo: 'https://static.readdy.ai/image/ebd701424364cc43fde171abb332b56d/c0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e7.png',
      // description: 'Leading manufacturer of water heating and HVAC products',
      // specialties: ['Water Heaters', 'Package Units', 'Gas Furnaces']
    },
    {
      name: 'Goodman',
      logo: 'https://static.readdy.ai/image/ebd701424364cc43fde171abb332b56d/c0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e8.png',
      // description: 'Affordable, reliable heating and cooling solutions',
      // specialties: ['Residential HVAC', 'Value Solutions', 'Warranty Coverage']
    },
    {
      name: 'American Standard',
      logo: 'https://static.readdy.ai/image/ebd701424364cc43fde171abb332b56d/c0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e9.png',
      // description: 'Quality HVAC systems with exceptional durability',
      // specialties: ['Comfort Systems', 'Indoor Air Quality', 'Smart Thermostats']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[400px] bg-gradient-to-r from-[#06529e] to-[#04437f] flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl font-bold text-white mb-4">Our Brands</h1>
          <p className="text-xl text-white/90 max-w-2xl">Partnering with the world's leading HVAC manufacturers</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted Brand Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work exclusively with industry-leading manufacturers to ensure our clients receive the highest quality HVAC products and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
                <div className="h-20 flex items-center justify-center mb-6">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{brand.name}</h3>
                {/* <p className="text-gray-600 mb-6">{brand?.description}</p> */}
                {/* <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#06529e] mb-2">Specialties:</p>
                  {brand?.specialties?.map((specialty, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <i className="ri-check-line text-[#c59241] mr-2"></i>
                      <span>{specialty}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandsSection />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why We Choose These Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#06529e] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-medal-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Quality</h3>
              <p className="text-gray-600">Decades of manufacturing excellence and industry leadership</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c59241] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">Cutting-edge technology and continuous product development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#06529e] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-star-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">Dependable performance backed by comprehensive warranties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c59241] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support</h3>
              <p className="text-gray-600">Excellent manufacturer support and parts availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#06529e] to-[#04437f] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Interested in Our Products?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contact us to learn more about our brand partnerships and available products</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#06529e] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
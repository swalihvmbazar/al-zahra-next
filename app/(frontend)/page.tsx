import Link from 'next/link';
import BrandsSection from '@/components/BrandsSection';
import ProductsSection from '@/components/ProductsSection';
import ProjectHighlights from '@/components/ProjectHighlights';

export default function Home() {

  const industries = [
    { name: 'Airports & Metro Systems', icon: 'ri-plane-line' },
    { name: 'Hospitals & Healthcare', icon: 'ri-hospital-line' },
    { name: 'Commercial Malls & Hotels', icon: 'ri-building-line' },
    { name: 'Schools & Universities', icon: 'ri-school-line' },
    { name: 'Factories & Industrial Facilities', icon: 'ri-factory-line' },
    { name: 'Residential & Contracting Works', icon: 'ri-home-line' }
  ];

  return (
    <div className="min-h-screen">
      <div 
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Modern%20industrial%20HVAC%20air%20conditioning%20system%20installation%20in%20large%20commercial%20building%20with%20exposed%20ductwork%2C%20pipes%2C%20and%20professional%20equipment%20in%20clean%20industrial%20environment%20with%20blue%20lighting%20and%20technical%20atmosphere&width=1920&height=1080&seq=hero001&orientation=landscape')`
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-white mb-6 animate-fade-in">
              Complete HVAC Solutions<br />for Every Industry
            </h1>
            <p className="text-lg text-white/95 mb-10">
              Premium AC parts, trusted global brands, and dependable HVAC supply across Saudi Arabia
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-[#c59241] text-white px-8 py-4 rounded-lg font-semibold  hover:bg-[#b38237] transition-colors whitespace-nowrap"
              >
                Explore Products
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-[#06529e] px-8 py-4 rounded-lg font-semibold  hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Download Catalogue
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#06529e]/10 rounded-full mx-auto mb-4">
                <i className="ri-time-line text-3xl text-[#06529e]"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10+ Years</h3>
              <p className="text-gray-600">Industry Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#06529e]/10 rounded-full mx-auto mb-4">
                <i className="ri-government-line text-3xl text-[#06529e]"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted</h3>
              <p className="text-gray-600">Govt. & Private Projects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#06529e]/10 rounded-full mx-auto mb-4">
                <i className="ri-award-line text-3xl text-[#06529e]"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Authorized</h3>
              <p className="text-gray-600">Brand Partnerships</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#06529e]/10 rounded-full mx-auto mb-4">
                <i className="ri-map-2-line text-3xl text-[#06529e]"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pan-Saudi</h3>
              <p className="text-gray-600">Supply Network</p>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Reliable HVAC Trading Partner</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are a leading supplier of premium HVAC materials and air conditioning spare parts across Saudi Arabia. With over a decade of industry expertise, we serve contractors, engineers, and project developers with top-quality products from globally recognized brands. Our comprehensive inventory includes insulation solutions, duct accessories, copper pipes, refrigerants, and complete HVAC system components. We pride ourselves on delivering exceptional service, technical support, and reliable supply chain management for projects of all scales—from residential installations to large-scale government and industrial developments.
            </p>
            <Link 
              href="/about" 
              className="inline-block bg-[#06529e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#04437f] transition-colors whitespace-nowrap"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>

      <ProductsSection />

      <BrandsSection />

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Trusted HVAC solutions across diverse sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-[#c59241]/10 rounded-full mb-4 group-hover:bg-[#c59241] transition-colors">
                  <i className={`${industry.icon} text-3xl text-[#c59241] group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectHighlights />
    </div>
  );
}